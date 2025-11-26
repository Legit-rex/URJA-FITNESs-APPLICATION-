
import { Sport, MuscleInfo, Challenge } from './types';

export const SPORTS_DATA: Sport[] = [
  {
    id: 'sprint',
    name: 'Sprinting',
    category: 'Athletics',
    description: 'High-intensity running over short distances. Focuses on explosive power and speed.',
    icon: '🏃',
    rules: ['Stay in your lane.', 'False starts lead to disqualification.', 'Finish line is crossed when torso crosses.'],
    detailedRules: [
      {
        title: 'The Start',
        items: [
          'Athletes must start from starting blocks for races up to 400m.',
          'The commands are "On your marks", "Set", and the gun fire.',
          'Any movement before the gun (reaction time less than 0.100s) is a False Start and results in immediate disqualification.'
        ]
      },
      {
        title: 'The Race',
        items: [
          'Runners must remain strictly within their assigned lane.',
          'Stepping on or over the lane line can lead to disqualification if it impedes another runner or shortens the distance.',
          'Obstruction of other competitors is prohibited.'
        ]
      },
      {
        title: 'The Finish',
        items: [
          'The race finishes when any part of the athlete\'s torso (not head, neck, arms, leg, hands or feet) reaches the vertical plane of the nearest edge of the finish line.',
          'Timing is recorded to 1/100th of a second.'
        ]
      }
    ],
    skills: [
      { title: 'Start Phase', desc: 'Explosive drive from blocks, keep head low.' },
      { title: 'Drive Phase', desc: 'Maximize stride length and ground force.' },
      { title: 'Arm Action', desc: 'cheek-to-hip motion, elbows at 90 degrees.' }
    ],
    drills: [
      { title: 'A-Skips', reps: '3 x 30m', desc: 'Focus on knee drive and toe dorsiflexion.' },
      { title: 'Hill Sprints', reps: '5 x 40m', desc: 'Run up steep hill to build power.' }
    ],
    warmups: ['High Knees', 'Butt Kicks', 'Leg Swings', 'Lunges'],
    trainingProgram: [
      {
        weekNumber: 1,
        theme: 'Foundation & Mechanics',
        objective: 'Build correct form and general conditioning.',
        schedule: [
          { day: 'Mon', focus: 'Acceleration', exercises: [{ name: 'Wall Drills', durationOrReps: '3 sets x 30s' }, { name: 'Short Sprints (20m)', durationOrReps: '6 reps' }] },
          { day: 'Wed', focus: 'Strength', exercises: [{ name: 'Squats', durationOrReps: '4 sets x 10' }, { name: 'Plyometric Jumps', durationOrReps: '3 sets x 12' }] },
          { day: 'Fri', focus: 'Tempo', exercises: [{ name: '100m Stride (70% effort)', durationOrReps: '8 reps' }] }
        ]
      },
      {
        weekNumber: 2,
        theme: 'Max Velocity',
        objective: 'Increase top speed mechanics.',
        schedule: [
          { day: 'Mon', focus: 'Top Speed', exercises: [{ name: 'Flying 30s', durationOrReps: '5 reps' }, { name: 'A-Skips', durationOrReps: '4 x 30m' }] },
          { day: 'Wed', focus: 'Power', exercises: [{ name: 'Sled Pushes', durationOrReps: '4 x 15m' }, { name: 'Broad Jumps', durationOrReps: '3 x 5' }] },
          { day: 'Fri', focus: 'Speed Endurance', exercises: [{ name: '150m Sprints', durationOrReps: '3 reps (Full Rest)' }] }
        ]
      },
      {
        weekNumber: 3,
        theme: 'Speed Endurance',
        objective: 'Maintain top speed for longer duration.',
        schedule: [
          { day: 'Mon', focus: 'Lactic Threshold', exercises: [{ name: '200m Sprints', durationOrReps: '3 reps @ 90%' }, { name: 'Walking Recovery', durationOrReps: '5 mins' }] },
          { day: 'Wed', focus: 'Reaction', exercises: [{ name: 'Block Starts', durationOrReps: '10 reps' }, { name: 'Reactive Jumps', durationOrReps: '4 sets' }] },
          { day: 'Fri', focus: 'Form', exercises: [{ name: 'Technique Drills', durationOrReps: '20 mins' }, { name: '60m Flying Sprints', durationOrReps: '4 reps' }] }
        ]
      },
      {
        weekNumber: 4,
        theme: 'Taper & Test',
        objective: 'Recovery and performance testing.',
        schedule: [
          { day: 'Mon', focus: 'Light Speed', exercises: [{ name: '30m Sprints', durationOrReps: '4 reps' }] },
          { day: 'Wed', focus: 'Mobility', exercises: [{ name: 'Dynamic Stretching', durationOrReps: '20 mins' }] },
          { day: 'Fri', focus: 'Time Trial', exercises: [{ name: '100m Dash Test', durationOrReps: '1 attempt' }] }
        ]
      }
    ]
  },
  {
    id: 'running',
    name: 'Running (Distance)',
    category: 'Athletics',
    description: 'Long-distance endurance running focusing on aerobic capacity and pacing.',
    icon: '👟',
    rules: ['Follow the designated course.', 'Do not obstruct other runners.', 'Maintain hydration at stations.'],
    detailedRules: [
      {
        title: 'Course Adherence',
        items: [
          'Competitors must follow the prescribed course.',
          'Shortening the route (cutting corners) results in disqualification.',
          'Runners who leave the track/course voluntarily cannot re-enter to continue.'
        ]
      },
      {
        title: 'Conduct',
        items: [
          'Runners must not obstruct or jostle other competitors.',
          'Pacing by persons not participating in the race is prohibited.',
          'Assistance (food/drink) is only allowed at official stations.'
        ]
      }
    ],
    skills: [
      { title: 'Pacing', desc: 'Maintaining a steady energy output over time.' },
      { title: 'Breathing', desc: 'Rhythmic breathing (2:2 or 3:3 pattern).' },
      { title: 'Posture', desc: 'Upright torso, relaxed shoulders, mid-foot strike.' }
    ],
    drills: [
      { title: 'Fartlek', reps: '20 mins', desc: 'Random mix of jogging and sprinting.' },
      { title: 'Tempo Run', reps: '3km', desc: 'Running at a comfortably hard pace.' }
    ],
    warmups: ['Walking lunges', 'Calf raises', 'Torso twists'],
    trainingProgram: [
      {
        weekNumber: 1,
        theme: 'Aerobic Base',
        objective: 'Establish mileage and get used to time on feet.',
        schedule: [
          { day: 'Mon', focus: 'Easy Run', exercises: [{ name: 'Jog (Conversational pace)', durationOrReps: '20 mins' }] },
          { day: 'Wed', focus: 'Intervals', exercises: [{ name: '2 mins fast / 2 mins slow', durationOrReps: '5 rounds' }] },
          { day: 'Sat', focus: 'Long Run', exercises: [{ name: 'Steady pace run', durationOrReps: '35 mins' }] }
        ]
      },
      {
        weekNumber: 2,
        theme: 'Threshold Building',
        objective: 'Improve lactate threshold.',
        schedule: [
          { day: 'Mon', focus: 'Recovery', exercises: [{ name: 'Light Jog', durationOrReps: '20 mins' }] },
          { day: 'Wed', focus: 'Tempo', exercises: [{ name: 'Warmup', durationOrReps: '10 mins' }, { name: 'Threshold Pace', durationOrReps: '15 mins' }] },
          { day: 'Sat', focus: 'Long Run', exercises: [{ name: 'Steady pace', durationOrReps: '45 mins' }] }
        ]
      },
      {
        weekNumber: 3,
        theme: 'Speed Endurance',
        objective: 'Increase pace sustainability.',
        schedule: [
          { day: 'Mon', focus: 'Hills', exercises: [{ name: 'Hill Repeats', durationOrReps: '6 x 1 min' }] },
          { day: 'Wed', focus: 'Track Work', exercises: [{ name: '800m repeats', durationOrReps: '4 reps (2 min rest)' }] },
          { day: 'Sat', focus: 'Long Run', exercises: [{ name: 'Steady pace', durationOrReps: '55 mins' }] }
        ]
      },
      {
        weekNumber: 4,
        theme: 'Recovery Week',
        objective: 'Absorb training adaptation.',
        schedule: [
          { day: 'Mon', focus: 'Mobility', exercises: [{ name: 'Yoga for runners', durationOrReps: '30 mins' }] },
          { day: 'Wed', focus: 'Easy Run', exercises: [{ name: 'Jog', durationOrReps: '25 mins' }] },
          { day: 'Sat', focus: 'Test', exercises: [{ name: '5km Time Trial', durationOrReps: '1 attempt' }] }
        ]
      }
    ]
  },
  {
    id: 'kabaddi',
    name: 'Kabaddi',
    category: 'Combat',
    description: 'A contact team sport originating from India. Requires agility, strength, and breath control.',
    icon: '🤼',
    rules: ['Raider must chant "Kabaddi" continuously.', 'Raider gets 30 seconds.', 'Defenders cannot grab clothes/hair.'],
    detailedRules: [
      {
        title: 'Raiding',
        items: [
          'The raider must begin chanting "Kabaddi" before crossing the midline.',
          'The cant must be continuous and audible. If the raider inhales or pauses, they are out.',
          'Maximum raid duration is 30 seconds.',
          'The raider must touch an opponent or cross the Bonus Line (active when 6+ defenders are present) to score.'
        ]
      },
      {
        title: 'Defending & Scoring',
        items: [
          'Defenders must not step out of bounds (lobbies) unless a touch has occurred.',
          'Defenders cannot grab the raider by clothes, hair, or any part other than limbs or trunk.',
          '1 Point is awarded for each opponent out. 2 Points for an "All-Out" (entire team dismissed).',
          'Lona: 2 extra points awarded for clearing the opponent team.'
        ]
      }
    ],
    skills: [
      { title: 'Hand Touch', desc: 'Quick extension of arm to tag defender.' },
      { title: 'Toe Touch', desc: 'Using leg reach to tag lower body.' },
      { title: 'Ankle Hold', desc: 'Defensive move to lock raider\'s ankle.' }
    ],
    drills: [
      { title: 'Cant Practice', reps: '5 mins', desc: 'Practice holding breath while chanting.' },
      { title: 'Chain Defense', reps: '10 mins', desc: 'Moving in sync with teammates holding hands.' }
    ],
    warmups: ['Neck rotations', 'Wrist stretching', 'Squat jumps'],
    trainingProgram: [
      {
        weekNumber: 1,
        theme: 'Footwork & Breath',
        objective: 'Master the cant and basic movement patterns.',
        schedule: [
          { day: 'Mon', focus: 'Cant Control', exercises: [{ name: 'Cant whilst jogging', durationOrReps: '10 mins' }, { name: 'High Knees', durationOrReps: '3 x 1 min' }] },
          { day: 'Tue', focus: 'Footwork', exercises: [{ name: 'Side shuffles', durationOrReps: '10 mins' }, { name: 'Zig-zag cone drills', durationOrReps: '5 rounds' }] },
          { day: 'Thu', focus: 'Agility', exercises: [{ name: 'Ladder drills', durationOrReps: '15 mins' }] }
        ]
      },
      {
        weekNumber: 2,
        theme: 'Raiding Skills',
        objective: 'Develop attacking reach and escape speed.',
        schedule: [
          { day: 'Mon', focus: 'Reach', exercises: [{ name: 'Hand touch drills (Shadow)', durationOrReps: '50 reps' }, { name: 'Toe touch practice', durationOrReps: '50 reps' }] },
          { day: 'Wed', focus: 'Strength', exercises: [{ name: 'Pushups', durationOrReps: '3 x 15' }, { name: 'Squats', durationOrReps: '3 x 20' }] },
          { day: 'Fri', focus: 'Combos', exercises: [{ name: 'Escape dash practice', durationOrReps: '10 x 10m' }] }
        ]
      },
      {
        weekNumber: 3,
        theme: 'Defensive Holds',
        objective: 'Improving tackling strength and timing.',
        schedule: [
          { day: 'Mon', focus: 'Ankle Holds', exercises: [{ name: 'Ankle hold simulation', durationOrReps: '20 reps each side' }] },
          { day: 'Wed', focus: 'Thigh Hold', exercises: [{ name: 'Partner thigh grip (Light)', durationOrReps: '15 reps' }] },
          { day: 'Fri', focus: 'Team Chain', exercises: [{ name: 'Chain movement drill', durationOrReps: '20 mins' }] }
        ]
      },
      {
        weekNumber: 4,
        theme: 'Game Simulation',
        objective: 'Full contact conditioning.',
        schedule: [
          { day: 'Mon', focus: 'Raiding', exercises: [{ name: '30s Raid Sprints', durationOrReps: '10 reps' }] },
          { day: 'Wed', focus: 'Tactics', exercises: [{ name: 'Bonus Line practice', durationOrReps: '15 mins' }] },
          { day: 'Fri', focus: 'Sparring', exercises: [{ name: 'Half-court Kabaddi', durationOrReps: '30 mins' }] }
        ]
      }
    ]
  },
  {
    id: 'wrestling',
    name: 'Wrestling',
    category: 'Combat',
    description: 'Grappling sport involving clinching, throws, and takedowns.',
    icon: '🥋',
    rules: ['Pin opponent\'s shoulders to win.', 'No striking or biting.', 'Stay within the circle zone.'],
    detailedRules: [
      {
        title: 'Match Objectives',
        items: [
          'The primary goal is to pin the opponent\'s shoulders to the mat for a "fall".',
          'If no fall occurs, the match is decided by points.',
          'Matches consist of periods (typically 2-3 minutes).'
        ]
      },
      {
        title: 'Scoring',
        items: [
          'Takedown (2 pts): Taking opponent to the mat from standing and controlling them.',
          'Escape (1 pt): Breaking free from bottom position to neutral standing.',
          'Reversal (2 pts): Moving from bottom position to top control.',
          'Near Fall / Exposure (2-4 pts): Holding opponent\'s back close to the mat.'
        ]
      },
      {
        title: 'Illegal Actions',
        items: [
          'No striking, biting, pinching, or hair pulling.',
          'Slams: Lifting and returning opponent to mat with unnecessary force is prohibited.',
          'Full Nelson and chokes are illegal.'
        ]
      }
    ],
    skills: [
      { title: 'Stance', desc: 'Low center of gravity, ready to sprawl.' },
      { title: 'Double Leg Takedown', desc: 'Shooting in to grab both legs.' },
      { title: 'Sprawl', desc: 'Defensive move to counter leg attacks.' }
    ],
    drills: [
      { title: 'Shadow Wrestling', reps: '3 x 3 mins', desc: 'Practice stance motion and shots alone.' },
      { title: 'Neck Bridges', reps: '10 reps', desc: 'Strengthen neck muscles for durability.' }
    ],
    warmups: ['Neck rotations', 'Bear crawls', 'Somersaults'],
    trainingProgram: [
      {
        weekNumber: 1,
        theme: 'Stance & Motion',
        objective: 'Develop a solid base and ability to move without crossing feet.',
        schedule: [
          { day: 'Mon', focus: 'Stance', exercises: [{ name: 'Stance Hold', durationOrReps: '5 x 1 min' }, { name: 'Circle Movement', durationOrReps: '10 mins' }] },
          { day: 'Wed', focus: 'Level Change', exercises: [{ name: 'Penetration Steps', durationOrReps: '3 x 20' }, { name: 'Sprawls', durationOrReps: '3 x 15' }] },
          { day: 'Fri', focus: 'Conditioning', exercises: [{ name: 'Burpees', durationOrReps: '50 total' }, { name: 'Neck Bridges', durationOrReps: '3 sets' }] }
        ]
      },
      {
        weekNumber: 2,
        theme: 'Takedowns',
        objective: 'Learn to enter and finish attacks.',
        schedule: [
          { day: 'Mon', focus: 'Double Leg', exercises: [{ name: 'Shot practice (Air)', durationOrReps: '50 reps' }, { name: 'Shot to finish', durationOrReps: '20 reps' }] },
          { day: 'Wed', focus: 'Defense', exercises: [{ name: 'Sprawl & Circle', durationOrReps: '3 x 2 mins' }] },
          { day: 'Fri', focus: 'Live Situations', exercises: [{ name: 'Shadow Wrestling', durationOrReps: '3 x 3 min rounds' }] }
        ]
      },
      {
        weekNumber: 3,
        theme: 'Mat Work',
        objective: 'Escapes and pinning combinations.',
        schedule: [
          { day: 'Mon', focus: 'Escapes', exercises: [{ name: 'Stand-ups', durationOrReps: '30 reps' }, { name: 'Sit-outs', durationOrReps: '30 reps' }] },
          { day: 'Wed', focus: 'Pinning', exercises: [{ name: 'Half Nelson setup', durationOrReps: '20 reps' }] },
          { day: 'Fri', focus: 'Strength', exercises: [{ name: 'Pull-ups', durationOrReps: '3 x max' }, { name: 'Farmer Carry', durationOrReps: '3 x 30m' }] }
        ]
      },
      {
        weekNumber: 4,
        theme: 'Live Combat',
        objective: 'Put it all together.',
        schedule: [
          { day: 'Mon', focus: 'Flow Wrestling', exercises: [{ name: 'Light sparring (30%)', durationOrReps: '15 mins' }] },
          { day: 'Wed', focus: 'Cardio', exercises: [{ name: 'High Intensity Wrestling Drills', durationOrReps: '20 mins' }] },
          { day: 'Fri', focus: 'Live Matches', exercises: [{ name: 'Full intensity rounds', durationOrReps: '3 x 3 mins' }] }
        ]
      }
    ]
  },
  {
    id: 'armwrestling',
    name: 'Arm Wrestling',
    category: 'Combat',
    description: 'Strength sport with two participants. Focuses on forearm, wrist, and bicep power.',
    icon: '💪',
    rules: ['Elbow must stay on the pad.', 'Shoulders square to table.', 'No slipping of grip.'],
    detailedRules: [
      {
        title: 'Starting Position',
        items: [
          'Shoulders must be square to the table.',
          'There must be a visible gap between shoulder and forearm/hand.',
          'Wrists must be straight, with knuckles visible.',
          'The free hand must maintain contact with the peg.'
        ]
      },
      {
        title: 'During the Match',
        items: [
          'The elbow must remain in contact with the pad at all times. Lifting the elbow is a foul.',
          'Two fouls result in a loss.',
          'Slip Out: If hands slip apart without a foul, a "strap match" is initiated where hands are tied together.',
          'Dangerous Position: Dropping the shoulder below the table level is dangerous and results in a stop/foul.'
        ]
      }
    ],
    skills: [
      { title: 'Top Roll', desc: 'Attacking the opponent\'s fingers to open their hand.' },
      { title: 'Hook', desc: 'Curling wrist to engage biceps and lats.' }
    ],
    drills: [
      { title: 'Static Holds', reps: '3 x 15s', desc: 'Hold weight at 90 degree arm angle.' },
      { title: 'Wrist Curls', reps: '4 x 12', desc: 'Heavy dumbbell wrist curls.' }
    ],
    warmups: ['Wrist circles', 'Band pulls', 'Light sparring'],
    trainingProgram: [
      {
        weekNumber: 1,
        theme: 'Tendon Strength',
        objective: 'Condition elbows and wrists for pressure.',
        schedule: [
          { day: 'Mon', focus: 'Wrist', exercises: [{ name: 'Heavy Wrist Curls', durationOrReps: '4 x 10' }, { name: 'Pronation drills', durationOrReps: '3 x 15' }] },
          { day: 'Wed', focus: 'Static', exercises: [{ name: 'Lock hold (90 degrees)', durationOrReps: '3 x 20s' }, { name: 'Hammer Curls', durationOrReps: '4 x 8' }] },
          { day: 'Fri', focus: 'Back Pressure', exercises: [{ name: 'Cable Pulls', durationOrReps: '4 x 10' }] }
        ]
      },
      {
        weekNumber: 2,
        theme: 'Table Power',
        objective: 'Specific table strength and explosiveness.',
        schedule: [
          { day: 'Mon', focus: 'Hook Power', exercises: [{ name: 'Supinated Chin-ups', durationOrReps: '3 x Max' }, { name: 'Deep Wrist Curls', durationOrReps: '5 x 8' }] },
          { day: 'Thu', focus: 'Top Roll', exercises: [{ name: 'Rising muscle lifts', durationOrReps: '4 x 10' }, { name: 'Finger strength holds', durationOrReps: '3 x 30s' }] }
        ]
      },
      {
        weekNumber: 3,
        theme: 'Isometric Holds',
        objective: 'Building "stop" power.',
        schedule: [
          { day: 'Mon', focus: 'Center Hold', exercises: [{ name: 'Band Static Hold', durationOrReps: '5 x 10s (Max Effort)' }] },
          { day: 'Wed', focus: 'Cupping', exercises: [{ name: 'Cable Cupping', durationOrReps: '4 x 12' }] },
          { day: 'Fri', focus: 'Recovery', exercises: [{ name: 'Light band work', durationOrReps: 'High reps' }] }
        ]
      },
      {
        weekNumber: 4,
        theme: 'Ready to Pull',
        objective: 'Speed and reaction.',
        schedule: [
          { day: 'Mon', focus: 'Starts', exercises: [{ name: 'Ready-Go drills', durationOrReps: '20 reps' }] },
          { day: 'Wed', focus: 'Specifics', exercises: [{ name: 'Side Pressure', durationOrReps: '3 x 8' }] },
          { day: 'Sat', focus: 'Table Time', exercises: [{ name: 'Practice pulls', durationOrReps: '30 mins' }] }
        ]
      }
    ]
  },
  {
    id: 'football',
    name: 'Football',
    category: 'Team',
    description: 'The world\'s most popular sport involving kicking a ball to score goals.',
    icon: '⚽',
    rules: ['No hands (except goalie).', 'Offside rule applies.', '11 players per team.'],
    detailedRules: [
      {
        title: 'Gameplay Basics',
        items: [
          'A match consists of two 45-minute halves.',
          'Each team has 11 players, one of whom is the Goalkeeper.',
          'The whole ball must cross the goal line to count as a goal.'
        ]
      },
      {
        title: 'Offside Rule',
        items: [
          'A player is in an offside position if they are nearer to the opponent\'s goal line than both the ball and the second-last opponent.',
          'It is an offence to be involved in active play while in an offside position.'
        ]
      },
      {
        title: 'Fouls & Misconduct',
        items: [
          'Direct Free Kick: Awarded for kicking, tripping, pushing, holding, or handling the ball.',
          'Penalty Kick: Awarded for a direct free kick offence inside the penalty area.',
          'Yellow Card: Caution for unsporting behavior, dissent, or persistent infringement.',
          'Red Card: Dismissal for serious foul play, violent conduct, or receiving two yellow cards.'
        ]
      }
    ],
    skills: [
      { title: 'Dribbling', desc: 'Close ball control while moving.' },
      { title: 'Passing', desc: 'Accurate distribution using inside of foot.' }
    ],
    drills: [
      { title: 'Cone Weaving', reps: '5 rounds', desc: 'Dribble through cones as fast as possible.' },
      { title: 'Wall Passing', reps: '50 passes', desc: 'One-touch passing against a wall.' }
    ],
    warmups: ['Jogging', 'Open/Close Gates', 'Sprints'],
    trainingProgram: [
      {
        weekNumber: 1,
        theme: 'Ball Mastery',
        objective: 'Improve touch and close control.',
        schedule: [
          { day: 'Mon', focus: 'Dribbling', exercises: [{ name: 'Cone Weave', durationOrReps: '10 mins' }, { name: 'Toe Taps', durationOrReps: '3 x 1 min' }] },
          { day: 'Wed', focus: 'Passing', exercises: [{ name: 'Wall Passes (L/R foot)', durationOrReps: '100 each' }, { name: 'Long Ball Practice', durationOrReps: '20 mins' }] },
          { day: 'Fri', focus: 'Agility', exercises: [{ name: 'T-Drill', durationOrReps: '5 sets' }] }
        ]
      },
      {
        weekNumber: 2,
        theme: 'Game Conditioning',
        objective: 'Stamina and shooting under pressure.',
        schedule: [
          { day: 'Mon', focus: 'Shooting', exercises: [{ name: 'Target Practice', durationOrReps: '30 shots' }, { name: 'Penalty Kicks', durationOrReps: '10 reps' }] },
          { day: 'Wed', focus: 'Endurance', exercises: [{ name: 'Interval Runs', durationOrReps: '4 x 4 mins' }] },
          { day: 'Sat', focus: 'Match Sim', exercises: [{ name: 'Small Sided Game', durationOrReps: '45 mins' }] }
        ]
      },
      {
        weekNumber: 3,
        theme: 'Tactical Awareness',
        objective: 'Positioning and spatial awareness.',
        schedule: [
          { day: 'Mon', focus: 'Crossing', exercises: [{ name: 'Wing play & crosses', durationOrReps: '20 reps' }] },
          { day: 'Wed', focus: 'Defense', exercises: [{ name: 'Jockeying drills', durationOrReps: '15 mins' }] },
          { day: 'Fri', focus: 'Set Pieces', exercises: [{ name: 'Corners & Free Kicks', durationOrReps: '30 mins' }] }
        ]
      },
      {
        weekNumber: 4,
        theme: 'Peak Performance',
        objective: 'Sharpness and speed.',
        schedule: [
          { day: 'Mon', focus: 'Speed', exercises: [{ name: 'Sprint with ball', durationOrReps: '10 x 30m' }] },
          { day: 'Wed', focus: 'Touch', exercises: [{ name: 'Rondo (Keep away)', durationOrReps: '15 mins' }] },
          { day: 'Sat', focus: 'Match', exercises: [{ name: 'Full Game', durationOrReps: '90 mins' }] }
        ]
      }
    ]
  },
   {
    id: 'basketball',
    name: 'Basketball',
    category: 'Team',
    description: 'Fast-paced game played on a rectangular court.',
    icon: '🏀',
    rules: ['No traveling (steps without dribbling).', 'Double dribble is a violation.', '5 players per side.'],
    detailedRules: [
      {
        title: 'Scoring',
        items: [
          'Field Goal: 2 points (inside the arc) or 3 points (outside the arc).',
          'Free Throw: 1 point, awarded after a foul.'
        ]
      },
      {
        title: 'Time Limits',
        items: [
          '24-Second Shot Clock: Team must attempt a shot hitting the rim within 24s.',
          '8-Second Rule: Offense must cross half-court within 8s.',
          '3-Second Rule: Offensive player cannot stand in the key (paint) for more than 3s.'
        ]
      },
      {
        title: 'Violations & Fouls',
        items: [
          'Traveling: Taking steps without dribbling.',
          'Double Dribble: Dribbling with two hands or stopping and starting again.',
          'Personal Foul: Illegal physical contact. 5 or 6 fouls disqualifies a player.'
        ]
      }
    ],
    skills: [
      { title: 'Shooting', desc: 'B.E.E.F principle (Balance, Eyes, Elbow, Follow-through).' },
      { title: 'Defense', desc: 'Stay low, shuffle feet, hands up.' }
    ],
    drills: [
      { title: 'Mikan Drill', reps: '20 layups', desc: 'Alternating layups under the basket.' },
      { title: 'Suicides', reps: '3 sets', desc: 'Sprint to free throw line, half court, far free throw, full court.' }
    ],
    warmups: ['Ball wraps', 'Dribble tag', 'Layup lines'],
    trainingProgram: [
      {
        weekNumber: 1,
        theme: 'Handling & Shooting',
        objective: 'Ball security and shooting form.',
        schedule: [
          { day: 'Mon', focus: 'Handles', exercises: [{ name: 'Figure 8 Dribble', durationOrReps: '3 x 1 min' }, { name: 'Two-ball dribbling', durationOrReps: '5 mins' }] },
          { day: 'Wed', focus: 'Form Shooting', exercises: [{ name: 'One-hand form shots', durationOrReps: '50 reps' }, { name: 'Free Throws', durationOrReps: '50 reps' }] },
          { day: 'Fri', focus: 'Footwork', exercises: [{ name: 'Pivot Drills', durationOrReps: '10 mins' }, { name: 'Defensive slides', durationOrReps: '3 x length of court' }] }
        ]
      },
      {
        weekNumber: 2,
        theme: 'Scoring & Agility',
        objective: 'Scoring off the dribble and conditioning.',
        schedule: [
          { day: 'Mon', focus: 'Layups', exercises: [{ name: 'Mikan Drill', durationOrReps: '3 mins' }, { name: 'Euro-step practice', durationOrReps: '20 reps' }] },
          { day: 'Wed', focus: 'Conditioning', exercises: [{ name: 'Suicides', durationOrReps: '3 sets' }, { name: 'Jump Rope', durationOrReps: '10 mins' }] },
          { day: 'Fri', focus: 'Game Shots', exercises: [{ name: 'Pull-up Jumpers', durationOrReps: '5 spots x 10' }] }
        ]
      },
      {
        weekNumber: 3,
        theme: 'Playmaking',
        objective: 'Passing and court vision.',
        schedule: [
          { day: 'Mon', focus: 'Passing', exercises: [{ name: 'Chest/Bounce Pass wall', durationOrReps: '50 reps' }] },
          { day: 'Wed', focus: 'Pick & Roll', exercises: [{ name: 'P&R Reads (Chair)', durationOrReps: '20 mins' }] },
          { day: 'Fri', focus: 'Defense', exercises: [{ name: 'Close-out drills', durationOrReps: '10 mins' }] }
        ]
      },
      {
        weekNumber: 4,
        theme: 'Game Ready',
        objective: 'Simulating game intensity.',
        schedule: [
          { day: 'Mon', focus: 'Moves', exercises: [{ name: '1-on-1 moves', durationOrReps: '30 mins' }] },
          { day: 'Wed', focus: 'Shooting', exercises: [{ name: '3-Point contest (self)', durationOrReps: 'Make 20' }] },
          { day: 'Fri', focus: 'Scrimmage', exercises: [{ name: '5v5 Game', durationOrReps: '40 mins' }] }
        ]
      }
    ]
  },
  {
    id: 'volleyball',
    name: 'Volleyball',
    category: 'Team',
    description: 'A dynamic team sport requiring explosive power, quick reflexes, and precise teamwork.',
    icon: '🏐',
    rules: ['Teams have 3 touches to return the ball.', 'No player can hit the ball twice in a row.', 'Touches the net is a violation.', 'Rotate positions clockwise upon winning serve.', 'Games are played to 25 points.'],
    detailedRules: [
      {
        title: 'Playing the Ball',
        items: [
          'A team is entitled to a maximum of 3 hits to return the ball over the net.',
          'A block is not counted as a hit.',
          'A player may not hit the ball two times consecutively (except during blocking).',
          'The ball may touch any part of the body.'
        ]
      },
      {
        title: 'Net Play & Faults',
        items: [
          'Contact with the net by a player is a fault.',
          'Players cannot cross the centerline completely into the opponent\'s court.',
          'Attack hits must be completed within the playing space.'
        ]
      },
      {
        title: 'Serving & Rotation',
        items: [
          'Players must rotate clockwise each time they win the serve.',
          'The server must not step on the court line (foot fault) during the service hit.',
          'A serve that touches the net but goes over is in play.'
        ]
      }
    ],
    skills: [
      { title: 'Passing (Bump)', desc: 'Using forearms to control the ball from a serve or attack.' },
      { title: 'Setting', desc: 'Overhead finger action to set up an attacker.' },
      { title: 'Spiking', desc: 'Explosive approach and arm swing to hit ball down.' },
      { title: 'Blocking', desc: 'Defensive play at the net to stop attacks.' }
    ],
    drills: [
      { title: 'Wall Pepper', reps: '5 mins', desc: 'Continuous pass-set-hit against a wall.' },
      { title: 'Butterfly Passing', reps: '10 mins', desc: 'Server to passer to target rotation.' },
      { title: 'Box Jumps', reps: '3 x 10', desc: 'Plyometric jumps to increase vertical.' }
    ],
    warmups: ['Jogging lines', 'Arm circles', 'Partner peppering', 'Dynamic stretching'],
    trainingProgram: [
      {
        weekNumber: 1,
        theme: 'Foundation & Ball Control',
        objective: 'Establish correct passing platform and setting hand shape.',
        schedule: [
          { 
            day: 'Monday', 
            focus: 'Passing Platform', 
            exercises: [
              { name: 'Wall Sits with Ball Hold', durationOrReps: '3 x 45s', note: 'Build leg endurance for low stance.' }, 
              { name: 'Solo Wall Passing', durationOrReps: '4 x 25 reps', note: 'Focus on flat platform.' },
              { name: 'Partner Toss & Pass', durationOrReps: '50 reps', note: 'Passer shuffles to ball.' }
            ] 
          },
          { 
            day: 'Wednesday', 
            focus: 'Setting Mechanics', 
            exercises: [
              { name: 'Finger Push-ups (Wall)', durationOrReps: '3 x 15 reps', note: 'Strengthen fingers.' }, 
              { name: 'Lying Down Sets', durationOrReps: '50 reps', note: 'Focus on wrist snap alone.' },
              { name: 'Wall Setting (Rapid)', durationOrReps: '3 x 1 min', note: 'Keep ball moving fast.' }
            ] 
          },
          { 
            day: 'Friday', 
            focus: 'Serving Basics', 
            exercises: [
              { name: 'Toss Consistency', durationOrReps: '5 mins', note: 'Practice toss only, let it drop.' }, 
              { name: 'Wall Serving', durationOrReps: '30 reps', note: 'Focus on contacting ball with open hand.' },
              { name: 'Serve to Zones', durationOrReps: '20 made serves', note: 'Aim for specific court areas.' }
            ] 
          }
        ]
      },
      {
        weekNumber: 2,
        theme: 'Movement & Defense',
        objective: 'Improve agility and court coverage.',
        schedule: [
          { 
            day: 'Monday', 
            focus: 'Defensive Footwork', 
            exercises: [
              { name: 'Lateral Shuffles', durationOrReps: '4 x width of court', note: 'Stay low, don\'t cross feet.' }, 
              { name: 'Sprawl & Recover', durationOrReps: '3 x 10 reps', note: 'Simulate diving for a ball.' },
              { name: 'Run-throughs', durationOrReps: '20 reps', note: 'Sprint through the ball path.' }
            ] 
          },
          { 
            day: 'Wednesday', 
            focus: 'Approach Mechanics', 
            exercises: [
              { name: '3-Step Approach (Dry)', durationOrReps: '20 reps', note: 'Left-Right-Left (for righties).' }, 
              { name: 'Approach Jump Touch', durationOrReps: '10 reps', note: 'Touch basketball rim or net top.' },
              { name: 'Transition Footwork', durationOrReps: '15 mins', note: 'Move from net (block) to attack line.' }
            ] 
          },
          { 
            day: 'Friday', 
            focus: 'Serve Receive', 
            exercises: [
              { name: 'Pass & Move', durationOrReps: '15 mins', note: 'Pass then run to cover tip.' }, 
              { name: 'Deep Angle Passing', durationOrReps: '30 reps', note: 'Take ball outside body line.' }
            ] 
          }
        ]
      },
      {
        weekNumber: 3,
        theme: 'Power & Net Play',
        objective: 'Develop explosive hitting and blocking skills.',
        schedule: [
          { 
            day: 'Monday', 
            focus: 'Vertical Power', 
            exercises: [
              { name: 'Depth Jumps', durationOrReps: '3 x 6 reps', note: 'Drop from box and jump immediately.' }, 
              { name: 'Block Jumps', durationOrReps: '3 x 10 reps', note: 'Jump from standing, hands high.' },
              { name: 'Squat Jumps', durationOrReps: '3 x 12 reps', note: 'Explosive upward movement.' }
            ] 
          },
          { 
            day: 'Wednesday', 
            focus: 'Hitting Technique', 
            exercises: [
              { name: 'Wall Spikes', durationOrReps: '3 x 20 reps', note: 'Focus on wrist snap/top spin.' }, 
              { name: 'Self-Toss Hitting', durationOrReps: '4 x 15 reps', note: 'Hit against wall or over net.' },
              { name: 'Line Hitting', durationOrReps: '20 reps', note: 'Aim down the line.' }
            ] 
          },
          { 
            day: 'Friday', 
            focus: 'Blocking', 
            exercises: [
              { name: 'Footwork (Side/Crossover)', durationOrReps: '20 reps', note: 'Move along the net.' }, 
              { name: 'Joust Practice', durationOrReps: '10 mins', note: 'Push against partner at net (or wall).' }
            ] 
          }
        ]
      },
      {
        weekNumber: 4,
        theme: 'Game Simulation',
        objective: 'Apply skills in game-like situations.',
        schedule: [
          { 
            day: 'Monday', 
            focus: 'Conditioning', 
            exercises: [
              { name: 'Court Suicides', durationOrReps: '5 sets', note: 'Touch attack line, center, attack, far line.' }, 
              { name: 'Burpee Blocks', durationOrReps: '3 x 12 reps', note: 'Burpee then jump block.' }
            ] 
          },
          { 
            day: 'Wednesday', 
            focus: 'Complex Drills', 
            exercises: [
              { name: 'Dig-Set-Hit', durationOrReps: '15 mins', note: 'Chain movements together.' }, 
              { name: 'Free Ball Transition', durationOrReps: '20 mins', note: 'Receive easy ball, transition to attack.' }
            ] 
          },
          { 
            day: 'Friday', 
            focus: 'Match Play', 
            exercises: [
              { name: 'Pepper', durationOrReps: '10 mins', note: 'Warm up control.' }, 
              { name: 'Scrimmage (4v4 or 6v6)', durationOrReps: '3 sets', note: 'Play to 25 points.' }
            ] 
          }
        ]
      }
    ]
  },
  {
    id: 'cricket',
    name: 'Cricket (Bat & Ball)',
    category: 'Team',
    description: 'Bat-and-ball game played between two teams of eleven players.',
    icon: '🏏',
    rules: ['6 balls per over.', 'Batsman is out if bowled, caught, or LBW.', 'Runs scored by running between wickets.'],
    detailedRules: [
      {
        title: 'Ways to Get Out (Dismissals)',
        items: [
          'Bowled: The ball hits the stumps/bails directly.',
          'Caught: A fielder catches the ball on the full (before it bounces).',
          'LBW (Leg Before Wicket): The ball hits the leg in front of stumps, preventing it from hitting them.',
          'Run Out: A fielder breaks the wicket with the ball while a batsman is out of their crease.'
        ]
      },
      {
        title: 'Scoring Runs',
        items: [
          'Runs are scored by running between the wickets.',
          'Boundary (4 runs): Ball touches the ground then crosses the boundary rope.',
          'Six (6 runs): Ball crosses the boundary rope on the full.',
          'Extras: Runs awarded for Wides, No-balls, Byes, and Leg-byes.'
        ]
      },
      {
        title: 'Structure',
        items: [
          'An "Over" consists of 6 legal deliveries.',
          'Teams alternate between batting and fielding innings.',
          '11 players per team.'
        ]
      }
    ],
    skills: [
      { title: 'Batting Defense', desc: 'Protecting the wicket with straight bat.' },
      { title: 'Bowling Action', desc: 'Smooth run-up and straight arm release.' },
      { title: 'Fielding', desc: 'Catching and throwing accuracy.' }
    ],
    drills: [
      { title: 'Hanging Ball', reps: '10 mins', desc: 'Practice drives on a suspended ball.' },
      { title: 'Target Bowling', reps: '30 balls', desc: 'Bowl at a specific spot (marker) on pitch.' }
    ],
    warmups: ['Shoulder rotations', 'Side shuffles', 'High catches'],
    trainingProgram: [
      {
        weekNumber: 1,
        theme: 'Technique Refinement',
        objective: 'Solidify basic batting and bowling actions.',
        schedule: [
          { day: 'Mon', focus: 'Batting', exercises: [{ name: 'Shadow Drives (V)', durationOrReps: '50 reps' }, { name: 'Hanging Ball Drills', durationOrReps: '10 mins' }] },
          { day: 'Wed', focus: 'Bowling', exercises: [{ name: 'Stand and Deliver (No runup)', durationOrReps: '20 balls' }, { name: 'Full Runup Target Bowling', durationOrReps: '4 overs' }] },
          { day: 'Fri', focus: 'Fielding', exercises: [{ name: 'High Catches', durationOrReps: '20 catches' }, { name: 'Ground Fielding pick-ups', durationOrReps: '30 reps' }] }
        ]
      },
      {
        weekNumber: 2,
        theme: 'Game Scenarios',
        objective: 'Fitness and mental application.',
        schedule: [
          { day: 'Mon', focus: 'Running b/w Wickets', exercises: [{ name: 'Sprint 20m (turn & sprint)', durationOrReps: '10 reps' }] },
          { day: 'Wed', focus: 'Net Session', exercises: [{ name: 'Batting (Defensive)', durationOrReps: '15 mins' }, { name: 'Batting (Attacking)', durationOrReps: '15 mins' }] },
          { day: 'Sat', focus: 'Core Strength', exercises: [{ name: 'Planks', durationOrReps: '3 x 1 min' }, { name: 'Russian Twists', durationOrReps: '3 x 20' }] }
        ]
      },
      {
        weekNumber: 3,
        theme: 'Special Skills',
        objective: 'Spin bowling and Power hitting.',
        schedule: [
          { day: 'Mon', focus: 'Bowling Variations', exercises: [{ name: 'Spin/Swing practice', durationOrReps: '4 overs' }] },
          { day: 'Wed', focus: 'Power Hitting', exercises: [{ name: 'Lofted drives (Nets)', durationOrReps: '30 balls' }] },
          { day: 'Fri', focus: 'Close Catching', exercises: [{ name: 'Slip catching drill', durationOrReps: '15 mins' }] }
        ]
      },
      {
        weekNumber: 4,
        theme: 'Match Fitness',
        objective: 'Playing under fatigue.',
        schedule: [
          { day: 'Mon', focus: 'Cardio', exercises: [{ name: 'Shuttle Runs', durationOrReps: '5 sets' }] },
          { day: 'Wed', focus: 'Scenario', exercises: [{ name: 'Target Chase (Nets)', durationOrReps: 'Chase 40 runs in 5 overs' }] },
          { day: 'Sat', focus: 'Match', exercises: [{ name: 'Open Field Match', durationOrReps: '20 overs' }] }
        ]
      }
    ]
  }
];

export const MUSCLE_DATA: Record<string, MuscleInfo> = {
  pectoralis: {
    id: 'pectoralis',
    name: 'Pectoralis Major',
    function: 'Adducts and medially rotates the humerus (Pushing actions).',
    warmup: ['Arm crosses', 'Push-ups against wall'],
    strengthening: ['Push-ups', 'Bench Press', 'Chest Fly'],
    stretching: ['Doorway Stretch', 'Hands clasped behind back'],
    injuryRisk: 'Pec tears from excessive weight or poor bench press form.',
    recovery: 'Ice for acute pain, massage therapy for tightness.'
  },
  quadriceps: {
    id: 'quadriceps',
    name: 'Quadriceps Femoris',
    function: 'Extends the knee (Running, Jumping, Kicking).',
    warmup: ['Bodyweight Squats', 'Lunges'],
    strengthening: ['Squats', 'Leg Press', 'Step-ups'],
    stretching: ['Standing Quad Stretch', 'Kneeling Hip Flexor Stretch'],
    injuryRisk: 'Strains during sprinting or kicking; Knee tendonitis.',
    recovery: 'Foam rolling, RICE method for strains.'
  },
  biceps: {
    id: 'biceps',
    name: 'Biceps Brachii',
    function: 'Flexes elbow and supinates forearm (Pulling, Lifting).',
    warmup: ['Light curls', 'Arm circles'],
    strengthening: ['Dumbbell Curls', 'Chin-ups', 'Hammer Curls'],
    stretching: ['Wall Bicep Stretch', 'Arm extension behind back'],
    injuryRisk: 'Tendonitis at the shoulder or elbow attachment.',
    recovery: 'Rest from heavy pulling, gentle stretching.'
  },
  abs: {
    id: 'abs',
    name: 'Rectus Abdominis',
    function: 'Flexes the lumbar spine (Core stability).',
    warmup: ['Cat-Cow stretch', 'Bird-dog'],
    strengthening: ['Planks', 'Crunches', 'Leg Raises'],
    stretching: ['Cobra Stretch', 'Standing side bends'],
    injuryRisk: 'Lower back strain if core is weak.',
    recovery: 'Core stability work, avoid heavy spinal loading.'
  },
   lats: {
    id: 'lats',
    name: 'Latissimus Dorsi',
    function: 'Adducts, extends, and medially rotates humerus (Pulling down).',
    warmup: ['Arm swings', 'Light pulldowns'],
    strengthening: ['Pull-ups', 'Lat Pulldowns', 'Rows'],
    stretching: ['Child\'s Pose', 'Overhead side reach'],
    injuryRisk: 'Shoulder impingement if tight.',
    recovery: 'Foam roll the back, massage.'
  }
};

export const THEORY_TOPICS = [
  {
    title: 'Components of Fitness',
    content: 'The 5 major components are: Cardiovascular Endurance, Muscular Strength, Muscular Endurance, Flexibility, and Body Composition. A balanced athlete works on all five.'
  },
  {
    title: 'First Aid: R.I.C.E',
    content: 'For soft tissue injuries: Rest (stop activity), Ice (reduce swelling), Compression (wrap area), Elevation (keep above heart level).'
  },
  {
    title: 'Warm-up Principles',
    content: 'A good warm-up increases body temperature, heart rate, and blood flow. It should consist of a pulse raiser, mobility exercises, and sport-specific drills.'
  },
  {
    title: 'Hydration Strategy',
    content: 'Drink 500ml 2 hours before exercise. Drink 150-200ml every 20 minutes during exercise. Weigh yourself before and after; drink 1.5L for every kg lost.'
  }
];

export const DAILY_CHALLENGES: Challenge[] = [
  { id: '1', title: 'Morning Jog', description: 'Run for 20 minutes continuously.', target: 20, unit: 'mins', completed: false },
  { id: '2', title: 'Push-up Power', description: 'Complete 50 pushups throughout the day.', target: 50, unit: 'reps', completed: false },
  { id: '3', title: 'Hydration Hero', description: 'Drink 3 liters of water.', target: 3, unit: 'Liters', completed: false }
];
