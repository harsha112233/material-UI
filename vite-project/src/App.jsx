
import React, { Suspense } from 'react'
import { Grid } from '@material-ui/core'
const Home=React.lazy(()=>import("./Home"))


function App() {

  return (
    <div className="App">
    <Suspense fallback={<h1>loading</h1>}>
     {/* <Home /> */}
     <Grid lg={12} item container spacing={2}>
      <Grid item lg={3} xs={12} sm={6}  style={{backgroundColor:"yellow"}}>Block 1</Grid>
      <Grid item lg={3} xs={12} sm={6} style={{backgroundColor:"yellow"}}>Block 2</Grid>
      <Grid item lg={3} xs={12} sm={6} style={{backgroundColor:"yellow"}} >Block 3</Grid>
      <Grid item lg={3} xs={12} sm={6} style={{backgroundColor:"yellow"}}>Block 4</Grid>
     </Grid>
    </Suspense>
     
    </div>
  )
}

export default App
