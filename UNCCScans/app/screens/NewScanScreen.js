//import { TextDecoder } from 'util';
import React, {useState, useEffect} from 'react';
import colors from '../config/colors';
import { View, StyleSheet, Text, Button, Image, TouchableOpacity, SafeAreaView, TextInput, Alert } from 'react-native';

import { Camera } from 'expo-camera';
import * as FileSystem from 'expo-file-system';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'

import * as Permissions from 'expo-permissions';
import * as Sharing from 'expo-sharing';


// Main Function
class NewScanScreen extends React.Component {
  constructor(props){
    super(props)
	this.state = {permission:null, camera:null, image:null, type:Camera.Constants.Type.back, picDataArray:[],
	              numPics:0};
	this.takePicture = this.takePicture.bind(this);
	this.createPdf = this.createPdf.bind(this);
  }

  componentDidMount() {
	if (this.state.permission === null) {
      (async () => {
	    const { status } = await Camera.requestCameraPermissionsAsync();
        this.setState({permission: (status==='granted')});
	  })();  
	}  // TODO: handle the case where it never gets permission (infinite loop?)
  }
  
  takePicture(){
	var camera = this.state.camera;
    if(camera){
      //const data = await camera.takePictureAsync();
	  console.log('entering take picture');
	  //let person = prompt("Please enter your name", "Harry Potter");
	  (async () => {
	    const data = await camera.takePictureAsync({base64:true}).catch((err) => {console.log(err);});
        this.state.picDataArray.push(data);
		this.setState({numPics: this.state.picDataArray.length});
	  })();
    }
	else{
	  console.log("No camera");
	}
  }

  // create and save pdf of image (after take picture)
  async createPdf() {
    console.log('creating pdf doc')
    const pdfDoc = await PDFDocument.create()
    const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)
  
    // Use base64 version of image (data is passed in from takePicture) 
	var pictureArray = this.state.picDataArray;
    console.log('embedding jpg ' + `${pictureArray.length}`);
    for (let i=0; i<pictureArray.length; i++){
      const jpg_img = await pdfDoc.embedJpg(pictureArray[i].base64)
  
      // Using pdf-lib, pdf page is made with image
      console.log('making page')
      const page = pdfDoc.addPage()
      const scaled = jpg_img.scaleToFit(page.getWidth(), page.getHeight())
      console.log('drawing image')
      page.drawImage(jpg_img, {
        x: 0,
  	    y: 0,
	    width: scaled.width,
        height: scaled.height
      })
    }
  
    // Save pdf as base64 string
    const pdfBase64Content = await pdfDoc.saveAsBase64()
    // Use FileSystem library to set target file path of pdf
    const fileURI: string = `${FileSystem.documentDirectory}mypdf.pdf`;
    console.log('Saving pdf to ', fileURI)
    // Write pdf to the target file path 
    await FileSystem.writeAsStringAsync(fileURI, pdfBase64Content, {encoding: FileSystem.EncodingType.Base64});
    // Allow user to share the pdf to their email or Canvas
    await Sharing.shareAsync(fileURI, {mimeType: 'application/pdf'}); 
  }

  
  render(){
      // check permissions
	  if (this.state.permission === null) {
		return <View><Text>Null permission</Text></View>;
	  }
	  if (this.state.permission === false) {
		return <Text>No access to camera</Text>;
	  }
	  const numPics = this.state.numPics;
	  return (
		
		<SafeAreaView style={styles.container}>
			
		  <View style={styles.cameraContainer}>
			<Camera 
			  ref={ref => {this.state.camera = ref}}
			  style={styles.camera} 
			  type={this.state.type} 
			  ratio={'1:1'} 
			/>
		  </View>
		  
		  
		  <Button
			style={styles.button}
			title="Flip Image"
			onPress={() => {
			  setType(
				type === Camera.Constants.Type.back
				  ? Camera.Constants.Type.front
				  : Camera.Constants.Type.back
			  );
			}}>
		  </Button>
		  <Button title="Take Picture" onPress={() => {this.takePicture()}} />
		  <Button title="Share PDF" onPress={() => {this.createPdf()}} />
		  <Text>Pictures Ready: {numPics}</Text>
		  <Button title="Clear Pictures" onPress={() => {this.setState({picDataArray:[], numPics:0})}} />
		  
		</SafeAreaView>
	  );
	}
}
//<Iframe id="pdf" style="width: 100%; height: 50%;"></Iframe>
//{image && <Image source={{uri: image}} style={{flex:1}} />}
//<TextInput onChangeText={(text)=>setScanCount(text)} placeholder="1" />
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center'
  },
  camera: {
    flex: 1,
    aspectRatio: 1,
  },
  cameraContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  button: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
});
export default NewScanScreen;
