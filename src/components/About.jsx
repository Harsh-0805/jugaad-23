import React from 'react'


function About() {
  return (
    <>
    <section className="aboutjugaad min-h-screen bg-gradient-to-b from-yellow-400 via-yellow-500 to-yellow-700 flex flex-col justify-center items-center">
  <div id="anima">
    <h1 className="text-black text-5xl font-roboto font-extrabold animate-bounce">
      About Jugaad
    </h1>
  </div>
  <p className="mt-16 text-2xl font-roboto text-black text-center mx-4 ">
    Jugaad by the Entrepreneurship Cell, VNIT Nagpur is an annual event which aims mainly at the development of skills like money multiplication, management, creative ideation, bargaining and what not!! 100 Rupees will be provided to each team and they have to maximize profits by using their creativity. It is an event that will thoroughly challenge even the best entrepreneurial minds out there and force everyone to think out of the box. Jugaad is must for those who wish to expand their horizon of knowledge into the real world and get a glimpse of what it's like to be an entrepreneur in you.
  </p>
  <div className="animation">
    <dotlottie-player src="https://lottie.host/e8957ec6-fe7d-40a9-af53-8f0bdb7b8b94/ggDLEH5Yui.json" background="transparent" speed="1" loop autoplay></dotlottie-player>
  </div>
</section>

    </>
  )
}

export default About