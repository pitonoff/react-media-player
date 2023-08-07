const Style = {
    container:{
        display:"flex",
        backgroundColor: "000",
        justifyContent:"center",
    },
    text: {
        color: "#fff",
        alignSelf:"center",
    },
};

const TopBar = () => {
    return (
      <div style={Style.container}>
        <p style={Style.text}>Two tracks AudioPlayer</p>
      </div>
    );
  };
  
  export default TopBar;