'use client';

import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowRight, ArrowUpRight, BarChart3, Globe2, Megaphone, MousePointer2, Search, Share2, Sparkles, Target, TrendingUp, X, Menu, Code2, Users, MessageCircle, Check } from 'lucide-react';

const services = [
  { n:'01', icon:Target, title:'Performance marketing', desc:'Turn ad spend into measurable demand with campaigns built around qualified leads, efficient acquisition and real business outcomes.', tags:['Meta Ads','Google Ads','LinkedIn Ads','Remarketing'] },
  { n:'02', icon:Search, title:'SEO & organic growth', desc:'Build sustainable visibility across search, maps and emerging answer engines with a strategy rooted in intent and relevance.', tags:['SEO','Local SEO','AEO','GEO'] },
  { n:'03', icon:Share2, title:'Social media marketing', desc:'Make your brand worth following with thoughtful content systems, platform-native storytelling and consistent community building.', tags:['Content strategy','Social media','Creative direction','Community'] },
  { n:'04', icon:Megaphone, title:'Influencer marketing', desc:'Connect with the right creators, shape campaigns with a clear purpose and turn creator partnerships into brand momentum.', tags:['Creator discovery','Campaigns','Collaborations','Reporting'] },
  { n:'05', icon:Code2, title:'Website & landing pages', desc:'Create fast, intuitive digital experiences that communicate value clearly and move visitors towards meaningful action.', tags:['Web design','Development','Landing pages','CRO'] },
  { n:'06', icon:Users, title:'Lead generation', desc:'Reach the right audience with focused targeting, relevant offers and lead journeys designed to support your sales team.', tags:['Verified leads','Audience strategy','WhatsApp marketing','Lead funnels'] },
];
const industries = ['Real estate','E-commerce & D2C','Healthcare','Education','B2B & professional services','Hospitality & lifestyle'];
const process = [ ['Discover','Understand your business, audience, challenges and growth goals.'], ['Strategise','Build a focused roadmap across channels, messaging and measurement.'], ['Execute','Bring the strategy to life with coordinated creative and campaigns.'], ['Optimise','Learn from performance, improve what matters and scale with intent.'] ];

function Reveal({ children, delay=0, className='' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  return <motion.div className={className} initial={reduce ? false : {opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:0.16}} transition={{duration:.65,delay,ease:[.22,1,.36,1]}}>{children}</motion.div>;
}

export default function Home() {
  const [mobileOpen,setMobileOpen] = useState(false);
  const [form,setForm] = useState({name:'',email:'',company:'',service:'',message:''});
  const [submitted,setSubmitted] = useState(false);
  const reduce = useReducedMotion();
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => { e.preventDefault(); setSubmitted(true); };
  const nav = [['What we do','#services'],['Who we help','#industries'],['Our approach','#approach'],['Contact','#contact']];
  return <main>
    <header className="header"><a className="brand" href="#top" aria-label="The Digital Traits home"><span className="brand-mark">t<span>.</span></span><span className="brand-name">THE DIGITAL<br/>TRAITS</span></a>
      <nav className="desktop-nav">{nav.map(([label,href])=><a key={label} href={href}>{label}</a>)}</nav>
      <a className="nav-cta" href="#contact">Let's talk <ArrowUpRight size={15}/></a>
      <button className="mobile-toggle" onClick={()=>setMobileOpen(!mobileOpen)} aria-label="Toggle navigation">{mobileOpen?<X/>:<Menu/>}</button>
    </header>
    {mobileOpen && <div className="mobile-nav">{nav.map(([label,href])=><a key={label} href={href} onClick={()=>setMobileOpen(false)}>{label}<ArrowUpRight size={16}/></a>)}</div>}

    <section className="hero" id="top">
      <div className="hero-grid" />
      <div className="hero-copy">
        <motion.div className="eyebrow" initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{delay:.15}}><span className="eyebrow-dot"/> INDEPENDENT DIGITAL GROWTH AGENCY <span className="eyebrow-line"/></motion.div>
        <motion.h1 initial={reduce?false:{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:.8,delay:.25,ease:[.22,1,.36,1]}}>Make your<br/><span className="headline-accent">next move</span><br/>your best move<span className="period">.</span></motion.h1>
        <motion.div className="hero-bottom" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.75}}>
          <p>We bring strategy, creativity and performance together to help ambitious businesses build brands, reach the right people and grow with purpose.</p>
          <a className="button button-dark" href="#contact">Build your growth plan <ArrowUpRight size={17}/></a>
        </motion.div>
      </div>
      <motion.div className="hero-art" initial={reduce?false:{opacity:0,scale:.88,rotate:-7}} animate={{opacity:1,scale:1,rotate:0}} transition={{duration:1.1,delay:.35,ease:[.22,1,.36,1]}}>
        <div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="orbit orbit-three"/>
        <div className="art-core"><div className="core-inner"><span>DT</span><small>GROWTH<br/>IN MOTION</small></div></div>
        <div className="float-card card-performance"><span className="mini-icon"><TrendingUp size={16}/></span><div><b>Performance</b><small>Move with intent</small></div></div>
        <div className="float-card card-creative"><span className="mini-icon purple"><Sparkles size={16}/></span><div><b>Creativity</b><small>Stand out meaningfully</small></div></div>
        <div className="art-label label-top">IDEAS INTO IMPACT <ArrowUpRight size={13}/></div><div className="art-label label-bottom">STRATEGY × EXECUTION</div>
      </motion.div>
      <div className="hero-scroll"><span>SCROLL TO EXPLORE</span><ArrowDown size={14}/></div>
      <div className="hero-index">01 / 04</div>
    </section>

    <section className="intro section-pad"><Reveal><div className="section-kicker">01 — A DIFFERENT KIND OF PARTNER</div><div className="intro-layout"><h2>Good marketing<br/>gets attention.<br/><span>Great marketing</span><br/>moves business.</h2><div className="intro-aside"><p className="large-copy">Your audience doesn't need more noise. Your business needs sharper thinking, connected execution and marketing that earns its place.</p><p className="muted-copy">We partner with brands to find the signal, build the story and create momentum across the digital touchpoints that matter.</p><a className="text-link" href="#approach">Get to know our approach <ArrowUpRight size={16}/></a></div></div></Reveal></section>

    <section className="services-section section-pad" id="services"><div className="section-head"><Reveal><div className="section-kicker">02 — WHAT WE DO</div><h2>Everything connected.<br/><span>Nothing by chance.</span></h2></Reveal><Reveal delay={.12}><p>From the first impression to the final conversion, we bring the right disciplines together around one shared objective: meaningful growth.</p></Reveal></div>
      <div className="service-grid">{services.map((s,i)=>{const Icon=s.icon;return <Reveal key={s.n} delay={i*.06}><article className="service-card"><div className="service-top"><span>{s.n} / 06</span><Icon size={22} strokeWidth={1.5}/></div><h3>{s.title}</h3><p>{s.desc}</p><div className="tag-row">{s.tags.map(t=><span key={t}>{t}</span>)}</div><a href="#contact" className="round-arrow" aria-label={`Enquire about ${s.title}`}><ArrowUpRight size={18}/></a></article></Reveal>})}</div>
    </section>

    <section className="statement"><div className="statement-inner"><Reveal><div className="section-kicker light-kicker">THE WAY WE THINK</div><h2>Less guesswork.<br/><span>More growth work.</span></h2><p>We don't believe in disconnected campaigns or one-size-fits-all playbooks. We believe in understanding the business first — then making every channel work harder together.</p><a href="#contact" className="button button-light">Let's make it happen <ArrowUpRight size={17}/></a></Reveal><div className="statement-orb"><div className="orb-ring r1"/><div className="orb-ring r2"/><div className="orb-ring r3"/><span>GROW<br/>WITH<br/>INTENT<span className="period">.</span></span></div></div></section>

    <section className="industries section-pad" id="industries"><Reveal><div className="section-kicker">03 — WHO WE HELP</div><div className="industry-heading"><h2>Different businesses.<br/><span>One growth mindset.</span></h2><p>We adapt the strategy to your market, your customer and the realities of your category — not the other way around.</p></div></Reveal><div className="industry-list">{industries.map((x,i)=><Reveal key={x} delay={i*.04}><div className="industry-item"><span className="industry-number">0{i+1}</span><h3>{x}</h3><ArrowUpRight size={19}/></div></Reveal>)}</div></section>

    <section className="approach section-pad" id="approach"><Reveal><div className="section-kicker">04 — HOW WE WORK</div><div className="approach-heading"><h2>Clear thinking.<br/><span>Consistent momentum.</span></h2><p>Strong outcomes come from a process that stays curious, accountable and close to the business.</p></div></Reveal><div className="process-grid">{process.map(([title,desc],i)=><Reveal key={title} delay={i*.08}><div className="process-card"><div className="process-number">0{i+1}<span/></div><h3>{title}</h3><p>{desc}</p></div></Reveal>)}</div></section>

    <section className="contact-section" id="contact"><div className="contact-left"><div className="section-kicker light-kicker">05 — START A CONVERSATION</div><h2>Have a growth<br/>goal in mind<span className="period">?</span></h2><p>Tell us where you want to go. We'll help you think through what it could take to get there.</p><div className="contact-note"><MessageCircle size={18}/><span>Good things start with a conversation.</span></div></div><div className="contact-form-wrap">{submitted?<div className="form-success"><div className="success-icon"><Check/></div><h3>Thanks for reaching out.</h3><p>Your details are ready. Connect this form to your preferred CRM or email service before publishing to receive enquiries.</p><button className="text-link" onClick={()=>setSubmitted(false)}>Edit details <ArrowUpRight size={15}/></button></div>:<form className="contact-form" onSubmit={onSubmit}><div className="form-heading"><span>PROJECT ENQUIRY</span><span>LET'S TALK ↗</span></div><label>Your name<input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="How should we address you?"/></label><div className="form-row"><label>Email address<input required type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="you@company.com"/></label><label>Company<input value={form.company} onChange={e=>setForm({...form,company:e.target.value})} placeholder="Your brand"/></label></div><label>What can we help with?<select value={form.service} onChange={e=>setForm({...form,service:e.target.value})}><option value="">Select a service</option>{services.map(s=><option key={s.n}>{s.title}</option>)}<option>Something else</option></select></label><label>Tell us a little about your goals<textarea rows={3} value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="A little context helps us make the first conversation count."/></label><button type="submit" className="button button-light form-submit">Prepare enquiry <ArrowUpRight size={17}/></button><small className="form-disclaimer">Demo form interaction — connect a form endpoint before launch.</small></form>}</div></section>

    <footer className="footer"><div className="footer-main"><a className="brand footer-brand" href="#top"><span className="brand-mark">t<span>.</span></span><span className="brand-name">THE DIGITAL<br/>TRAITS</span></a><p>Strategy. Creativity. Growth.<br/>A digital growth partner for ambitious brands.</p><a className="back-top" href="#top">BACK TO TOP <ArrowUpRight size={14}/></a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} The Digital Traits. All rights reserved.</span><span>BUILT FOR WHAT'S NEXT.</span><span>INDIA · WORKING PAN-INDIA</span></div></footer>
  </main>;
}
