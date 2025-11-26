import React, { useState, useEffect, useRef } from 'react';
import { AppView } from './types';
import { Menu, Dumbbell, Activity, User, BookOpen, BrainCircuit, X, Calendar, ChevronDown, ChevronUp, PlayCircle, ScrollText, Flame, Footprints, MapPin, Timer } from 'lucide-react';
import { SPORTS_DATA, MUSCLE_DATA, THEORY_TOPICS, DAILY_CHALLENGES } from './data';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area 
} from 'recharts';

// --- Sub-Components Definition ---

// 0. Logo Component
const UrjaLogo = ({ className = "w-12 h-12", animated = false }: { className?: string, animated?: boolean }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="logoGradient" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#f97316" />
        <stop offset="100%" stopColor="#eab308" />
      </linearGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    {/* Shield/U Base */}
    <path 
      d="M20 20 H80 V45 C80 75 50 95 50 95 C50 95 20 75 20 45 V20 Z" 
      stroke="url(#logoGradient)" 
      strokeWidth="6" 
      fill="rgba(249, 115, 22, 0.1)"
      className={animated ? "animate-pulse" : ""}
    />
    {/* Lightning Bolt */}
    <path 
      d="M55 25 L35 55 H50 L45 85 L70 50 H55 L65 25 Z" 
      fill="url(#logoGradient)" 
      filter="url(#glow)"
    />
  </svg>
);

// 1. Splash Screen
const SplashScreen = ({ onFinish }: { onFinish: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(onFinish, 3500);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 overflow-hidden">
      {/* Indian Flag Gradient Effect */}
      <div className="absolute inset-0 opacity-20 bg-[conic-gradient(at_center,_var(--tw-gradient-stops))] from-orange-500 via-white to-green-500 blur-3xl animate-pulse" />
      
      <div className="relative z-10 flex flex-col items-center animate-float">
        <div className="mb-6 p-4 rounded-full bg-slate-900/50 border border-slate-700 shadow-2xl shadow-orange-500/20 backdrop-blur-md">
            <UrjaLogo className="w-32 h-32" animated={true} />
        </div>
        <h1 className="text-5xl font-black text-white mb-2 tracking-tighter drop-shadow-lg">URJA</h1>
        <div className="h-1 w-24 bg-gradient-to-r from-orange-500 via-white to-green-500 rounded-full mb-3"></div>
        <p className="text-slate-300 text-sm tracking-[0.2em] font-light uppercase">Offline Sports Education</p>
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-green-400 font-bold text-xs mt-6 tracking-widest opacity-80">
          MADE BY CODEX
        </p>
      </div>
    </div>
  );
};

// 2. Anatomy Module (Interactive SVG)
const AnatomyModule = () => {
  const [selectedMuscle, setSelectedMuscle] = useState<string | null>(null);
  const [isBackView, setIsBackView] = useState(false);

  const handleMuscleClick = (id: string) => {
    setSelectedMuscle(id);
  };

  const info = selectedMuscle ? MUSCLE_DATA[selectedMuscle] : null;

  return (
    <div className="flex flex-col h-full w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <User className="text-cyan-400" /> 3D Anatomy
        </h2>
        <button 
            onClick={() => setIsBackView(!isBackView)}
            className="px-4 py-2 text-sm bg-slate-800 rounded-full border border-slate-700 hover:bg-slate-700 transition-colors"
        >
            Switch to {isBackView ? 'Front' : 'Back'} View
        </button>
      </div>

      <div className="flex flex-col lg:flex-row flex-1 gap-6 overflow-hidden">
        {/* Visualizer Area */}
        <div className="flex-1 relative flex items-center justify-center bg-slate-900/50 rounded-2xl border border-slate-800 min-h-[400px]">
          <svg viewBox="0 0 200 400" className="h-[80%] drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">
            <defs>
                <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#334155" />
                    <stop offset="100%" stopColor="#475569" />
                </linearGradient>
            </defs>
            
            {/* Simplified Silhouette */}
            <g fill="url(#bodyGrad)" stroke="#1e293b" strokeWidth="1">
                {/* Head */}
                <circle cx="100" cy="30" r="15" />
                {/* Torso */}
                <path d="M85,45 Q100,45 115,45 L120,130 Q100,140 80,130 Z" />
                {/* Legs */}
                <path d="M80,130 L75,220 L70,350 L90,350 L95,220 L95,140" /> {/* Left */}
                <path d="M120,130 L125,220 L130,350 L110,350 L105,220 L105,140" /> {/* Right */}
                {/* Arms */}
                <path d="M85,45 L60,100 L50,160" strokeWidth="8" stroke="url(#bodyGrad)" fill="none" />
                <path d="M115,45 L140,100 L150,160" strokeWidth="8" stroke="url(#bodyGrad)" fill="none" />
            </g>

            {!isBackView && (
                <>
                {/* Pectoralis Interactive Zone */}
                <path 
                    d="M85,55 Q100,60 115,55 L110,80 Q100,85 90,80 Z" 
                    fill={selectedMuscle === 'pectoralis' ? '#f97316' : 'rgba(255,255,255,0.1)'}
                    className="cursor-pointer hover:fill-orange-500/50 transition-colors"
                    onClick={() => handleMuscleClick('pectoralis')}
                />
                {/* Abs Interactive Zone */}
                <rect 
                    x="90" y="85" width="20" height="40" rx="5"
                    fill={selectedMuscle === 'abs' ? '#f97316' : 'rgba(255,255,255,0.1)'}
                    className="cursor-pointer hover:fill-orange-500/50 transition-colors"
                    onClick={() => handleMuscleClick('abs')}
                />
                 {/* Quads Interactive Zone */}
                 <path 
                    d="M80,140 L75,200 L95,200 L95,140 Z" 
                    fill={selectedMuscle === 'quadriceps' ? '#f97316' : 'rgba(255,255,255,0.1)'}
                    className="cursor-pointer hover:fill-orange-500/50 transition-colors"
                    onClick={() => handleMuscleClick('quadriceps')}
                />
                 <path 
                    d="M105,140 L105,200 L125,200 L120,140 Z" 
                    fill={selectedMuscle === 'quadriceps' ? '#f97316' : 'rgba(255,255,255,0.1)'}
                    className="cursor-pointer hover:fill-orange-500/50 transition-colors"
                    onClick={() => handleMuscleClick('quadriceps')}
                />
                 {/* Biceps */}
                 <ellipse cx="65" cy="80" rx="5" ry="12"
                    fill={selectedMuscle === 'biceps' ? '#f97316' : 'rgba(255,255,255,0.1)'}
                    className="cursor-pointer hover:fill-orange-500/50 transition-colors"
                    onClick={() => handleMuscleClick('biceps')}
                 />
                 <ellipse cx="135" cy="80" rx="5" ry="12"
                    fill={selectedMuscle === 'biceps' ? '#f97316' : 'rgba(255,255,255,0.1)'}
                    className="cursor-pointer hover:fill-orange-500/50 transition-colors"
                    onClick={() => handleMuscleClick('biceps')}
                 />
                </>
            )}
            
            {isBackView && (
                 <>
                  {/* Lats */}
                  <path d="M85,60 L70,100 L90,120 L110,120 L130,100 L115,60"
                     fill={selectedMuscle === 'lats' ? '#f97316' : 'rgba(255,255,255,0.1)'}
                     className="cursor-pointer hover:fill-orange-500/50 transition-colors"
                     onClick={() => handleMuscleClick('lats')}
                  />
                 </>
            )}

          </svg>
          <div className="absolute bottom-4 text-xs text-slate-500">
            Interactive Model - Tap Highlights
          </div>
        </div>

        {/* Info Panel */}
        <div className={`lg:w-96 glass-panel rounded-2xl p-6 overflow-y-auto transition-all duration-300 ${info ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-50'}`}>
          {info ? (
            <>
              <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-orange-400 mb-2">{info.name}</h3>
                  <button onClick={() => setSelectedMuscle(null)} className="text-slate-400 hover:text-white"><X size={18}/></button>
              </div>
              <p className="text-slate-300 text-sm mb-4 italic">{info.function}</p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-1">Warm-up</h4>
                  <ul className="list-disc list-inside text-sm text-slate-300">
                    {info.warmup.map(i => <li key={i}>{i}</li>)}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-green-400 uppercase tracking-wider mb-1">Strengthening</h4>
                  <ul className="list-disc list-inside text-sm text-slate-300">
                    {info.strengthening.map(i => <li key={i}>{i}</li>)}
                  </ul>
                </div>
                <div className="bg-red-900/20 border border-red-900/50 p-3 rounded-lg">
                  <h4 className="text-xs font-bold text-red-400 uppercase tracking-wider mb-1">Injury Risk</h4>
                  <p className="text-sm text-red-200">{info.injuryRisk}</p>
                </div>
              </div>
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-slate-500">
               <User size={48} className="mb-4 opacity-20" />
               <p>Tap a muscle group on the model to see advanced biomechanical details.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// 3. AI Coach Module (Offline Generator)
const AICoachModule = () => {
    const [gender, setGender] = useState<'Male'|'Female'>('Male');
    const [goal, setGoal] = useState<string>('Strength');
    const [generatedPlan, setGeneratedPlan] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const generatePlan = () => {
        setLoading(true);
        // Simulate AI thinking time
        setTimeout(() => {
            const intros = [
                `Alright, based on your profile as a ${gender} focusing on ${goal}, here is your strategy.`,
                `Let's optimize your ${goal} performance. For a ${gender} athlete, structure is key.`,
                `Here is a custom URJA plan designed for ${goal} gains.`
            ];
            
            const adviceMap: Record<string, string> = {
                'Strength': `Focus on compound movements. ${gender === 'Female' ? 'Don\'t fear heavy weights; they build density, not just bulk.' : 'Focus on progressive overload.'} \n- Squats: 4 sets of 8 reps\n- Deadlifts: 3 sets of 5 reps\n- Overhead Press: 3 sets of 8 reps.`,
                'Flexibility': `Mobility is the foundation of power. \n- 10 min Dynamic Warmup (Leg swings, arm circles)\n- PNF Stretching for Hamstrings\n- 5 min Pigeon Pose hold (total).\n- Consistent daily practice is required.`,
                'Fat Loss': `High intensity interval training combined with a calorie deficit. \n- 20 mins Sprint Intervals (30s on, 30s off)\n- Circuit: Burpees, Mountain Climbers, Jump Squats (4 rounds).\n- Hydrate with 3L water daily.`,
                'Stamina': `Build your aerobic base. \n- Long slow distance run: 30-45 mins at conversation pace.\n- Fartlek training: Mix jogging and sprinting randomly.\n- Focus on rhythmic breathing.`
            };

            const randomIntro = intros[Math.floor(Math.random() * intros.length)];
            const coreAdvice = adviceMap[goal] || adviceMap['Strength'];
            const safetyTip = "\n\n⚠️ Safety: Ensure you warmup for 10 minutes before starting. Stop immediately if you feel sharp pain.";

            setGeneratedPlan(`${randomIntro}\n\n${coreAdvice}${safetyTip}`);
            setLoading(false);
        }, 1500);
    };

    return (
        <div className="h-full flex flex-col max-w-2xl mx-auto w-full">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <BrainCircuit className="text-purple-400" /> Smart AI Coach
            </h2>

            <div className="glass-panel p-6 rounded-2xl mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                        <label className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-2 block">I am</label>
                        <div className="flex bg-slate-800 rounded-lg p-1">
                            {['Male', 'Female'].map(g => (
                                <button
                                    key={g}
                                    onClick={() => setGender(g as any)}
                                    className={`flex-1 py-2 rounded-md text-sm font-medium transition-all ${gender === g ? 'bg-slate-600 text-white shadow-lg' : 'text-slate-400 hover:text-slate-200'}`}
                                >
                                    {g}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div>
                        <label className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-2 block">My Goal</label>
                        <select 
                            value={goal} 
                            onChange={(e) => setGoal(e.target.value)}
                            className="w-full bg-slate-800 text-white rounded-lg p-3 text-sm border border-slate-700 focus:outline-none focus:border-purple-500"
                        >
                            <option value="Strength">Muscle Gain & Strength</option>
                            <option value="Fat Loss">Fat Loss & Toning</option>
                            <option value="Flexibility">Flexibility & Mobility</option>
                            <option value="Stamina">Endurance & Stamina</option>
                        </select>
                    </div>
                </div>
                <button 
                    onClick={generatePlan}
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold py-3 rounded-xl shadow-lg shadow-purple-900/20 transition-all active:scale-[0.98] disabled:opacity-50 flex justify-center items-center"
                >
                    {loading ? (
                        <span className="flex items-center gap-2">
                            <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                            Analyzing Biometrics...
                        </span>
                    ) : (
                        'Generate Offline Training Plan'
                    )}
                </button>
            </div>

            {generatedPlan && (
                <div className="glass-panel p-6 rounded-2xl animate-float border-l-4 border-purple-500">
                    <h3 className="text-lg font-bold text-white mb-2">Coach's Plan</h3>
                    <div className="prose prose-invert prose-sm">
                        <p className="whitespace-pre-wrap text-slate-300 leading-relaxed">{generatedPlan}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

// 4. Tracker Module
const TrackerModule = () => {
    const [tracking, setTracking] = useState(false);
    const [timer, setTimer] = useState(0);
    // Persisted daily stats (mocked start values to look like a used app)
    const [dailyStats, setDailyStats] = useState({
        steps: 4520,
        calories: 320,
        distance: 3.1
    });

    // Mock Data for Charts
    const data = [
        { name: 'Mon', steps: 4000, cal: 240 },
        { name: 'Tue', steps: 3000, cal: 139 },
        { name: 'Wed', steps: 2000, cal: 980 },
        { name: 'Thu', steps: 2780, cal: 390 },
        { name: 'Fri', steps: 1890, cal: 480 },
        { name: 'Sat', steps: 2390, cal: 380 },
        { name: 'Sun', steps: 3490, cal: 430 },
    ];

    useEffect(() => {
        let interval: any;
        if (tracking) {
            interval = setInterval(() => {
                setTimer(t => t + 1);
                
                // --- SIMULATION LOGIC ---
                // Simulating a jogging pace approx 160 steps/min (approx 2.6 steps/sec)
                // Introducing slight randomness for realism
                const simulatedSteps = Math.floor(Math.random() * 2) + 2; 
                
                // Average stride length approx 0.76m
                const simulatedDistanceKm = (simulatedSteps * 0.00076);
                
                // Approx 0.04 kcal per step
                const simulatedCalories = (simulatedSteps * 0.04);

                setDailyStats(prev => ({
                    steps: prev.steps + simulatedSteps,
                    distance: prev.distance + simulatedDistanceKm,
                    calories: prev.calories + simulatedCalories
                }));

            }, 1000);
        }
        return () => clearInterval(interval);
    }, [tracking]);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };
    
    // Calculate live pace (min/km)
    // Avoid division by zero
    const sessionDistance = (dailyStats.distance - 3.1); // Assuming 3.1 was start
    const pace = sessionDistance > 0.01 
        ? (timer / 60) / sessionDistance 
        : 0;
    
    const paceDisplay = pace > 0 && pace < 30 
        ? `${Math.floor(pace)}'${Math.floor((pace % 1) * 60)}"`
        : "--'--\"";

    return (
        <div className="flex flex-col h-full w-full">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Activity className="text-green-400" /> Activity Tracker
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                {/* Live Tracker */}
                <div className="glass-panel p-6 rounded-2xl flex flex-col items-center justify-center text-center relative overflow-hidden">
                    <div className="text-6xl font-black text-white font-mono mb-2 tracking-widest z-10 relative">
                        {formatTime(timer)}
                    </div>
                    <p className="text-slate-400 text-sm mb-8 z-10 relative flex items-center gap-2">
                        <Timer size={14} /> DURATION
                    </p>
                    
                    <button 
                        onClick={() => setTracking(!tracking)}
                        className={`z-10 relative w-24 h-24 rounded-full flex items-center justify-center text-sm font-bold transition-all shadow-2xl border-4 ${tracking ? 'bg-slate-900 border-red-500 text-red-500 hover:bg-red-500 hover:text-white shadow-red-900/30' : 'bg-slate-900 border-green-500 text-green-500 hover:bg-green-500 hover:text-white shadow-green-900/30'}`}
                    >
                        {tracking ? 'STOP' : 'START'}
                    </button>
                    
                    {tracking && (
                        <div className="absolute inset-0 bg-green-500/5 animate-pulse z-0 pointer-events-none" />
                    )}
                    {tracking && (
                        <p className="absolute bottom-4 text-green-400 text-[10px] font-bold tracking-widest uppercase animate-pulse">
                            ● Recording Active
                        </p>
                    )}
                </div>

                {/* Quick Stats */}
                <div className="glass-panel p-6 rounded-2xl grid grid-cols-2 gap-4">
                    <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 flex flex-col justify-between">
                        <div className="flex justify-between items-start mb-2">
                            <p className="text-slate-400 text-xs font-bold uppercase">Steps</p>
                            <Footprints className="text-blue-400 w-4 h-4" />
                        </div>
                        <p className="text-2xl font-bold text-white">{dailyStats.steps.toLocaleString()}</p>
                    </div>
                    <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 flex flex-col justify-between">
                         <div className="flex justify-between items-start mb-2">
                            <p className="text-slate-400 text-xs font-bold uppercase">Calories</p>
                            <Flame className="text-orange-400 w-4 h-4" />
                        </div>
                        <p className="text-2xl font-bold text-orange-400">{dailyStats.calories.toFixed(0)}</p>
                    </div>
                    <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 flex flex-col justify-between">
                         <div className="flex justify-between items-start mb-2">
                            <p className="text-slate-400 text-xs font-bold uppercase">Distance</p>
                            <MapPin className="text-purple-400 w-4 h-4" />
                        </div>
                        <p className="text-2xl font-bold text-white">{dailyStats.distance.toFixed(2)} <span className="text-sm font-normal text-slate-500">km</span></p>
                    </div>
                     <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 flex flex-col justify-between">
                         <div className="flex justify-between items-start mb-2">
                            <p className="text-slate-400 text-xs font-bold uppercase">Pace</p>
                            <Activity className="text-green-400 w-4 h-4" />
                        </div>
                        <p className="text-2xl font-bold text-green-400">{paceDisplay} <span className="text-sm font-normal text-slate-500">/km</span></p>
                    </div>
                </div>
                
                 {/* Challenges */}
                 <div className="glass-panel p-6 rounded-2xl flex flex-col">
                    <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-orange-400" /> Daily Goals
                    </h3>
                    <div className="space-y-3 flex-1 overflow-y-auto pr-1 custom-scrollbar">
                        {DAILY_CHALLENGES.map(c => (
                            <div key={c.id} className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-slate-600 transition-colors">
                                <div>
                                    <p className="text-sm text-white font-medium">{c.title}</p>
                                    <p className="text-xs text-slate-400">{c.description}</p>
                                </div>
                                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${c.completed ? 'bg-green-500 border-green-500' : 'border-slate-600'}`}>
                                    {c.completed && <span className="text-white text-xs">✓</span>}
                                </div>
                            </div>
                        ))}
                    </div>
                 </div>
            </div>

            {/* Charts */}
            <div className="glass-panel p-6 rounded-2xl flex-1 min-h-[300px] flex flex-col">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-white font-bold">Weekly Activity</h3>
                    <div className="flex gap-2">
                        <span className="text-xs text-slate-400 flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-orange-500"></span> Steps</span>
                    </div>
                </div>
                <div className="flex-1 w-full min-h-0">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorSteps" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#f97316" stopOpacity={0.8}/>
                                    <stop offset="95%" stopColor="#f97316" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} dy={10} />
                            <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                            <Tooltip 
                                contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px', color: '#fff' }}
                                itemStyle={{ color: '#cbd5e1' }}
                                cursor={{ stroke: '#475569', strokeWidth: 1 }}
                            />
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" opacity={0.5} />
                            <Area type="monotone" dataKey="steps" stroke="#f97316" strokeWidth={3} fillOpacity={1} fill="url(#colorSteps)" activeDot={{ r: 6, strokeWidth: 0 }} />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

// 5. Sports Module
const SportsModule = () => {
    const [activeSport, setActiveSport] = useState<typeof SPORTS_DATA[0] | null>(null);
    const [viewMode, setViewMode] = useState<'overview' | 'rules' | 'training'>('overview');
    const [openWeek, setOpenWeek] = useState<number | null>(null);

    // Reset view mode when changing sport
    useEffect(() => {
        if(activeSport) setViewMode('overview');
        setOpenWeek(1);
    }, [activeSport]);

    if (activeSport) {
        return (
            <div className="h-full flex flex-col">
                <button onClick={() => setActiveSport(null)} className="mb-4 text-slate-400 hover:text-white flex items-center gap-2">
                    ← Back to Sports
                </button>
                
                {/* Header Section */}
                <div className="relative h-48 rounded-2xl bg-gradient-to-r from-slate-800 to-slate-900 overflow-hidden mb-6 flex items-center justify-center border border-slate-700 shrink-0">
                    <span className="text-8xl select-none opacity-20 grayscale">{activeSport.icon}</span>
                    <div className="absolute bottom-6 left-6">
                        <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-md font-bold uppercase tracking-wider mb-2 inline-block">
                            {activeSport.category}
                        </span>
                        <h2 className="text-4xl font-bold text-white">{activeSport.name}</h2>
                    </div>
                </div>

                {/* Tabs */}
                <div className="flex gap-4 mb-6 border-b border-slate-800 pb-2 overflow-x-auto">
                    <button 
                        onClick={() => setViewMode('overview')}
                        className={`pb-2 px-4 font-bold text-sm transition-colors whitespace-nowrap ${viewMode === 'overview' ? 'text-orange-400 border-b-2 border-orange-400' : 'text-slate-400 hover:text-white'}`}
                    >
                        Overview & Drills
                    </button>
                    <button 
                        onClick={() => setViewMode('rules')}
                        className={`pb-2 px-4 font-bold text-sm transition-colors whitespace-nowrap ${viewMode === 'rules' ? 'text-orange-400 border-b-2 border-orange-400' : 'text-slate-400 hover:text-white'}`}
                    >
                        Official Rules
                    </button>
                    <button 
                        onClick={() => setViewMode('training')}
                        className={`pb-2 px-4 font-bold text-sm transition-colors whitespace-nowrap ${viewMode === 'training' ? 'text-orange-400 border-b-2 border-orange-400' : 'text-slate-400 hover:text-white'}`}
                    >
                        Training Plan
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto pr-2 pb-10">
                    {viewMode === 'overview' && (
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="glass-panel p-6 rounded-2xl">
                                    <h3 className="text-xl font-bold text-green-400 mb-4">Training Drills</h3>
                                    <div className="space-y-4">
                                        {activeSport.drills.map((d, i) => (
                                            <div key={i} className="bg-slate-800/50 p-3 rounded-lg">
                                                <div className="flex justify-between mb-1">
                                                    <span className="font-bold text-white">{d.title}</span>
                                                    <span className="text-xs text-orange-400 bg-orange-900/20 px-2 py-0.5 rounded">{d.reps}</span>
                                                </div>
                                                <p className="text-sm text-slate-400">{d.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="glass-panel p-6 rounded-2xl">
                                    <h3 className="text-xl font-bold text-purple-400 mb-4">Key Skills</h3>
                                    <div className="space-y-4">
                                        {activeSport.skills.map((s,i) => (
                                            <div key={i} className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                                                <h4 className="font-bold text-white mb-2">{s.title}</h4>
                                                <p className="text-sm text-slate-400">{s.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mt-6 p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-700">
                                <h3 className="text-lg font-bold text-white mb-2">Description</h3>
                                <p className="text-slate-400 leading-relaxed">{activeSport.description}</p>
                            </div>
                        </>
                    )}

                    {viewMode === 'rules' && (
                        <div className="space-y-6 max-w-4xl mx-auto">
                           {activeSport.detailedRules && activeSport.detailedRules.length > 0 ? (
                                activeSport.detailedRules.map((section, idx) => (
                                    <div key={idx} className="glass-panel p-6 rounded-2xl border-l-4 border-cyan-500">
                                        <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
                                            <ScrollText size={20} /> {section.title}
                                        </h3>
                                        <ul className="list-disc list-inside space-y-3 text-slate-300 leading-relaxed">
                                            {section.items.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))
                           ) : (
                               <div className="glass-panel p-6 rounded-2xl">
                                    <h3 className="text-xl font-bold text-cyan-400 mb-4">Basic Rules</h3>
                                    <ul className="list-disc list-inside space-y-2 text-slate-300">
                                        {activeSport.rules.map((r, i) => <li key={i}>{r}</li>)}
                                    </ul>
                               </div>
                           )}
                        </div>
                    )}

                    {viewMode === 'training' && (
                        <div className="space-y-4 max-w-4xl mx-auto">
                            {activeSport.trainingProgram && activeSport.trainingProgram.length > 0 ? (
                                activeSport.trainingProgram.map((week) => (
                                    <div key={week.weekNumber} className="glass-panel rounded-2xl overflow-hidden border border-slate-800">
                                        <div 
                                            className="p-4 bg-slate-800/40 flex items-center justify-between cursor-pointer hover:bg-slate-800/60 transition-colors"
                                            onClick={() => setOpenWeek(openWeek === week.weekNumber ? null : week.weekNumber)}
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 font-bold">
                                                    {week.weekNumber}
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-white text-lg">{week.theme}</h3>
                                                    <p className="text-xs text-slate-400">Objective: {week.objective}</p>
                                                </div>
                                            </div>
                                            {openWeek === week.weekNumber ? <ChevronUp className="text-slate-400" /> : <ChevronDown className="text-slate-400" />}
                                        </div>

                                        {openWeek === week.weekNumber && (
                                            <div className="p-4 border-t border-slate-800">
                                                <div className="space-y-4">
                                                    {week.schedule.map((day, idx) => (
                                                        <div key={idx} className="flex flex-col md:flex-row gap-4 p-3 bg-slate-900/50 rounded-xl">
                                                            <div className="w-24 shrink-0 border-r border-slate-800 md:border-r-0 md:border-b-0">
                                                                <span className="text-sm font-bold text-cyan-400 uppercase tracking-wide block">{day.day}</span>
                                                                <span className="text-[10px] text-slate-500 block mt-1 uppercase tracking-wider">{day.focus}</span>
                                                            </div>
                                                            <div className="flex-1 space-y-3">
                                                                {day.exercises.map((ex, exIdx) => (
                                                                    <div key={exIdx} className="border-b border-slate-800 pb-2 last:border-0 last:pb-0">
                                                                        <div className="flex justify-between items-start mb-1">
                                                                            <div className="flex items-center gap-2">
                                                                                 <PlayCircle size={14} className="text-green-500 shrink-0" />
                                                                                 <span className="text-slate-200 text-sm font-medium">{ex.name}</span>
                                                                            </div>
                                                                            <span className="text-xs font-mono text-orange-300 bg-slate-800 px-2 py-0.5 rounded ml-2 whitespace-nowrap">{ex.durationOrReps}</span>
                                                                        </div>
                                                                        {ex.note && (
                                                                            <p className="text-xs text-slate-500 ml-6 italic">{ex.note}</p>
                                                                        )}
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))
                            ) : (
                                <div className="text-center p-10 text-slate-500">
                                    <Calendar className="w-12 h-12 mx-auto mb-4 opacity-20" />
                                    <p>No training program data available for this sport yet.</p>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        );
    }

    return (
        <div className="h-full flex flex-col">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Dumbbell className="text-orange-400" /> Sports Library
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-auto pb-20">
                {SPORTS_DATA.map(sport => (
                    <div 
                        key={sport.id}
                        onClick={() => setActiveSport(sport)}
                        className="group relative bg-slate-900 rounded-2xl p-6 border border-slate-800 hover:border-orange-500/50 transition-all cursor-pointer hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/10"
                    >
                        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{sport.icon}</div>
                        <h3 className="text-xl font-bold text-white mb-1">{sport.name}</h3>
                        <p className="text-xs text-slate-400 uppercase tracking-wider mb-3">{sport.category}</p>
                        <p className="text-sm text-slate-500 line-clamp-2">{sport.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

// 6. Theory Module
const TheoryModule = () => (
    <div className="h-full flex flex-col max-w-3xl mx-auto w-full">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <BookOpen className="text-blue-400" /> PE Theory
        </h2>
        <div className="space-y-6 overflow-y-auto pb-10">
            {THEORY_TOPICS.map((topic, idx) => (
                <div key={idx} className="glass-panel p-6 rounded-2xl border-l-4 border-blue-500">
                    <h3 className="text-lg font-bold text-white mb-2">{topic.title}</h3>
                    <p className="text-slate-300 leading-relaxed">{topic.content}</p>
                </div>
            ))}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700">
                <h3 className="text-lg font-bold text-white mb-2">School Project Note</h3>
                <p className="text-sm text-slate-400">
                    This content is curated for educational purposes, covering standard physical education curriculums including biomechanics, physiology, and sports rules.
                </p>
            </div>
        </div>
    </div>
);

// --- Main App Component ---

const App = () => {
  const [loading, setLoading] = useState(true);
  const [currentView, setCurrentView] = useState<AppView>(AppView.HOME);

  if (loading) {
    return <SplashScreen onFinish={() => setLoading(false)} />;
  }

  const renderContent = () => {
    switch (currentView) {
      case AppView.HOME:
        return (
          <div className="flex flex-col h-full justify-center">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-2">Welcome Back, <span className="text-orange-500">Athlete</span></h1>
            <p className="text-slate-400 mb-8 max-w-lg">Your offline training companion is ready. Start a session or learn a new skill today.</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <button onClick={() => setCurrentView(AppView.SPORTS)} className="p-6 rounded-2xl bg-slate-800 hover:bg-slate-700 transition-colors border border-slate-700 flex flex-col items-center gap-3 text-center group">
                 <Dumbbell className="text-orange-400 w-8 h-8 group-hover:scale-110 transition-transform" />
                 <span className="font-bold text-white">Sports</span>
              </button>
              <button onClick={() => setCurrentView(AppView.ANATOMY)} className="p-6 rounded-2xl bg-slate-800 hover:bg-slate-700 transition-colors border border-slate-700 flex flex-col items-center gap-3 text-center group">
                 <User className="text-cyan-400 w-8 h-8 group-hover:scale-110 transition-transform" />
                 <span className="font-bold text-white">Anatomy</span>
              </button>
              <button onClick={() => setCurrentView(AppView.TRACKER)} className="p-6 rounded-2xl bg-slate-800 hover:bg-slate-700 transition-colors border border-slate-700 flex flex-col items-center gap-3 text-center group">
                 <Activity className="text-green-400 w-8 h-8 group-hover:scale-110 transition-transform" />
                 <span className="font-bold text-white">Tracker</span>
              </button>
               <button onClick={() => setCurrentView(AppView.AI_COACH)} className="p-6 rounded-2xl bg-slate-800 hover:bg-slate-700 transition-colors border border-slate-700 flex flex-col items-center gap-3 text-center group">
                 <BrainCircuit className="text-purple-400 w-8 h-8 group-hover:scale-110 transition-transform" />
                 <span className="font-bold text-white">AI Coach</span>
              </button>
            </div>

            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-orange-900/20 to-slate-900 border border-orange-500/20">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center font-bold text-xl shadow-lg shadow-orange-600/20">🔥</div>
                    <div>
                        <p className="text-xs text-orange-400 font-bold uppercase tracking-wide">Streak Active</p>
                        <p className="text-white font-bold text-lg">5 Day Activity Streak</p>
                    </div>
                </div>
            </div>
          </div>
        );
      case AppView.SPORTS: return <SportsModule />;
      case AppView.ANATOMY: return <AnatomyModule />;
      case AppView.TRACKER: return <TrackerModule />;
      case AppView.AI_COACH: return <AICoachModule />;
      case AppView.THEORY: return <TheoryModule />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 flex flex-col md:flex-row overflow-hidden">
      {/* Sidebar / Bottom Nav */}
      <nav className="md:w-20 lg:w-64 bg-slate-900 border-r border-slate-800 flex flex-row md:flex-col justify-between p-4 z-40 fixed md:relative bottom-0 w-full md:h-full">
        <div className="hidden md:flex items-center gap-3 mb-8 px-2">
            <div className="w-10 h-10 shrink-0">
               <UrjaLogo className="w-full h-full" />
            </div>
            <span className="font-black text-2xl tracking-tighter lg:block hidden bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-200">URJA</span>
        </div>

        <div className="flex md:flex-col justify-around w-full gap-2">
            {[
                { id: AppView.HOME, icon: Menu, label: 'Home' },
                { id: AppView.SPORTS, icon: Dumbbell, label: 'Sports' },
                { id: AppView.ANATOMY, icon: User, label: 'Anatomy' },
                { id: AppView.TRACKER, icon: Activity, label: 'Tracker' },
                { id: AppView.AI_COACH, icon: BrainCircuit, label: 'AI Coach' },
                { id: AppView.THEORY, icon: BookOpen, label: 'Theory' },
            ].map(item => (
                <button
                    key={item.id}
                    onClick={() => setCurrentView(item.id)}
                    className={`p-3 rounded-xl flex items-center gap-3 transition-all ${currentView === item.id ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20' : 'text-slate-400 hover:bg-slate-800 hover:text-white'}`}
                >
                    <item.icon size={24} />
                    <span className="hidden lg:block font-medium">{item.label}</span>
                </button>
            ))}
        </div>
        
        <div className="hidden md:block mt-auto px-2">
             <div className="text-xs text-slate-600 text-center lg:text-left">
                v1.1 Offline Build
             </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 overflow-hidden relative">
        <div className="h-full overflow-y-auto p-4 md:p-8 pb-24 md:pb-8 scroll-smooth">
             {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default App;