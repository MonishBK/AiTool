  import { Box, Container } from "@mui/material"
  import Navbar from "../components/Navbar"
  import Banner from "../components/Banner"
  import Counters from "../components/Counters"
  import Information from "../components/Information"
  import GetUpdates from "../components/GetUpdates"
  import TopTools from "../components/TopTools"
  import Footer from "../components/Footer"
    
    const HomePage = () => {
      return (
        <Box sx={{bgcolor:'primary.main'}}>
            <Navbar />
            <Container maxWidth="lg">
                <Counters />
                <Banner />
                <TopTools />
                <Information />
                <GetUpdates />
            </Container>
                <Footer />
        </Box>
      )
    }
    
    export default HomePage