import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  AlertTriangle,
  Baby,
  BadgeCheck,
  Bone,
  CalendarDays,
  Car,
  Check,
  ChevronDown,
  ClipboardList,
  Clock3,
  Droplets,
  Eye,
  Facebook,
  FileText,
  Heart,
  HeartPulse,
  Home,
  Instagram,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  PawPrint,
  Phone,
  PillBottle,
  Play,
  ShieldCheck,
  Stethoscope,
  Syringe,
  Thermometer,
  Users,
  X,
  Youtube,
  Zap,
} from 'lucide-react';
import { motion } from 'framer-motion';
import './styles.css';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'hypoglycemia', label: 'What Is Hypoglycemia' },
  { id: 'emergency', label: 'Emergency Steps' },
  { id: 'prevention', label: 'Prevention' },
  { id: 'aftercare', label: 'Aftercare' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' },
];

const pages = {
  home: {
    logoMode: 'puplift',
    kicker: 'Created for tiny hearts. Backed by experience.',
    title: 'Pup-Lift:',
    script: 'Emergency Support\nfor Hypoglycemia Episodes',
    copy: 'Fast, calm guidance for Chihuahua owners when a puppy becomes weak, limp, cold, shaky, or unresponsive.',
    primary: 'Start Emergency Steps',
    secondary: 'Learn Prevention',
    sideTitle: 'Puppy unresponsive?',
    sideScript: 'Start here.',
    sideSteps: ['Warm the puppy gently but quickly.', 'Rub Pup-Lift on gums or under tongue.', 'Monitor closely and call a veterinarian.'],
  },
  hypoglycemia: {
    logoMode: 'puplift',
    kicker: 'Know the signs. Act with love.',
    title: 'What Is Hypoglycemia?',
    script: 'Tiny puppies can drop fast.',
    copy: 'Hypoglycemia is dangerously low blood sugar. In toy puppies, especially Chihuahuas, it can happen suddenly and become life-threatening without prompt action.',
    primary: 'Recognize the Signs',
    secondary: 'Emergency Steps',
    sideTitle: 'Early signs matter',
    sideScript: 'Don’t wait.',
    sideSteps: ['Weakness, wobbling, or crying.', 'Cold body, glassy eyes, or shaking.', 'Collapse, seizures, or unresponsiveness.'],
  },
  emergency: {
    logoMode: 'puplift',
    kicker: '',
    title: 'Emergency Steps',
    script: 'What to do when your puppy is\nweak, cold, shaky, collapsed, or unresponsive.',
    copy: 'Fast action can save your puppy’s life. Stay calm, warm your puppy, apply Pup-Lift to the gums or under the tongue, and monitor closely while you prepare to contact your veterinarian.',
    primary: 'Start Step 1',
    secondary: 'When to Call a Vet',
    sideTitle: 'If your puppy is unresponsive',
    sideScript: 'Stay calm. Act fast.\nYou can save a life.',
    sideSteps: ['Warm the puppy gently but quickly.', 'Rub Pup-Lift on the gums or under the tongue.', 'Wait briefly and watch for improvement.', 'Repeat tiny amounts every 3–5 minutes if needed.', 'Call your veterinarian or an emergency vet if symptoms are severe or not improving.'],
  },
  prevention: {
    logoMode: 'puplift',
    kicker: '',
    title: 'Prevention',
    script: 'How to help prevent hypoglycemia\nbefore it starts.',
    copy: 'Most hypoglycemia episodes can be reduced or prevented through careful feeding, warmth, observation, reduced stress, and close attention to tiny puppies—especially Chihuahuas and other toy puppies.',
    primary: 'Prevention Checklist',
    secondary: 'When Risk Is Higher',
    sideTitle: 'Daily Prevention Basics',
    sideScript: 'Good prevention can stop\nan emergency before it begins.',
    sideSteps: ['Feed on schedule', 'Keep warm', 'Limit overexertion', 'Watch for early signs', 'Keep Pup-Lift nearby'],
  },
  aftercare: {
    logoMode: 'puplift',
    kicker: '',
    title: 'Aftercare',
    script: 'What to do after your puppy\nbegins to respond.',
    copy: 'Once your puppy perks up, recovery isn’t over yet. Continue close care with monitoring, warmth, feeding, hydration, and watching for any signs that symptoms may return.',
    primary: 'Recovery Checklist',
    secondary: 'When to Call the Vet',
    sideTitle: 'Immediate Aftercare',
    sideScript: 'Early recovery still needs\nclose observation.',
    sideSteps: ['Keep puppy warm.', 'Watch closely for 30–60 minutes.', 'Offer a small meal once fully alert.', 'Continue checking energy, temperature, and responsiveness.', 'Contact a veterinarian if symptoms return or the puppy worsens.'],
  },
  faq: {
    logoMode: 'swva',
    kicker: 'Knowledge. Preparedness. Peace of Mind.',
    title: 'FAQ',
    script: 'We’re Here to Help',
    copy: 'Find quick answers to the most common questions about hypoglycemia and using Pup-Lift™. Can’t find what you need? Contact our team — we’re happy to help.',
    primary: 'Contact Our Team',
    secondary: '',
    sideTitle: 'Scan Anytime.',
    sideScript: 'Be Prepared.',
    sideSteps: ['Scan the QR code on your bottle for immediate life-saving steps.'],
  },
  contact: {
    logoMode: 'swva',
    kicker: 'We’re Here for You. Always.',
    title: 'Contact Us',
    script: 'We Care. We Listen.',
    copy: 'Have a question about Pup-Lift™, hypoglycemia, or your puppy’s health and care? We’re here to help and happy to support you every step of the way.',
    primary: '',
    secondary: '',
    sideTitle: 'Scan Anytime.',
    sideScript: 'Be Prepared.',
    sideSteps: ['Scan the QR code on your bottle for immediate life-saving steps.'],
  },
};

const icons = [Droplets, Eye, Syringe, HeartPulse, ShieldCheck, AlertTriangle, ClipboardList, Clock3, Thermometer, PawPrint, Stethoscope, PillBottle, Car, CalendarDays, Home, Users];

function App() {
  const [page, setPage] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const active = pages[page];
  const go = (id) => {
    setPage(id);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="site-shell">
      <Header page={page} go={go} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <Hero data={active} page={page} go={go} />
        {page === 'home' && <HomePage go={go} />}
        {page === 'hypoglycemia' && <HypoglycemiaPage go={go} />}
        {page === 'emergency' && <EmergencyPage go={go} />}
        {page === 'prevention' && <PreventionPage go={go} />}
        {page === 'aftercare' && <AftercarePage go={go} />}
        {page === 'faq' && <FAQPage go={go} />}
        {page === 'contact' && <ContactPage go={go} />}
      </main>
      <Footer page={page} go={go} />
    </div>
  );
}

function Header({ page, go, menuOpen, setMenuOpen }) {
  const swva = page === 'faq' || page === 'contact';
  return (
    <header className="topbar">
      <button className="brand" onClick={() => go('home')} aria-label="Pup-Lift Home">
        <Logo swva={swva} />
      </button>
      <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu"><Menu size={22} /></button>
      <nav className={menuOpen ? 'nav open' : 'nav'}>
        {navItems.map((item) => (
          <button key={item.id} onClick={() => go(item.id)} className={page === item.id ? 'active' : ''}>{item.label}</button>
        ))}
      </nav>
      <div className="header-actions">
        <button className="pill dark" onClick={() => go('emergency')}>Emergency Steps <Heart size={15} /></button>
        <button className="pill light" onClick={() => go(swva ? 'home' : 'contact')}>{swva ? 'Back to Main Site' : 'SWVA Chihuahua'} <Heart size={15} /></button>
      </div>
    </header>
  );
}

function Logo({ swva = false }) {
  return (
    <div className={swva ? 'logo swva' : 'logo'}>
      <div className="logo-mark">{swva ? <><DogLine /><Heart size={14} /></> : <PawPrint size={34} />}</div>
      <div>
        <strong>{swva ? 'Southwest Virginia' : 'Pup-'}<em>{swva ? 'Chihuahua' : 'Lift'}</em></strong>
        {!swva && <span>Emergency Support<br />for Tiny Hearts</span>}
        {swva && <span>Chihuahua</span>}
      </div>
    </div>
  );
}

function DogLine() {
  return <svg width="54" height="38" viewBox="0 0 80 52" fill="none"><path d="M9 33V19l8-7 8 7h13l6-10 7 11 12 3 6 10-7 5H45l-5 8-5-8H21l-4 7-4-7H9Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/><path d="M61 24l8-10M22 19l-6-10" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/></svg>;
}

function PuppyArt({ sleeping = false }) {
  return <div className={sleeping ? 'puppy sleeping' : 'puppy'}><div className="ear left"/><div className="ear right"/><div className="head"><div className="eye e1"/><div className="eye e2"/><div className="muzzle"><div className="nose"/><div className="mouth"/></div></div><div className="body"><div className="paw p1"/><div className="paw p2"/></div></div>;
}

function Bottle() {
  return <div className="bottle"><div className="cap"/><div className="dropper"/><div className="label"><PawPrint size={18}/><b>Pup-<em>Lift</em></b><span>For Puppies</span><small>Fast absorption<br/>oral care support</small><QR /></div></div>;
}

function QR() { return <div className="qr">{Array.from({length: 49}).map((_,i)=><i key={i} className={(i*7+i%5)%3===0?'on':''}/>)}</div>; }

function Hero({ data, page, go }) {
  const contactish = page === 'faq' || page === 'contact';
  return (
    <section className={`hero ${contactish ? 'soft-hero' : ''}`}>
      <div className="hero-copy">
        {data.kicker && <p className="kicker">{data.kicker} <Heart size={14}/></p>}
        <h1>{data.title}<span>{data.script}</span></h1>
        <p className="lede">{data.copy}</p>
        <div className="hero-buttons">
          {data.primary && <button className="btn primary" onClick={() => go(page === 'home' ? 'emergency' : page === 'faq' ? 'contact' : page)}><Heart size={18}/>{data.primary}</button>}
          {data.secondary && <button className="btn secondary" onClick={() => go(data.secondary.includes('Prevention') ? 'prevention' : data.secondary.includes('Emergency') ? 'emergency' : 'contact')}>{data.secondary}<span>→</span></button>}
        </div>
        {page !== 'faq' && page !== 'contact' && <div className="micro-row"><MiniFact icon={Clock3} title="Act within minutes" text="Early action makes the biggest difference."/><MiniFact icon={Heart} title="Warmth matters" text="Gentle warmth helps stabilize."/><MiniFact icon={Syringe} title="Small amounts" text="Tiny amounts can be repeated."/></div>}
      </div>
      <div className="hero-scene">
        <div className="blanket" />
        <PuppyArt />
        <Bottle />
        <div className="scan-card"><strong>{data.sideTitle}<br/>{data.sideScript}</strong><QR/><span>{data.sideSteps[0]}</span></div>
        {page !== 'faq' && page !== 'contact' && <div className="side-card"><h3>{data.sideTitle}</h3><ol>{data.sideSteps.map((s,i)=><li key={i}>{s}</li>)}</ol><em>{data.sideScript}</em></div>}
      </div>
    </section>
  );
}

function MiniFact({ icon: Icon, title, text }) { return <div className="mini"><Icon/><div><b>{title}</b><span>{text}</span></div></div>; }
function SectionTitle({ children, right }) { return <div className="section-title"><h2>{children} <Heart size={15}/></h2>{right}</div>; }
function Card({ icon: Icon = Heart, title, children, tone='' }) { return <motion.article initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className={`card ${tone}`}><Icon className="card-icon"/><h3>{title}</h3><div>{children}</div></motion.article>; }
function Bullets({ items, check=false }) { return <ul className={check ? 'checks' : 'bullets'}>{items.map((x,i)=><li key={i}>{check ? <Check/> : <span/>}{x}</li>)}</ul>; }

function HomePage({ go }) {
  return <><IconRibbon labels={['What Hypoglycemia Is','Signs to Look For','How to Administer Pup-Lift','What to Do After','Prevention Tips','Important Disclaimer']} />
    <div className="grid three"><Card title="1. What Is Hypoglycemia?" icon={Droplets}><p>Hypoglycemia is dangerously low blood sugar. In tiny puppies—especially toy Chihuahuas—it can happen suddenly and progress quickly.</p><div className="note"><PawPrint/>It is a medical emergency. Quick action can save your puppy’s life.</div></Card><Card title="2. Common Causes" icon={PawPrint}><Bullets items={['Missed meals or not eating enough','Stress or excitement','Getting chilled','Overexertion','Illness or infection','Poor intake','Vomiting or diarrhea']} /></Card><Card title="3. Warning Signs" icon={AlertTriangle}><div className="two-col"><Bullets items={['Weakness','Wobbling','Crying','Lethargy','Cold body']} /><Bullets items={['Glassy eyes','Tremors or shaking','Collapse','Seizures','Unresponsiveness']} /></div></Card></div>
    <div className="grid three"><Card title="4. How to Administer Pup-Lift" icon={Syringe}><Bottle/><Ordered items={['Shake gently. Remove cap and ensure the dropper tip is clean.','Place a small amount on the gums or under the tongue.','Do not force large amounts if swallowing is poor.','Repeat tiny amounts every few minutes as needed until puppy perks up.','Once alert, offer a small meal.']} /></Card><Card title="5. After Administering" icon={HeartPulse}><Bullets check items={['Keep your puppy warm and comfortable.','Observe closely for improvement.','Offer a small meal once your puppy is alert.','Continue monitoring for at least 30–60 minutes.','Contact your veterinarian if symptoms persist or return.']} /></Card><Card title="6. Prevention Matters" icon={ShieldCheck}><Bullets check items={['Feed small, frequent meals throughout the day.','Keep your puppy warm and cozy.','Watch for early signs and act immediately.','Avoid overexertion and stress.','Monitor very small puppies extra closely.']} /></Card></div>
    <Banner sleeping /><Journey /><FAQStrip go={go}/></>;
}

function HypoglycemiaPage({ go }) { return <><IconRibbon labels={['Blood Sugar','Toy Puppy Risk','Early Signs','Common Causes','When It Is Serious','What To Do']} /><div className="grid three"><Card icon={Droplets} title="What hypoglycemia means"><p>It is a dangerous drop in blood glucose. Toy puppies have small reserves, so a missed meal, cold room, stress, or illness can cause symptoms to appear fast.</p></Card><Card icon={Baby} title="Why tiny puppies are vulnerable"><Bullets items={['Small body size','Limited stored energy','Fast metabolism','Higher sensitivity to cold','Stress during transitions']} /></Card><Card icon={Eye} title="Signs to watch"><Bullets items={['Weakness or wobbling','Crying or unusual quietness','Glassy eyes','Shaking or tremors','Collapse or unresponsiveness']} /></Card></div><Stats /><Journey /><EmergencyDisclaimer /><FAQStrip go={go}/></>; }

function EmergencyPage({ go }) { return <><IconRibbon labels={['Immediate Action','Step-by-Step Guide','Dose & Frequency','What Not To Do','Aftercare','Emergency Warning Signs']} /><div className="steps-grid">{['Stay Calm & Check Your Puppy','Warm the Puppy','Administer Pup-Lift','Repeat Small Amounts if Needed','Once Alert, Offer Food','Monitor Closely','Contact a Veterinarian'].map((t,i)=><StepCard key={t} n={i+1} title={t}/>)}</div><div className="grid three"><Card icon={BottleIcon} title="Dose & Frequency"><Bullets check items={['Use a small smear or a few drops at a time.','Do not flood the mouth.','Rub gently on gums or under the tongue.','Repeat every 3–5 minutes as needed.','Once alert, offer food.']} /></Card><Card icon={Check} title="DO" tone="green"><Bullets check items={['Keep puppy warm.','Use small amounts.','Rub on gums or under tongue.','Watch breathing.','Call the vet if needed.']} /></Card><Card icon={X} title="DO NOT" tone="red"><Bullets items={['Do not pour large amounts into the mouth.','Do not force swallowing.','Do not wait too long if severe.','Do not let puppy get chilled.','Do not leave puppy unattended.']} /></Card></div><WarningPanel/><AftercareFlow/><EmergencyDisclaimer/><FAQStrip go={go}/></>; }

function PreventionPage({ go }) { return <><IconRibbon labels={['Feeding Schedule','Warmth & Comfort','Stress & Activity','High-Risk Situations','Prevention Supplies','Daily Monitoring']} /><div className="grid four"><Card icon={ShieldCheck} title="Why Prevention Matters"><p>Toy puppies have small glycogen reserves, little body fat, and high energy needs. Missed meals, chilling, or stress can lead to a rapid drop in blood sugar.</p></Card><Card icon={BowlIcon} title="Feeding Schedule"><Bullets check items={['Feed small, frequent meals.','Do not skip feedings.','Follow breeder/vet feeding instructions.','Offer food promptly after play or stress.','Keep a consistent daily rhythm.']} /></Card><Card icon={Thermometer} title="Keep Your Puppy Warm"><Bullets check items={['Avoid chilling at all times.','Dry puppy well if damp.','Provide cozy bedding.','Avoid drafts and cold floors.','Monitor tiny puppies closely in cool weather.']} /></Card><Card icon={HeartPulse} title="Limit Stress & Overexertion"><Bullets check items={['Avoid rough play when puppy is tired.','Prevent long periods without rest.','Reduce stress during travel or big changes.','Supervise children handling puppies.','Keep routines calm and steady.']} /></Card></div><Stats /><RiskGrid/><Routine/><SupplySigns/><EmergencyDisclaimer/><FAQStrip go={go}/></>; }

function AftercarePage({ go }) { return <><IconRibbon labels={['Warmth & Rest','Food & Hydration','Monitoring','When to Call the Vet','Preventing Another Drop','Owner Notes']} /><div className="grid four"><Card icon={Heart} title="Why Aftercare Matters"><p>Even when your puppy improves, blood sugar can drop again. Careful aftercare helps prevent another emergency and supports a full recovery.</p></Card><Card icon={Thermometer} title="Keep Your Puppy Warm & Calm"><Bullets items={['Keep wrapped in a light blanket.','Avoid chilling or drafts.','Use your body warmth.','Avoid overheating.','Keep the environment quiet.','Reduce rough handling.']} /></Card><Card icon={BowlIcon} title="Feed Once Fully Alert"><Bullets items={['Only feed when swallowing safely.','Offer a small meal or breeder-approved food.','Use small, frequent feedings.','Do not force food.','Continue normal feeding schedule once stable.']} /></Card><Card icon={Eye} title="Watch for Returning Signs"><Bullets items={['Weakness or wobbling','Crying or glassy eyes','Trembling or shaking','Unusual sleepiness','Cold body or ears','Poor appetite','Collapse or unresponsiveness']} /></Card></div><FastFacts/><AftercareFlow/><OfferAvoid/><WarningPanel/><OwnerNotes/><EmergencyDisclaimer/><FAQStrip go={go}/></>; }

function FAQPage({ go }) { const qs=['What is hypoglycemia in puppies?','How do I know if my puppy has hypoglycemia?','How often does hypoglycemia happen in puppies?','Is hypoglycemia covered under the health guarantee?','How is Pup-Lift™ different from sugar or honey?','How much Pup-Lift™ should I give my puppy?','How often can I repeat doses if needed?','Can I use Pup-Lift™ preventively?','What if my puppy won’t swallow the syrup?','When should I contact my veterinarian?','Can hypoglycemia cause long-term damage?','Should I keep Pup-Lift™ with me when I travel?','How should I store Pup-Lift™?','Where can I learn more?']; return <div className="faq-layout"><section className="faq-main"><SectionTitle>Frequently Asked Questions</SectionTitle><Accordion qs={qs}/><div className="faq-bottom"><p><b>Still have questions?</b> We’re here to help!<br/>Contact our team — we’re happy to assist you.</p><button className="btn primary" onClick={()=>go('contact')}><Mail/>Contact Our Team →</button></div></section><aside className="sidebar"><Card icon={HeartPulse} title="Need Immediate Help?"><p>If your puppy is unresponsive or having a medical emergency, follow our Emergency Steps right away.</p><button className="btn primary" onClick={()=>go('emergency')}>Go to Emergency Steps →</button></Card><Card icon={ShieldCheck} title="Important Reminder"><p>Hypoglycemia is preventable with proper care, nutrition, and observation — but it can and does happen.</p><b>Quick action saves lives.</b></Card><Card icon={BottleIcon} title="Pup-Lift™ Always Within Reach"><Bullets check items={['Fast-acting glucose source','Easy-to-use dropper bottle','Made for tiny puppies','Designed for emergencies']} /></Card><Card icon={PawPrint} title="The Southwest Virginia Chihuahua Promise"><p>We’re committed to your success and your puppy’s well-being. You’re never alone in this journey.</p></Card></aside></div>; }

function ContactPage() { return <><div className="promise-row"><MiniFact icon={Users} title="We’re Puppy People" text="Your peace of mind matters to us."/><MiniFact icon={ShieldCheck} title="Trusted Guidance" text="Reliable information and support."/><MiniFact icon={Clock3} title="Quick Response" text="We do our best to respond within 24 hours."/><MiniFact icon={PawPrint} title="Here for You" text="From first questions to forever homes."/></div><div className="contact-grid"><section className="contact-form"><SectionTitle>Send Us a Message</SectionTitle><p>Fill out the form below and we’ll get back to you as soon as possible.</p><form><div className="split"><input placeholder="First Name *"/><input placeholder="Last Name *"/></div><input placeholder="Email Address *"/><input placeholder="Phone Number (Optional)"/><select><option>Subject *</option><option>Pup-Lift question</option><option>Puppy care</option><option>Available puppies</option></select><textarea placeholder="Type your message here..."/><label className="agree"><input type="checkbox"/> I have read and agree to the Privacy Policy.</label><button className="btn primary">Send Message →</button><small>♡ We treat every message with care.</small></form></section><aside className="reach"><SectionTitle>Other Ways to Reach Us</SectionTitle><ContactLine icon={Mail} title="Email Us" text="info@swvchihuahua.com\nWe respond within 24 hours."/><ContactLine icon={Phone} title="Call or Text Us" text="(276) 555–0198\nMon–Fri: 9am–6pm EST\nSat: 10am–2pm EST"/><ContactLine icon={MapPin} title="Our Location" text="Abingdon, Virginia\nServing families nationwide"/><ContactLine icon={ShareIcon} title="Follow Our Journey" text="Stay connected for puppy updates, care tips, and behind-the-scenes!" social/><ContactLine icon={FileText} title="Pup-Lift™ Help Center" text="Find all hypoglycemia resources, guides, and FAQs on our Pup-Lift™ pages." button/></aside></div><div className="never-alone"><PuppyArt/><div><h2>You’re Never Alone in This.</h2><p>We’re honored to be part of your puppy’s life. Thank you for trusting Southwest Virginia Chihuahua.</p></div><em>Tiny hearts.<br/>Lifelong love. ♡</em></div></>; }

function Accordion({ qs }) { const [open,setOpen]=useState(0); return <div className="accordion">{qs.map((q,i)=>{const Icon=icons[i%icons.length];return <div className={`acc ${open===i?'open':''}`} key={q}><button onClick={()=>setOpen(open===i?-1:i)}><span><Icon/>{q}</span><ChevronDown/></button>{open===i&&<p>{i===0?'Hypoglycemia is a dangerous drop in blood sugar (glucose) levels. It can happen quickly in tiny puppies because their bodies have small energy reserves and fast metabolisms. Without prompt treatment, it can lead to seizures, coma, or even death.':'Keep your puppy warm, act quickly, use small amounts only, and contact your veterinarian whenever symptoms are severe, persistent, or returning.'}</p>}</div>})}</div>; }
function IconRibbon({ labels }) { return <section className="ribbon">{labels.map((l,i)=>{const Icon=icons[i%icons.length]; return <div key={l}><Icon/><span>{l}</span></div>})}</section>; }
function Ordered({items}){return <ol className="ordered">{items.map((x,i)=><li key={i}><b>{i+1}</b>{x}</li>)}</ol>}
function StepCard({n,title}){return <article className="step"><b>{n}</b><h3>{title}</h3><Syringe/><p>{['Check for signs your puppy may have low blood sugar. Stay calm and act quickly.','Wrap your puppy in a soft blanket and hold against your body.','Place a very small amount on gums or under tongue and rub gently.','Repeat tiny amounts every 3–5 minutes as needed.','Once awake and able to swallow, offer a small meal or food.','Watch closely for 30–60 minutes and do not leave unattended.','Call immediately for seizures, collapse, inability to swallow, or no improvement.'][n-1]}</p></article>}
function Stats(){return <section className="stats"><b>Statistics & Fast Facts</b><div><PawPrint/><strong>Toy breeds</strong><span>highest risk due to size and reserves</span></div><div><CalendarDays/><strong>First 6 months</strong><span>highest-risk age window</span></div><div><Droplets/><strong>80–120 mg/dL</strong><span>typical healthy canine blood glucose range</span></div><div><HeartPulse/><strong>Around 60 mg/dL</strong><span>or lower may become a major concern</span></div></section>}
function Journey(){return <section><SectionTitle>A Simple Emergency Journey</SectionTitle><div className="journey">{['Notice Symptoms','Administer Pup-Lift','Warm & Monitor','Feed & Follow Up'].map((x,i)=><div key={x}><b>{i+1}</b><icons[i]/><h3>{x}</h3><p>{['Recognize the warning signs early and act quickly.','Place small amount on gums or under tongue.','Keep warm, watch closely, and repeat if needed.','Once alert, offer food and continue monitoring.'][i]}</p></div>)}</div></section>}
function Banner(){return <section className="wide-banner"><div><h2>Preventable, But Serious</h2><p>Hypoglycemia is preventable with proper observation and care, but it can and does happen — and it can be deadly if not treated quickly.</p><div className="danger-note">Hypoglycemia is not covered under the health guarantee because it is considered preventable.</div></div><PuppyArt sleeping/><div><h2>Scan the bottle for instant instructions</h2><p>Every Pup-Lift bottle includes a QR code that links to emergency steps, video demos, and printable guides.</p></div></section>}
function RiskGrid(){return <section><SectionTitle>When Risk Is Higher</SectionTitle><div className="grid six">{['Missed Meals','Cold Temperatures','Stress or Travel','Illness or Vomiting','Heavy Play','Very Small Puppies'].map((x,i)=><Card key={x} icon={icons[(i+7)%icons.length]} title={x}><p>{['Even one missed meal can cause blood sugar to drop quickly.','Cold or damp puppies lose energy fast.','New places, loud noises, or travel can raise stress.','Illness, diarrhea, or vomiting can trigger drops.','Overexertion without food can burn energy stores.','Teacup and very tiny puppies are highest risk.'][i]}</p></Card>)}</div></section>}
function Routine(){return <section><SectionTitle>Daily Prevention Routine</SectionTitle><div className="journey five">{['Morning meal and check-in','Warmth and comfort','Midday monitoring','Evening meal and calm routine','Bedtime check and supplies ready'].map((x,i)=><div key={x}><b>{i+1}</b><Home/><h3>{x}</h3><p>Keep routine steady, observe behavior, and act early.</p></div>)}</div></section>}
function SupplySigns(){return <div className="grid two"><Card icon={BottleIcon} title="Prevention Supplies to Keep Nearby"><Bullets check items={['Pup-Lift bottle','Small blanket or heating pad','Puppy food and treats','Clean water','Breeder/Vet contact info','Feeding reminder routine']} /></Card><Card icon={Eye} title="Signs to Watch Even During Prevention"><Bullets items={['Weakness or low energy','Wobbling or unsteady','Poor appetite','Cold body or extremities','Crying or unusual fussiness','Sleepiness or reluctance to wake','Tremors or shaking','Unusual quietness']} /></Card></div>}
function FastFacts(){return <section className="stats"><b>Aftercare Fast Facts</b><div><Clock3/><strong>30–60 minutes</strong><span>minimum close monitoring after improvement</span></div><div><BowlIcon/><strong>Small meals</strong><span>help stabilize recovery</span></div><div><Heart/><strong>Warm & calm</strong><span>supports energy conservation</span></div><div><ShieldCheck/><strong>If signs return</strong><span>repeat steps and contact your vet</span></div></section>}
function AftercareFlow(){return <section><SectionTitle>Aftercare: What to Do Next</SectionTitle><div className="journey four">{['Warm & Observe','Feed a Small Meal','Keep Monitoring','Follow Up With Vet'].map((x,i)=><div key={x}><b>{i+1}</b><Heart/><h3>{x}</h3><p>{['Keep your puppy warm and watch for at least 30–60 minutes.','Offer a small, balanced meal once your puppy is alert and stable.','Watch closely for the rest of the day.','Schedule a check-up and discuss prevention.'][i]}</p></div>)}</div></section>}
function OfferAvoid(){return <div className="grid two"><Card icon={BottleIcon} title="What To Offer After Pup-Lift"><Bullets check items={['Small meal once fully alert and swallowing safely.','Breeder-recommended food or high-quality puppy food.','Fresh water once swallowing is safe.','Small, frequent feedings over the next few hours.','Avoid overfeeding at once.']} /></Card><Card icon={X} title="What To Avoid During Recovery" tone="red"><Bullets items={['No rough play or overexertion.','No bathing if chilled or weakened.','No forcing food, liquid, or treats.','No leaving puppy alone during this period.','No assuming the episode is over too soon.']} /></Card></div>}
function WarningPanel(){return <section><SectionTitle>Emergency Warning Signs</SectionTitle><div className="warning-row">{['Seizures','Collapse','Blue or Very Pale Gums','Inability to Swallow','Unresponsiveness','Repeated Episodes'].map((x,i)=><div key={x}><AlertTriangle/><b>{x}</b><span>Immediate veterinary care is needed.</span></div>)}<aside>Call Your Vet Immediately</aside></div></section>}
function OwnerNotes(){return <section><SectionTitle>What Owners Should Write Down</SectionTitle><div className="grid three"><Card icon={Clock3} title="Time of episode"><p>Note when it happened and when it improved.</p></Card><Card icon={ClipboardList} title="Signs and dose"><p>Write down signs observed and how much Pup-Lift was used.</p></Card><Card icon={FileText} title="Food and next steps"><p>Track food offered, response, and any vet follow-up.</p></Card></div></section>}
function EmergencyDisclaimer(){return <section className="disclaimer"><AlertTriangle/><p><b>Hypoglycemia is preventable with careful feeding, warmth, observation, and prompt action. But it can still happen — and it can be deadly if missed.</b><br/><span>Hypoglycemia is not covered under the health guarantee because it is considered preventable.</span></p><p>This guidance supports emergency first-aid but does not replace veterinary care.</p></section>}
function FAQStrip({go}){return <section><SectionTitle right={<button className="link-btn" onClick={()=>go('faq')}>View All FAQs →</button>}>Frequently Asked Questions</SectionTitle><div className="grid four small-cards">{['How often should I give it?','When should I call a vet?','Can I use it if my puppy is cold?','What if symptoms return?'].map((q,i)=><Card key={q} icon={icons[i+8]} title={q}><p>{['Give a small amount every few minutes as needed until your puppy improves.','Call if symptoms do not improve, return, or if your puppy has seizure/cannot swallow.','Yes. Warm your puppy while administering Pup-Lift.','Repeat emergency steps and contact your vet right away.'][i]}</p></Card>)}</div></section>}
function ContactLine({icon:Icon,title,text,social,button}){return <div className="contact-line"><Icon/><div><h3>{title}</h3>{text.split('\n').map((t,i)=><p key={i}>{t}</p>)}{social&&<div className="social"><Facebook/><Instagram/><Play/><Youtube/></div>}{button&&<button className="btn primary">Go to Pup-Lift™ →</button>}</div></div>}
function BottleIcon(props){return <PillBottle {...props}/>}
function BowlIcon(props){return <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 10h16l-2 8H6l-2-8Z"/><path d="M7 10c0-3 2-5 5-5s5 2 5 5"/><path d="M9 7c1 1 2 1 3 0s2-1 3 0"/></svg>}
function ShareIcon(props){return <MessageCircle {...props}/>}

function Footer({ page, go }) { const swva = page === 'faq' || page === 'contact'; return <footer><div className="footer-grid"><div><Logo swva={swva}/><em>Tiny hearts. Lifelong love. ♡</em><div className="social"><Facebook/><Instagram/><Play/><Youtube/><Mail/></div></div><div><h4>{swva?'Pup-Lift™ Education':'Quick Links'}</h4>{navItems.slice(0,7).map(n=><button key={n.id} onClick={()=>go(n.id)} className={page===n.id?'active':''}>{n.label}</button>)}</div><div><h4>{swva?'Southwest Virginia Chihuahua':'Emergency Reminder ♡'}</h4><p>Act fast. Stay calm.<br/>You can save a life.</p><div className="footer-note">If your puppy is unresponsive or having seizures, seek urgent veterinary care immediately.</div></div><div><h4>Contact Us</h4><p>☎ (276) 555-0198<br/>✉ info@swvchihuahua.com<br/>⌖ Abingdon, Virginia<br/>Serving families nationwide</p></div><div className="footer-cta"><h4>Part of the SWVA Family</h4><p>Pup-Lift is provided to our new puppy families from Southwest Virginia Chihuahua.</p><button className="pill light" onClick={()=>go('contact')}>Contact Our Team</button></div></div><div className="copyright">© 2025 {swva?'Southwest Virginia Chihuahua':'Pup-Lift.com'}. All rights reserved. <span>Privacy Policy</span> | <span>Terms of Service</span> | <span>Veterinary Disclaimer</span> ♡</div></footer>; }

createRoot(document.getElementById('root')).render(<App />);
