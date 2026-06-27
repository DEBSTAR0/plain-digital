export default function Home() {
  return (
    <main style={{background:'black',color:'white',minHeight:'100vh'}}>
      <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',textAlign:'center',padding:'40px',minHeight:'100vh'}}>
        <span style={{background:'#2563eb',padding:'4px 12px',borderRadius:'999px',fontSize:'12px',marginBottom:'20px'}}>BETA</span>
        <h1 style={{fontSize:'48px',fontWeight:'800',margin:0}}>PLAIN DIGITAL<br/>for modern creators</h1>
        <p style={{color:'#aaa',margin:'16px 0 32px',maxWidth:'500px'}}>We build clean, fast, and powerful websites that make your brand stand out.</p>
        <a href="#contact" style={{background:'#2563eb',color:'white',padding:'12px 24px',borderRadius:'8px',textDecoration:'none',fontWeight:'600'}}>Get Started</a>
        <img src="https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=800" style={{marginTop:'32px',borderRadius:'12px',maxWidth:'600px',width:'100%'}} alt="Digital Marketing"/>
      </div>
      
      <div id="contact" style={{padding:'100px 40px',textAlign:'center',background:'#111'}}>
        <h2 style={{fontSize:'32px',margin:0}}>It Worked! 🎉</h2>
        <p style={{color:'#aaa'}}>The button clicked broh. Email me: hello@plaindigital.com</p>
      </div>
    </main>
  )
}
