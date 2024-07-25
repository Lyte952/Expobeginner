import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    //Container 
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      top: -20,
    },

    text: {
        color: '#000',
        fontSize: 28,
        fontWeight: 700,
        width: "100%",
        marginLeft: "29%",
    },
    subtext:{
        color: "#999999",
        fontWeight: 400,
        fontSize: 16,
    },

    imageContainer: {
        marginVertical: 50,
        paddingTop: 0,
    },
    image: {
        width: 250,
        height: 150,
        borderRadius: 18,
        zIndex: 1,
    },

    buttonContainer: {
        width: 350,
        height: 60,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
        backgroundColor: "#ff6a1e",
        borderRadius: 12,
      },
      button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
      },
      buttonIcon: {
        paddingRight: 8,
      },
      buttonLabel: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 600,
      },

      secondbuttonContainer: {
        width: "auto",
        height: 40,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
      },
      secondbutton: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
      },
      secondbuttonIcon: {
        paddingRight: 2,
      },
      secondbuttonLabel: {
        color: '#000',
        fontSize: 16,
        flexWrap: "nowrap",
      },
      
      footerContainer: {
        flex: 1 / 3,
        alignItems: 'center',
      },
    
      inputContainer: {
        width: 350,
        height: 60,
        marginBottom: 10,
      },
      input: {
        height: "100%",
        width: "100%",
        borderColor: 'gray',
        borderRadius: 12,
        marginTop: 10,
        marginBottom: 14,
        paddingHorizontal: 8,
        backgroundColor: "#f3f3f3",
        fontSize: 12,
        },
        icon: {
            padding: 8,
        },
  });