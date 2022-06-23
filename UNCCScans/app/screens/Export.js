import { exportComponentAsJPEG, exportComponentAsPDF, exportComponentAsPNG } from 'react-component-export-image';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import colors from '../config/colors';
import { View, StyleSheet, Text, Image, Alert } from 'react-native';

//First test for exporting photos - NOT FUNCTIONAL OR FINAL
//TODO Add code to set desired scan as Ref

const Export = () => {
    const componentRef = useRef();
    
    <View style={styles.logoContainer}>
      <Text style={styles.logoText}>Export a Scan</Text>
    </View>

    return (
      <React.Fragment>
        <ComponentToPrint ref={componentRef} />
        
        <TouchableOpacity 
          style={styles.exportButton}
            onPress={()=> {
               exportComponentAsJPEG(pdfDoc)
            }}
                >
        <Text style={styles.buttonText}>Export Scan As JPEG</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.exportButton}
            onPress={()=> {
              exportComponentAsPDF(pdfDoc)
            }}
                >
        <Text style={styles.buttonText}>Export Scan As PDF</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.exportButton}
            onPress={()=> {
               exportComponentAsPNG(pdfDoc)
               }}
                >
        <Text style={styles.buttonText}>Export Scan As PNG</Text>
        </TouchableOpacity>

      
      </React.Fragment>
    );
  };

  const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttonsContainer: {
        bottom: 170,
    },
    exportButton: {
        width: '100%',
        height: 70,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: colors.white,
        fontFamily: 'Futura',
        fontSize: 18
    },
    logoContainer: {
        alignItems: 'center',
    },
    logoText: {
        fontFamily: 'Futura',
        fontSize: 40, 
        fontWeight: 'bold',
        color: colors.primary,
        top: 60
    },

})
  
  export default Export;