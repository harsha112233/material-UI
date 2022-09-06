import {AppBar, Button, Container, ImageList, ImageListItem, TextField, Toolbar, Typography} from '@material-ui/core'
import ImageData from './assets/ImageData.json'
import {makeStyles} from '@material-ui/core/styles'
import CameraEnhanceIcon from '@material-ui/icons/CameraEnhance';

const useStyles=makeStyles({
  text:{
    "marginTop":"70px",
    "textAlign":"center",
    "color":"green"
  }
})
function App() {
  const classes=useStyles();
  return (
    <div className="App">
      <AppBar>
        <Toolbar>
          <Typography variant='h4'><CameraEnhanceIcon />Photography</Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.text}>
        <Typography variant='h2'>Our latest version of Photography</Typography>
        <Typography variant='paragraph'>Pleaser to take your photos as well please fill the below form  </Typography>
      </Container>
      <Container style={{"marginTop":"70px"}}>
        <ImageList rowHeight={140} cols={4}>
          {
            ImageData.map((item,ind)=>{
              return(
                <>
                <ImageListItem cols={1}><img src={item.imgurl} alt="" /></ImageListItem>
                </>
              )
            })
          }
        </ImageList>
      </Container>
      <center>
        <Container style={{"marginTop":"70px"}}>
          <Typography variant='h3'>Contact Form</Typography>
          <form>
            <TextField style={{"width":"500px","margin":"10px"}} type="text" label="Name" variant="outlined" /><br />
            <TextField style={{"width":"500px","margin":"10px"}} type="email" label="Email" variant="outlined" /><br />
            <TextField style={{"width":"500px","margin":"10px"}} type="text" label="Address" variant="outlined" /><br />
            <TextField style={{"width":"500px","margin":"10px"}} type="text" label="praposal" variant="outlined" /><br />
            <Button variant="contained" color="primary">Submit</Button>
          </form>
        </Container>
      </center>
    </div>
  )
}

export default App
