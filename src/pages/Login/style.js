import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  
  container: {
    paddingTop: 20,
    height: '100%',
    width: '100%'    
  },
  image: {
    marginTop: '20%',
    
  },
  logo: {    
    alignItems: 'center',    
    height: '35%',     
    justifyContent: "center",
    resizeMode: "stretch"
    
  },
  login:{    
    alignItems: "center",
    width: '100%',
    height: 60,
    marginBottom: 20,
    marginTop: '15%'
    
  },
  senha:{
    alignItems: "center",
    width: '100%',
    height: 60,
    
  },
  caixa: {
    borderWidth: 1,   
    width: '70%',
    height: 60,
    paddingLeft: 10,
    borderRadius: 8
        
  },
  cxswitch: {        
    flexDirection: "row",
    alignItems: "center",
    width: '100%',
    height: 60,
    justifyContent: "center",
  },
  switch: {
    


  },
  cxbuton: {
    width: '100%',
    height: 60,
    alignItems: "center",
    justifyContent: "center",
   
    
  },
  buton:{
    borderWidth: 1,
    width: '30%',
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    
  } 
  

});
export default styles;


