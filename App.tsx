import React, { useState, useEffect } from 'react';
import { Terminal, Shield, Cpu, Activity, Lock, BookOpen, Layers, Code, ChevronDown, Check, X, Server, Globe } from 'lucide-react';
import MatrixBackground from './components/MatrixBackground';
import Hacker3DObject from './components/Hacker3DObject';
import SectionHeader from './components/SectionHeader';
import TerminalWindow from './components/TerminalWindow';

// Types
interface Service {
  id: number;
  title: string;
  desc: string;
  icon: React.ReactNode;
  price: string;
}

interface Course {
  id: number;
  title: string;
  level: string;
  modules: number;
  students: number;
  tags: string[];
}

interface FAQ {
  id: number;
  q: string;
  a: string;
}

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('status');
  const [typedText, setTypedText] = useState('');
  const fullText = "INICIANDO ENTORNO BLACKHAT... OBJETIVO DETECTADO.";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  const services: Service[] = [
    {
      id: 1,
      title: "Basic Card",
      desc: "Si compras este plan por una cantidad mucho menor tendrás $760.",
      icon: <Code className="w-6 h-6 text-hacker-green" />,
      price: "$199"
    },
    {
      id: 2,
      title: "Medium Card",
      desc: "Si compras este plan por una cantidad mucho menor tendrás $1,300.",
      icon: <Server className="w-6 h-6 text-yellow-500" />,
      price: "$499"
    },
    {
      id: 3,
      title: "Extreme Card",
      desc: "Si compras este plan por una cantidad mucho menor tendrás $1,580.",
      icon: <Shield className="w-6 h-6 text-hacker-red" />,
      price: "$999"
    },
    {
      id: 4,
      title: "Ultra Card",
      desc: "Si compras este plan por una cantidad mucho menor tendrás $1,840.",
      icon: <Activity className="w-6 h-6 text-hacker-red" />,
      price: "Classified"
    }
  ];

  const courses: Course[] = [
    {
      id: 1,
      title: "Arsenal Blackhat",
      level: "AVANZADO",
      modules: 18,
      students: 850,
      tags: ["Exploits", "Rootkits", "C2"]
    },
    {
      id: 2,
      title: "Intrusión de Red",
      level: "INTERMEDIO",
      modules: 12,
      students: 2100,
      tags: ["Sniffing", "Spoofing", "Wi-Fi"]
    },
    {
      id: 3,
      title: "Ingeniería Inversa",
      level: "EXPERTO",
      modules: 24,
      students: 420,
      tags: ["Assembly", "Malware", "Decompilation"]
    }
  ];

  const faqs: FAQ[] = [
    { id: 1, q: "¿Son legales estas operaciones?", a: "Operamos en la zona gris del 'Red Teaming'. Tenemos permiso explícito del cliente. Sin permiso, es cárcel. Con permiso, es auditoría." },
    { id: 2, q: "¿Garantizan el anonimato?", a: "Absoluto. No guardamos logs. Pagos en Monero disponibles. Tu identidad es un secreto de estado." },
    { id: 3, q: "¿Qué herramientas usan?", a: "Kali, herramientas propietarias customizadas, y exploits privados que no verás en GitHub." },
    { id: 4, q: "¿Pueden recuperar cuentas hackeadas?", a: "Hacemos contra-inteligencia. Rastreamos al atacante y neutralizamos la amenaza." }
  ];

  return (
    <div className="min-h-screen text-hacker-green font-mono relative selection:bg-hacker-red selection:text-black">
      <MatrixBackground />

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/95 border-b border-hacker-dim backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-hacker-green blur-md opacity-20 group-hover:opacity-60 transition-opacity"></div>
              <Terminal className="w-8 h-8 relative z-10 text-hacker-green" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-2xl tracking-wider text-hacker-green leading-none glitch-effect" data-text="ECUAHACK">ECUAHACK</span>
              <span className="text-[10px] text-hacker-red font-mono tracking-[0.3em]">UNDERGROUND</span>
            </div>
          </div>

          <div className="hidden md:flex gap-1 items-center">
            {['Servicios', 'Protocolo', 'Academia', 'FAQ'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="px-4 py-2 text-sm font-medium text-slate-500 hover:text-hacker-green transition-colors relative group overflow-hidden">
                <span className="relative z-10">/ {item.toUpperCase()}</span>
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-hacker-red transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </a>
            ))}
          </div>

          <button className="bg-black border border-hacker-green/50 hover:bg-hacker-green hover:text-black text-hacker-green px-6 py-2 font-bold text-sm transition-all duration-300 rounded-none flex items-center gap-2 group shadow-[0_0_10px_rgba(0,255,65,0.2)] hover:shadow-[0_0_20px_rgba(0,255,65,0.6)]">
            <span>ACCESO_ROOT</span>
            <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <Hacker3DObject />

        {/* Abstract shapes */}
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-hacker-green/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-hacker-red/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 px-4 max-w-5xl w-full">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">

            <div className="text-left flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-black border border-hacker-green text-hacker-green text-xs font-bold mb-6 shadow-[0_0_5px_rgba(0,255,65,0.3)]">
                <span className="w-2 h-2 bg-hacker-green rounded-full animate-pulse"></span>
                SISTEMA COMPROMETIDO
              </div>

              <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-[0.9] tracking-tight">
                CONTROLA EL <span className="text-hacker-red">SISTEMA.</span><br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-hacker-green to-hacker-dim glitch-effect" data-text="DOMINA EL MUNDO">DOMINA EL MUNDO</span>
              </h1>

              <p className="text-lg text-slate-400 mb-8 max-w-lg leading-relaxed font-mono">
                <span className="text-hacker-red font-bold">root@ecuahack:~#</span> {typedText}<span className="animate-pulse text-hacker-green">_</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#servicios" className="px-8 py-3 bg-hacker-green/10 hover:bg-hacker-green border border-hacker-green text-hacker-green hover:text-black font-bold rounded-none transition-all shadow-[0_0_20px_rgba(0,255,65,0.2)] hover:shadow-[0_0_30px_rgba(0,255,65,0.8)] flex items-center justify-center gap-2 uppercase tracking-wide">
                  INICIAR ATAQUE <Activity className="w-4 h-4" />
                </a>
                <button className="px-8 py-3 border border-slate-700 hover:border-hacker-red text-slate-400 hover:text-hacker-red font-bold rounded-none transition-all flex items-center justify-center gap-2 uppercase tracking-wide">
                  VER PAYLOAD
                </button>
              </div>
            </div>

            {/* Code Snippet Decorator */}
            <div className="hidden lg:block w-96">
              <div className="bg-black/80 border border-hacker-dim rounded-sm p-4 font-mono text-xs opacity-90 shadow-[0_0_30px_rgba(0,255,65,0.1)] transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="flex gap-1.5 mb-3 border-b border-hacker-dim pb-2 justify-between">
                  <span className="text-hacker-dim">root@server:~</span>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-hacker-red"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-600"></div>
                    <div className="w-2 h-2 rounded-full bg-hacker-green"></div>
                  </div>
                </div>
                <div className="text-slate-400">
                  <span className="text-hacker-red">import</span> <span className="text-white">Exploit</span> <span className="text-hacker-red">from</span> <span className="text-hacker-green">'./darkweb'</span>;<br />
                  <br />
                  <span className="text-hacker-dim">// Initializing buffer overflow</span><br />
                  <span className="text-purple-400">const</span> <span className="text-white">target</span> = <span className="text-hacker-green">useTarget</span>(<span className="text-white">"banking_sys"</span>);<br />
                  <br />
                  <span className="text-purple-400">if</span> (target.vulnerable) <span className="text-white">{`{`}</span><br />
                  &nbsp;&nbsp;<span className="text-hacker-red">Exploit</span>.inject(<span className="text-white">payload</span>);<br />
                  &nbsp;&nbsp;<span className="text-yellow-400">console</span>.log(<span className="text-hacker-green">"ACCESS_GRANTED"</span>);<br />
                  <span className="text-white">{`}`}</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Gradient Fade */}
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-24 space-y-32">

        {/* Services Section */}
        <section id="servicios">
          <SectionHeader title="SERVICIOS_PROFESIONALES" subtitle="OPERACIONES DE CIBERSEGURIDAD" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <TerminalWindow key={service.id} title={`OP_CODE_0${service.id}`} className="group hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-4 bg-black/50 rounded-sm border border-hacker-dim group-hover:border-hacker-green group-hover:bg-hacker-green/10 transition-all shadow-none">
                      {service.icon}
                    </div>
                    <span className="text-xs font-bold border border-hacker-red/50 px-3 py-1 rounded-none text-hacker-red bg-red-950/20">
                      {service.price}
                    </span>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-hacker-green transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow font-mono">
                    {service.desc}
                  </p>
                  <div className="pt-4 border-t border-hacker-dim flex justify-between items-center">
                    <span className="text-xs text-hacker-dim font-mono animate-pulse">ESTADO: LISTO</span>
                    <button className="text-sm font-bold flex items-center gap-2 text-hacker-green hover:text-white transition-colors">
                      EJECUTAR <span className="text-lg">›</span>
                    </button>
                  </div>
                </div>
              </TerminalWindow>
            ))}
          </div>
        </section>

        {/* Methodology / Stats Strip */}
        <section className="border-y border-hacker-dim bg-black/50 py-12 backdrop-blur-sm relative overflow-hidden">
          {/* Matrix rain overlay hint */}
          <div className="absolute inset-0 bg-[url('https://media.giphy.com/media/U3qYN8S0j3bpK/giphy.gif')] opacity-[0.03] mix-blend-screen pointer-events-none bg-cover"></div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
            {[
              { label: "SERVIDORES VULNERADOS", value: "9,000+", color: "text-hacker-red" },
              { label: "ZERO-DAYS ENCONTRADOS", value: "142", color: "text-hacker-green" },
              { label: "DATA EXFILTRADA", value: "40PB", color: "text-white" },
              { label: "RASTRO DETECTADO", value: "0%", color: "text-hacker-dim" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className={`text-4xl md:text-5xl font-display font-bold mb-2 ${stat.color} glitch-effect`} data-text={stat.value}>{stat.value}</span>
                <span className="text-xs text-slate-500 tracking-widest font-mono border-t border-transparent group-hover:border-hacker-green">{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section id="protocolo">
          <SectionHeader title="PROTOCOLO_OPERATIVO" subtitle="METODOLOGÍA_//_COMO_OPERAMOS" />

          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-hacker-green/50 to-transparent -z-10"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "RECONOCIMIENTO", icon: <Globe />, desc: "Auditoría inicial y mapeo de superficie." },
                { step: "02", title: "INTRUSIÓN", icon: <Code />, desc: "Simulación de ataque y bypass de seguridad." },
                { step: "03", title: "EXPLOTACIÓN", icon: <Shield />, desc: "Identificación crítica de vulnerabilidades." },
                { step: "04", title: "FORTIFICACIÓN", icon: <Lock />, desc: "Validación de parches y aseguramiento final." }
              ].map((item, idx) => (
                <div key={idx} className="bg-black/80 backdrop-blur border border-hacker-dim p-8 rounded-none relative hover:border-hacker-green transition-colors duration-300 group hover:shadow-[0_0_15px_rgba(0,255,65,0.1)]">
                  <div className="absolute -top-4 left-6 bg-black px-2 text-3xl font-display font-bold text-hacker-dim group-hover:text-hacker-green transition-colors">
                    {item.step}
                  </div>
                  <div className="w-10 h-10 text-slate-500 mb-6 group-hover:text-hacker-red transition-colors">
                    {item.icon}
                  </div>
                  <h4 className="text-lg text-white font-bold mb-3">{item.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed font-mono">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Academy Section */}
        <section id="academia">
          <SectionHeader title="ACADEMIA_//_ENTRENAMIENTO" subtitle="APRENDE ARTES OSCURAS" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div key={course.id} className="relative group overflow-hidden rounded-none bg-black border border-hacker-dim hover:border-hacker-green transition-all duration-300">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Globe className="w-24 h-24 text-hacker-dim" />
                </div>

                <div className="p-8 h-full flex flex-col">
                  <div className="flex justify-between items-center mb-6">
                    <span className={`text-[10px] px-3 py-1 rounded-sm font-bold tracking-wider ${course.level === 'INTERMEDIO' ? 'bg-yellow-900/20 text-yellow-500 border border-yellow-800' :
                      course.level === 'EXPERTO' ? 'bg-red-900/20 text-red-500 border border-red-800' :
                        'bg-hacker-green/10 text-hacker-green border border-hacker-dim'
                      }`}>
                      {course.level}
                    </span>
                    <span className="text-xs text-slate-500 font-mono flex items-center gap-1">
                      [{course.students} USUARIOS ONLINE]
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 font-display">{course.title}</h3>
                  <div className="w-full bg-slate-900 h-1 mb-6 overflow-hidden">
                    <div className="bg-hacker-green h-full w-1/3 group-hover:w-2/3 transition-all duration-1000 shadow-[0_0_10px_rgba(0,255,65,0.5)]"></div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {course.tags.map((tag) => (
                      <span key={tag} className="text-[10px] bg-slate-900 text-slate-400 px-2 py-1 border border-slate-800 group-hover:border-hacker-dim transition-colors">./{tag}</span>
                    ))}
                  </div>

                  <button className="mt-auto w-full py-3 bg-black border border-hacker-dim hover:bg-hacker-green hover:text-black hover:border-hacker-green text-slate-300 transition-all font-bold text-sm rounded-none flex justify-center items-center gap-2 uppercase">
                    <BookOpen className="w-4 h-4" /> DESENCRIPTAR CONTENIDO
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="max-w-3xl mx-auto">
          <SectionHeader title="COMUNICACIONES_ENCRIPTADAS" subtitle="DECODIFICANDO SEÑALES" />

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="border border-hacker-dim bg-black/50 rounded-none overflow-hidden">
                <button
                  onClick={() => setActiveTab(activeTab === `faq-${faq.id}` ? '' : `faq-${faq.id}`)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-hacker-green/5 transition-colors group"
                >
                  <span className="flex items-center gap-4 text-slate-200 font-bold font-display tracking-wide text-lg group-hover:text-hacker-green">
                    <span className="text-hacker-dim font-mono text-sm group-hover:text-hacker-green">&gt;</span> {faq.q}
                  </span>
                  {activeTab === `faq-${faq.id}` ? <X className="w-5 h-5 text-hacker-red" /> : <ChevronDown className="w-5 h-5 text-slate-600" />}
                </button>

                {activeTab === `faq-${faq.id}` && (
                  <div className="p-6 pt-0 text-slate-400 text-sm border-t border-hacker-dim/30 leading-relaxed bg-black/40">
                    <div className="mb-4 text-xs text-hacker-green font-mono mt-4">// Message decrypted:</div>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-hacker-dim py-16 text-center bg-black">
          <div className="flex justify-center items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-hacker-red rounded-full animate-pulse shadow-[0_0_10px_rgba(255,0,0,0.5)]"></div>
            <span className="font-display font-bold text-2xl tracking-widest text-white">ECUAHACK</span>
          </div>
          <p className="text-sm text-slate-600 font-mono mb-8 max-w-md mx-auto">
            Somos los fantasmas en la máquina. Somos los que tocan la puerta.
          </p>
          <div className="flex justify-center gap-8 text-sm font-bold text-slate-500 font-mono">
            <a href="#" className="hover:text-hacker-green transition-colors">[GITHUB]</a>
            <a href="#" className="hover:text-hacker-green transition-colors">[TOR]</a>
            <a href="#" className="hover:text-hacker-green transition-colors">[KEYBASE]</a>
          </div>
          <div className="mt-12 text-[10px] text-hacker-dim font-mono">
            SESSION ID: 0xDEADBEEF // ENCRYPTED: AES-256
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;