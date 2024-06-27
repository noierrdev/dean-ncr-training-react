import Header from "./components/header";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import TextField from '@mui/material/TextField';

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="flex flex-row">
        <div className="basis-1/2 bg-custom-blue">
          <img
            src="/img/touch-2.png"
            alt="touch-2"
            className="mt-20 w-full h-[900px] relative"
          />
          <div className="text-[40px] text-white font-bolda absolute top-[30%] left-20 w-[700px]">
            Get NCR® Training <br />
            FOR STRUCTURAL AND NERVOUS SYSTEM OPTIMIZATION
            <div className="text-xl font-normal text-[rgba(255,255,255,0.7)] mt-4">
              By offering NCR® to your patients as a part-time specialty
              practice, you can seamlessly increase your monthly gross income
              while treating the causes of your patients’ chronic complaints.
              Besides its amazing efficacy, NCR® has the advantage of delivering
              permanent results.
              <br />
              <br /> NCR Training Session
            </div>
            <Button
              variant="contained"
              size="medium"
              sx={{
                backgroundColor: "white",
                color: "#2E3192",
                "&:hover": {
                  backgroundColor: "#2E3192",
                  color: "white",
                },
              }}
            >
              Book now
            </Button>
          </div>
        </div>
        <div className="basis-1/2">
          <img
            src="/img/unnamed 1.png"
            alt="unnamed1"
            className="w-full mt-20 h-[900px]"
          />
        </div>
      </div>

      <div className="flex flex-row mt-20">
        <div className="basis-1/2 pl-20">
          <img src="/img/Screenshot_2024-05-21_045152-transformed 1.png" alt="screenshot" className="w-full"/>
        </div>
        <div className="basis-1/2 pr-20 ml-14">
          <div className="text-4xl text-[#2E3192] font-bold mt-20">      
            WHY LEARN NCR®?
          </div>
          <div className="text-lg font-medium text-[#475569] mt-10">
            Because it works for your patients and for you (as the therapist)! Now is the time for practitioners to learn NeuroCranial Restructuring® from its developer, Dean Howell, ND. Therapists and their patients are all frustrated by the lack of results most physical medicine delivers. Interest in NCR® is at an all-time high.
          </div>
          <img src="/img/Group 2.png" alt="grounp" className="mt-10 cursor-pointer"/>
        </div>
      </div>

      <div className="mt-20 text-[#2E3192]">
        <div className="text-4xl font-bold mt-20 text-center">      
          Course Description 
        </div>
        <div className="text-xl font-normal text-center mt-10">
          Discover the transformative potential of NeuroCranial Restructuring® (NCR®) therapy.<br/>
          Learn how gentle manipulations and precise techniques can rebalance cranial dynamics, unleashing the body's innate healing abilities.
        </div>
        <div className="flex flex-row space-x-10 mt-10 px-20">
          <div className="basis-1/3 flex justify-center">
            <Card sx={{ maxWidth: 400 }}>
              <CardMedia
                sx={{ height: '300px' }}
                image="/img/pexels-polina-tankilevitch-4723260 1.png"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{color: '#475569', fontSize: '20px'}}>
                  <div className="flex space-x-3 items-center">
                    <div className="flex space-x-1 items-center">
                      <CalendarMonthIcon />
                      <div>26~31</div>
                    </div>
                    <div className="flex space-x-1 items-center">
                      <LocationOnIcon />
                      <div>Brooklyn</div>
                    </div>
                  </div>
                </Typography>
                <Typography variant="body2" sx={{color: '#2E3192', fontWeight: 700, fontSize: '22px'}}>
                  Everybody wants to be able to move freely
                </Typography>
              </CardContent>
              <div className="text-[40px] font-bold text-[#2E3192] text-left ml-4">$6500-$8000</div>
            </Card>
          </div>
          <div className="basis-1/3 flex justify-center">
            <Card sx={{ maxWidth: 400 }}>
              <CardMedia
                sx={{ height: '300px' }}
                image="/img/pexels-arina-krasnikova-6998272 1.png"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{color: '#475569', fontSize: '20px'}}>
                  <div className="flex space-x-3 items-center">
                    <div className="flex space-x-1 items-center">
                      <CalendarMonthIcon />
                      <div>2~5</div>
                    </div>
                    <div className="flex space-x-1 items-center">
                      <LocationOnIcon />
                      <div>Los Angeles</div>
                    </div>
                  </div>
                </Typography>
                <Typography variant="body2" sx={{color: '#2E3192', fontWeight: 700, fontSize: '22px'}}>
                  Mastering NeuroCranial Restructuring®: Advanced Techniques for Effective Treatmen
                </Typography>
              </CardContent>
              <div className="text-[40px] font-bold text-[#2E3192] text-left ml-4">$123</div>
            </Card>
          </div>
          <div className="basis-1/3 flex justify-center">
            <Card sx={{ maxWidth: 400 }}>
              <CardMedia
                sx={{ height: '300px' }}
                image="/img/pexels-arina-krasnikova-6998273 1.png"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{color: '#475569', fontSize: '20px'}}>
                  <div className="flex space-x-3 items-center">
                    <div className="flex space-x-1 items-center">
                      <CalendarMonthIcon />
                      <div>3~6</div>
                    </div>
                    <div className="flex space-x-1 items-center">
                      <LocationOnIcon />
                      <div>Post Falls, ID</div>
                    </div>
                  </div>
                </Typography>
                <Typography variant="body2" sx={{color: '#2E3192', fontWeight: 700, fontSize: '22px'}}>
                  Exploring the Science Behind NCR®: Understanding Cranial Anatomy and Physiology
                </Typography>
              </CardContent>
              <div className="text-[40px] font-bold text-[#2E3192] text-left ml-4">$123</div>
            </Card>
          </div>
        </div>
      </div>

      <div className="flex mt-20 mx-20">
        <div className="basis-6/12">
          <div className="text-4xl text-[#2E3192] font-bold mt-20">
            NCR Calendar 2023
          </div>
          <div className="mt-10 text-[21px] text-[#475569] w-4/5">
            By offering NCR® to your patients as a part-time specialty practice, you can seamlessly increase your monthly gross income while treating the causes of your patients’ chronic complaints. Besides its amazing efficacy, NCR® has the advantage of delivering permanent results. Your patients will improve predictably and should receive, at most, one four-day series of treatment monthly. More treatment than that rarely improves the quality of the results. In fact, patients are sometimes worse with over-treatment!
          </div>
          <Button variant="contained" size="large" sx={{marginTop: '40px'}}>Explore</Button>
        </div>
        <div className="basis-6/12">
          <img src="/img/Group 1000001840.png" alt="Group" className="w-full"/>
        </div>
      </div>

      <div className="flex mt-20 mx-20">
        <div className="basis-1/2 text-right mr-40">
          <div className="text-4xl text-[#2E3192] font-bold mt-20">
            NCR® WILL FIT INTO YOUR LIFE
          </div>
          <div className="mt-10 text-[21px] text-[#475569]">
            By offering NCR® to your patients as a part-time specialty practice, you can seamlessly increase your monthly gross income while treating the causes of your patients’ chronic complaints. Besides its amazing efficacy, NCR® has the advantage of delivering permanent results. Your patients will improve predictably and should receive, at most, one four-day series of treatment monthly. More treatment than that rarely improves the quality of the results. In fact, patients are sometimes worse with over-treatment!
          </div>
          <Button variant="contained" size="large" sx={{marginTop: '40px'}}>Explore</Button>
        </div>
        <div className="basis-1/2">
          <img src="/img/pexels-karolina-grabowska-4506106.png" alt="pexels" className="w-full"/>
        </div>
      </div>

      <div className="mt-20 flex mx-20 space-x-28">
        <div className="basis-7/12">
          <div className="text-4xl text-[#2E3192] font-bold mt-20">
            Frequently Ask Questions
          </div>
          <Accordion sx={{marginTop: '60px'}}>
            <AccordionSummary
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <div className="flex flex-row text-xl font-medium text-[#010236] w-full">
                <div>01</div>
                <div className="ml-20">WHY SHOULD YOU LEARN NCRO?</div>
                <div className="ml-auto bg-[#2E3192] w-20 m-[-12px] mr-[-14px] text-white text-center pt-2 text-4xl">
                  +
                </div>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div className="text-[16px] font-light text-[#010236]"></div>
              It's because you deserve to learn the best!
              I will teach you a new way to see your patients/clients. After I teach you NeuroCranial RestructuringⓇ, you will never be able to look at physical medicine therapies the same way you do now. To put it simply, I want to teach you to do the greatest physical medicine therapy that I have ever seen or experienced! With this new paradigm of thinking and analysis, you will be
              able to tackle previously "untreatable" conditions with ease. Other treatments
              will be exposed to you as the symptom-treating shams that they really are.
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{marginTop: '60px'}}>
            <AccordionSummary
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <div className="flex flex-row text-xl font-medium text-[#010236] w-full">
                <div>02</div>
                <div className="ml-20">WHO CAN BE TRAINED TO BECOME AN NCR PRACTITIONER?</div>
                <div className="ml-auto bg-[#2E3192] w-20 m-[-12px] mr-[-14px] text-white text-center pt-2 text-4xl">
                  +
                </div>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div className="text-[16px] font-light text-[#010236]"></div>
              It's because you deserve to learn the best!
              I will teach you a new way to see your patients/clients. After I teach you NeuroCranial RestructuringⓇ, you will never be able to look at physical medicine therapies the same way you do now. To put it simply, I want to teach you to do the greatest physical medicine therapy that I have ever seen or experienced! With this new paradigm of thinking and analysis, you will be
              able to tackle previously "untreatable" conditions with ease. Other treatments
              will be exposed to you as the symptom-treating shams that they really are.
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{marginTop: '60px'}}>
            <AccordionSummary
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <div className="flex flex-row text-xl font-medium text-[#010236] w-full">
                <div>03</div>
                <div className="ml-20">HOW LONG IS THE COURSE?</div>
                <div className="ml-auto bg-[#2E3192] w-20 m-[-12px] mr-[-14px] text-white text-center pt-2 text-4xl">
                  +
                </div>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div className="text-[16px] font-light text-[#010236]"></div>
              It's because you deserve to learn the best!
              I will teach you a new way to see your patients/clients. After I teach you NeuroCranial RestructuringⓇ, you will never be able to look at physical medicine therapies the same way you do now. To put it simply, I want to teach you to do the greatest physical medicine therapy that I have ever seen or experienced! With this new paradigm of thinking and analysis, you will be
              able to tackle previously "untreatable" conditions with ease. Other treatments
              will be exposed to you as the symptom-treating shams that they really are.
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{marginTop: '60px'}}>
            <AccordionSummary
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <div className="flex flex-row text-xl font-medium text-[#010236] w-full">
                <div>04</div>
                <div className="ml-20">HOW CAN I TRANSITION MY BUSINESS INTO AN NCR BUSINESS?</div>
                <div className="ml-auto bg-[#2E3192] w-20 m-[-12px] mr-[-14px] text-white text-center pt-2 text-4xl">
                  +
                </div>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <div className="text-[16px] font-light text-[#010236]"></div>
              It's because you deserve to learn the best!
              I will teach you a new way to see your patients/clients. After I teach you NeuroCranial RestructuringⓇ, you will never be able to look at physical medicine therapies the same way you do now. To put it simply, I want to teach you to do the greatest physical medicine therapy that I have ever seen or experienced! With this new paradigm of thinking and analysis, you will be
              able to tackle previously "untreatable" conditions with ease. Other treatments
              will be exposed to you as the symptom-treating shams that they really are.
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="basis-5/12 bg-custom-blue">
          <img src="/img/Dr 1.png" alt="Dr1" className="w-full h-[800px]"/>
        </div>
      </div>

      <div className="mt-20 mx-20">
        <div className="text-4xl text-[#2E3192] font-bold mt-20 text-center">
          Our Staff Roster
        </div>
        <div className="flex w-full bg-[#E9EAF8] py-10 px-5 mt-10 space-x-5" style={{ boxShadow: '0 10px 20px rgba(0, 0, 0, 0.25)' }}>
          <div className="basis-2/12">
            <img src="/img/Frame 1000004271.png" alt="AAA" className="w-full"/>
          </div>
          <div className="basis-9/12">
            <div className="text-[28px] font-bold text-[#19191B]">Minister of Healing Technologies Peter Radatti</div>
            <div className="text-[21px] font-normal mt-5">
              Reverend Peter began as a physicist and worked for NASA and other organizations as a scientist before founding CyberSoft, the first anti-viral computer service company over 30 years ago. As a side project, he developed an alternative to baking flour. What is amazing about the Magic Flour is that it is high in fiber content, has no carbohydrates, will not feed insects or rodents, and there is no way to become allergic to it. Is magic, indeed! Rev Peter is also a developer of radionic equipment, and he has written a series of radionic textbooks that are best-sellers on Amazon. We have named our Radionics Department is his honor. Members can buy his amazing technology from the Members’ Store. Members can also read Rev Peter’s writings….
            </div>
          </div>
        </div>
        <div className="flex w-full py-10 px-5 mt-10 space-x-5" style={{ boxShadow: '0 10px 20px rgba(0, 0, 0, 0.25)' }}>
          <div className="basis-10/12 text-right mt-20">
            <div className="text-[28px] font-bold text-[#19191B]">Deacon Juan Abi</div>
            <div className="text-[21px] font-normal mt-5">
              She joined our organization in 2019, prior to her marriage and move to Pakistan. She is a well-known personality on TikTok.
            </div>
          </div>
          <div className="basis-2/12">
            <img src="/img/Team Avatar.png" alt="AAA" className="w-full"/>
          </div>
        </div>
        <div className="flex w-full bg-[#E9EAF8] py-10 px-5 mt-10 space-x-5" style={{ boxShadow: '0 10px 20px rgba(0, 0, 0, 0.25)' }}>
          <div className="basis-2/12">
            <img src="/img/Team Avatar.png" alt="AAA" className="w-full"/>
          </div>
          <div className="basis-9/12">
            <div className="text-[28px] font-bold text-[#19191B]">Deacon Alan Malter</div>
            <div className="text-[21px] font-normal mt-5">
              He became a Deacon in 2019. He is our Notary Public. Before his retirement, his career was as a bank auditor before becoming head of fulfillment shipping for The Essence of Life online store.
            </div>
          </div>
        </div>
        <div className="flex w-full py-10 px-5 mt-10 space-x-5" style={{ boxShadow: '0 10px 20px rgba(0, 0, 0, 0.25)' }}>
          <div className="basis-10/12 text-right mt-20">
            <div className="text-[28px] font-bold text-[#19191B]">Deacon Giona Corso-Winks</div>
            <div className="text-[21px] font-normal mt-5">
              He is currently a student in Utah. He has been a Member of the CODS community for years, and became a Deacon in 2021. His help with our equipment and operations have often been essential for our functions at headquarters.
            </div>
          </div>
          <div className="basis-2/12">
            <img src="/img/Team Avatar.png" alt="AAA" className="w-full"/>
          </div>
        </div>
      </div>

      <div className="mt-20 mx-20">
        <div className="text-4xl text-[#2E3192] font-bold mt-20 text-center">
          Enrollment Form
        </div>
        <div className="mt-5 text-xl font-normal text-center text-[#2E3192] w-[800px] m-auto">Your gateway to joining our community or program. Seamlessly capture essential details for a personalized experience.</div>
        <div className="w-[1200px] bg-[#E9EAF8] py-20 px-20 mt-10 m-auto " style={{ boxShadow: '0 10px 20px rgba(0, 0, 0, 0.25)' }}>
          <div className="flex  space-x-5">
              <div className="basis-1/2">
                <TextField id="outlined-basic" label="Name" variant="outlined" sx={{width: '100%'}}/>
                <TextField id="outlined-basic" label="Email" variant="outlined" sx={{width: '100%', marginTop: '48px'}}/>
                <TextField id="outlined-basic" label="Course Interest" variant="outlined" sx={{width: '100%', marginTop: '48px'}}/>
              </div>
              <div className="basis-1/2">
                <TextField
                  id="outlined-multiline-static"
                  label="Message"
                  multiline
                  rows={10}
                  sx={{width: '100%'}}
                />
              </div>
          </div>
          <Button variant="contained" size="large" sx={{width: '100%', marginTop: '50px'}}>Send Message</Button>
        </div>
      </div>
      <div className="mt-20 mx-20">
        <img src="/img/Group 1000001869.png" alt="img"/>
      </div>

      <div className="mt-20 bg-[#252775] w-full pb-10" style={{ backgroundImage: "url('/img/pexels-shvets-production-7176317 1.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        {/* <img src="/img/pexels-shvets-production-7176317 1.png" alt="img" className="w-full"/> */}  
          <div className="text-[62px] font-semibold text-white text-center pt-40">Put Life Into Your Ideas With Us</div>
          <div className="text-xl font-normal m-auto text-white text-center">Let’s discuss your project and find out what we can do to provide value.</div>
          <div className="w-[1000px] m-auto bg-white rounded-lg py-10 mt-10 px-10">
              <TextField id="outlined-basic" label="Name" variant="outlined" sx={{width: '100%'}}/>
              <TextField id="outlined-basic" label="Email" variant="outlined" sx={{width: '100%', marginTop: '48px'}}/>
              <TextField
                id="outlined-multiline-static"
                label="Your Message"
                multiline
                rows={10}
                sx={{width: '100%', marginTop: '48px'}}
              />
              <Button variant="contained" size="large" sx={{width: '100%', marginTop: '50px'}}>Send Message</Button>
          </div>
      </div>

      <div className="mt-20 flex mx-20 mb-10 text-[#000000] space-x-10">
        <div className="basis-1/2">
          <img src="/img/Logo_Big.png" alt="logo" className="w-[259px]"/>
          <div className="text-[43px] font-bold mt-5">About CoDS</div>
          <div className="text-[15px] font-medium">Church of Divine Structure (CoDS) specializes in transformative holistic healing, fostering spiritual growth, and well-being through personalized, innovative practices and ancient wisdom.</div>
          <div className="flex text-[16px] font-extrabold space-x-3">
            <p>Follow us</p>
            <TwitterIcon />
            <InstagramIcon />
            <FacebookIcon />
            <LinkedInIcon />
            <YouTubeIcon />
          </div>
        </div>
        <div className="basis-1/2 flex text-[16px] space-x-20">
          <div className="flex flex-col">
            <a href="/" className="text-[21px] font-bold">NCR®</a>
            <a href="/" className="mt-10">Schedule</a>
            <a href="/" className="mt-5">Courses</a>
            <a href="/" className="mt-5">Reviews</a>
            <a href="/" className="mt-5">Content</a>
            <a href="/" className="mt-5">Updates</a>
          </div>
          <div className="flex flex-col">
            <a href="/" className="text-[21px] font-bold">Company</a>
            <a href="/" className="mt-10">About</a>
            <a href="/" className="mt-5">Contact Us</a>
            <a href="/" className="mt-5">Blogs</a>
            <a href="/" className="mt-5">Careers</a>
          </div>
          <div className="flex flex-col">
            <a href="/" className="text-[21px] font-bold">Join a Newsletter</a>
            <TextField id="outlined-basic" label="Enter Your Email" variant="outlined" sx={{marginTop: '20px'}}/>
            <Button variant="contained" size="large" sx={{ marginTop: '30px'}}>Sign Up</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
