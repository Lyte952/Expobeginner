import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    //Container 
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    text: {
        color: '#595959',
        fontSize: 28,
        fontWeight: 700,
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
        width: 150,
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
        backgroundColor: "#cb8ff8f5",
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
        borderRadius: 12,
        borderWidth: 0.3,
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
        color: '#999999',
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
        backgroundColor: "#fff",
        fontSize: 16,
        borderWidth: 0.2,
        borderTopColor: "#cb8ff8f5",
        borderLeftColor: "#cb8ff8f5",
        borderBottomColor: "#cb8ff8f5",
        borderRightColor: "#cb8ff8f5",
        ...Platform.select({
            ios: {
              shadowColor: '#25292e',
              shadowOffset: { width: 6, height: 10 },
              shadowOpacity: 0.25,
              shadowRadius: 5,
            },
            android: {
              elevation: 10,
            },
          }),
        },
        icon: {
            padding: 8,
        },
  });