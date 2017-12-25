GB3 = {
    sortBy: function(key, dir) {
        dir = (dir == "asc" ? 1 : -1)
        if (key=="e") {
            this.Abilities.sort(function(a, b){
                return dir * this.abilityCompare(a, b)
            }.bind(this));
        }
        else {
            this.Abilities.sort(function(a, b) {
                return dir * a[key].localeCompare(b[key])
            });
        }
    },
    abilityCompare: function(a, b) {
        var e = a.e.localeCompare(b.e)
        if (e != 0) return -e
        if (a.t=="special" && b.t=="special") return parseInt(a.v) - parseInt(b.v)
        if (a.t=="special") return 1
        if (b.t=="special") return -1
         return parseInt(a.v) - parseInt(b.v)
    }
}
GB3.Abilities = [
{l:"8 (Hachi)", e:"Reaction Speed", v:"+2.5%", t:"regular", s:["Astray Red Frame Body"]},
{l:"Active Binder", e:"Boost Speed", v:"+3%", t:"regular"},
{l:"AGE System", e:"Awakening Duration", v:"+2s", t:"special", s:["Gundam AGE-1 Body", "Gundam AGE-2 Normal Body", "Gundam AGE-3 Normal Body", "Gundam AGE-FX Body", "Gundam AGE-2 Dark Hound Body"]},
{l:"Ahab Reactor", e:"Thruster Capacity", v:"+5000", t:"regular"},
{l:"Alaya-Vijnana System", e:"Reaction Speed", v:"+5%", t:"special"},
{l:"Anti-Beam Coating", e:"Beam Resistance", v:"+10%", t:"regular"},
{l:"Apogee Motor", e:"Movement Speed", v:"+5%", t:"regular"},
{l:"Armed Armor XC", e:"Reaction Speed", v:"+4.5%", t:"regular"},
{l:"Assault Shroud", e:"Durability", v:"+10%", t:"regular", s:["Duel Gundam Assault Shroud"]},
{l:"Astray Special Frame", e:"Reaction Speed", v:"+3%", t:"regular"},
{l:"Atmospheric Thermonuclear Jet Engine", e:"Boost Speed", v:"+6%", t:"regular"},
{l:"Autonomous Dual Column Processing AI", e:"Reaction Speed", v:"+2%", t:"regular"},
{l:"Beam Jytte", e:"Beam Guard", v:"+8%", t:"regular"},
{l:"Beam resistance coating (Shield)", e:"Beam Guard", v:"+8%", t:"regular"},
{l:"Beam resistant coating", e:"Beam Guard", v:"+8%", t:"regular"},
{l:"Beam Shield (Anti-Beam)", e:"Beam Guard", v:"+10%", t:"special"},
{l:"Beam Shield (Anti-Physical)", e:"Physical Guard", v:"+10%", t:"special"},
{l:"Bio-sensor", e:"Reaction Speed", v:"+5%", t:"special", s:["Z Gundam Body", "ZZ Gundam Body"]},
{l:"Biocomputer", e:"Reaction Speed", v:"+5%", t:"special", s:["Crossbone Gundam X1 Body"]},
{l:"Bipod", e:"Ranged Weapon Burst Ability", v:"+30%", t:"special", s:["Ez8 Shield", "GN Sniper Rifle"]},
{l:"Blade Antenna", e:"Awakening Duration", v:"+1s", t:"regular"},
{l:"Booster Binder", e:"Boost Speed", v:"+3%", t:"regular"},
{l:"Chobham Armor Construction", e:"Physical Guard", v:"+10%", t:"special"},
{l:"Clavicle Antenna", e:"Durability", v:"+5%", t:"regular", s:["Gundam Exia Body"]},
{l:"Colloid particle machine control", e:"Movement Speed", v:"+8%", t:"regular"},
{l:"Combat Support AI", e:"Reaction Speed", v:"+2%", t:"regular"},
{l:"DG Cells", e:"Auto-Repair", v:"+1000/s", t:"regular", s:["Master Gundam"]},
{l:"DHGCP", e:"Thruster Capacity", v:"+5000", t:"special"},
{l:"Double Pack", e:"Ranged Weapon Gauge Capacity", v:"+30%", t:"special", s:["TR-1 Advanced Hazel"]},
{l:"Drum Frame", e:"Durability", v:"+15%", t:"special"},
{l:"E Carbon (GN particle coating)", e:"Durability", v:"+20%", t:"special", s:["00 Series"]},
{l:"Energy Pack", e:"Ranged Weapon Gauge Capacity", v:"+20%", t:"regular", s:["Full Armor Gundam Backpack"]},
{l:"Energy Pod", e:"Option Gauge Capacity", v:"+20%", t:"regular", s:["Gundam X"]},
{l:"Energy Supply System", e:"Ranged Weapon Charge Speed", v:"+20%", t:"special", s:["Lightning Gundam Arms"]},
{l:"Epyon Wing", e:"Boost Speed", v:"+8%", t:"regular"},
{l:"Eyepatch-Sight Visor", e:"Shooting Mode Damage", v:"+30%", t:"regular", s:["AGE-2 Dark Hound"]},
{l:"Fighting Sight", e:"Enemy Flinching Rate", v:"+50%", t:"special"},
{l:"First-Generation Movable Frame", e:"Durability", v:"+5%", t:"regular", s:["Rick Dias"]},
{l:"Flash System", e:"Reaction Speed", v:"+3%", t:"regular"},
{l:"Flexible Thruster Binder", e:"Boost Speed", v:"+6%", t:"regular"},
{l:"Flexible Thruster", e:"Boost Speed", v:"+7%", t:"regular"},
{l:"Fluid Pulse Accelerator", e:"Movement Speed", v:"+7%", t:"regular"},
{l:"FRP Unit", e:"Movement Speed", v:"+10%", t:"special"},
{l:"Full Psycho Frame", e:"Reaction Speed", v:"+5%", t:"special"},
{l:"Genso-nickel plating", e:"Durability", v:"+20%", t:"special", s:["Musha Gundam"]},
{l:"GN Drive", e:"Trance Duration", v:"+10s", t:"special"},
{l:"Gundam Frame", e:"Durability", v:"+15%", t:"regular"},
{l:"Gunport", e:"Ranged Weapon Burst Ability", v:"+20%", t:"regular", s:["Freedom Shield", "Justice Shield"]},
{l:"Haro", e:"Reaction Speed", v:"+2.5%", t:"regular"},
{l:"Heat Blade", e:"Physical Guard", v:"+1%", t:"regular"},
{l:"Heat-Radiating Fin", e:"Trance Duration", v:"+5s", t:"regular"},
{l:"High Output Hover Unit", e:"Movement Speed", v:"+10%", t:"special"},
{l:"High Output Movable Thruster", e:"Boost Speed", v:"+8%", t:"regular"},
{l:"High-Mobility Plate", e:"Boost Speed", v:"+3%", t:"regular"},
{l:"High-Performance Control Computer", e:"Option Charge Speed", v:"+15%", t:"regular", s:["S Gundam", "Ex-S Gundam Body"]},
{l:"High-Performance Optical Sensor Unit", e:"Shooting Mode Damage", v:"+50%", t:"special", s:["TR-1 Advanced Hazel Head"]},
{l:"High-Power Generator", e:"Boost Recovery", v:"+15%", t:"special"},
{l:"High-Precision Gun Camera", e:"Shooting Mode Damage", v:"+50%", t:"special", s:["Cherudim Gundam Head"]},
{l:"High-Sensitivity Sensor", e:"Ranged Weapon Tracking Ability", v:"+25%", t:"special", s:["Gundam Gusion Rebake Head"]},
{l:"High-Thrust Booster Unit", e:"Boost Speed", v:"+6%", t:"regular"},
{l:"Horns of the Buffalo", e:"Awakening Duration", v:"+1.5s", t:"regular"},
{l:"HPHGCP Generator", e:"Thruster Capacity", v:"+5000", t:"special"},
{l:"Hrududu", e:"Thruster Capacity", v:"+4000", t:"regular"},
{l:"Hyper Boost", e:"Boost Speed", v:"+10%", t:"special"},
{l:"Hyper Deuterion Engine", e:"Option Charge Speed", v:"+20%", t:"special", s:["Legend Gundam", "Destiny Gundam Body"]},
{l:"I Field Beam Drive", e:"Movement Speed", v:"+10%", t:"special"},
{l:"IFS Unit", e:"Option Equipment DPS", v:"+7500", t:"special"},
{l:"Indirect Sealing", e:"Parts-Out Resistance", v:"+25%", t:"special", s:["Full Armor Gundam Head", "Psycho Zaku Legs/Arms"]},
{l:"Intention Automatic System", e:"Reaction Speed", v:"+5%", t:"special"},
{l:"Invisible Titanium", e:"Durability", v:"+20%", t:"special", s:["G-Self parts"]},
{l:"Laminate Armor", e:"Beam Guard", v:"+10%", t:"special"},
{l:"Large Anti-Beam Armor", e:"Beam Guard", v:"+8%", t:"regular"},
{l:"Large Resistance Physical Armor", e:"Physical Guard", v:"+8%", t:"regular"},
{l:"Magnet Coating", e:"Reaction Speed", v:"+3%", t:"regular"},
{l:"Maneuvering Support AI", e:"Reaction Speed", v:"+2%", t:"regular"},
{l:"Medium Resistance Physical Armor", e:"Physical Guard", v:"+5%", t:"regular"},
{l:"Medium-Sized Anti-Beam Armor", e:"Beam Guard", v:"+5%", t:"regular"},
{l:"MFE-type Gundium FGI Composite Armor", e:"Durability", v:"+20%", t:"special", s:["SUMO Body"]},
{l:"Minovsky Drive", e:"Boost Speed", v:"+10%", t:"special"},
{l:"Minovsky Flight", e:"Boost Speed", v:"+5%", t:"regular"},
{l:"Movable Booster Pod + Shield Booster", e:"Boost Speed", v:"+6%", t:"regular"},
{l:"Movable Frame", e:"Durability", v:"+10%", t:"regular", s:["Ex-S Gundam Arms/Legs", "S Gundam Arms/Legs", "Z Gundam Arms/Legs", "ZZ Gundam Arms/Legs"]},
{l:"Movable Shield", e:"Boost Speed", v:"+3%", t:"regular"},
{l:"Multiple Construction Armor (MCA)", e:"Durability", v:"+15%", t:"regular", s:["Crossbone Gundam Body"]},
{l:"Multi-purpose Sensor Unit", e:"Increase in EX Gauge when Attack hits", v:"+20%", t:"special", s:["Aegis Gundam Head"]},
{l:"Nanolaminate Armor", e:"Physical Resistance", v:"+15%", t:"regular"},
{l:"Nanoskin", e:"Auto-Repair", v:"+2000/s", t:"special", s:["Turn A Body/Legs", "Turn X Body/Legs"]},
{l:"New Model Generator", e:"Boost Recovery", v:"+25%", t:"special"},
{l:"Nuclear engine", e:"Thruster Capacity", v:"+3500", t:"regular"},
{l:"Nuclear Fission Reactor", e:"Thruster Capacity", v:"+4000", t:"regular"},
{l:"Pair Beam Coating", e:"Beam Guard", v:"+6%", t:"regular"},
{l:"Phase Shift Armor", e:"Physical Resistance", v:"+15%", t:"regular"},
{l:"Photon Battery", e:"Thruster Capacity", v:"+5000", t:"regular"},
{l:"Photon Balancer", e:"Cancel Combo Damage", v:"+10%", t:"special"},
{l:"Plasma compression reactor", e:"Thruster Capacity", v:"+4500", t:"special"},
{l:"Plavsky Particle Control", e:"Movement Speed", v:"+8%", t:"regular"},
{l:"Power Extender", e:"Option Gauge Capacity", v:"+30%", t:"special", s:["Strike Noir Gundam"]},
{l:"Propellant Tank", e:"Thruster Capacity", v:"+3000", t:"regular"},
{l:"Propellant", e:"Thruster Capacity", v:"+2000", t:"regular"},
{l:"PS Special Frame", e:"Reaction Speed", v:"+4%", t:"regular"},
{l:"Pseudo Solar reactor", e:"Trance Duration", v:"+5s", t:"regular"},
{l:"Psycho-frame", e:"Reaction Speed", v:"+4.5%", t:"regular"},
{l:"Psycommu", e:"Reaction Speed", v:"+4%", t:"regular"},
{l:"Quantum Brainwave Control System", e:"Reaction Speed", v:"+4.5%", t:"regular"},
{l:"Quasi-psycommu", e:"Reaction Speed", v:"+3.5%", t:"regular"},
{l:"Radiator Plate", e:"Boost Speed", v:"+3%", t:"regular"},
{l:"Reactive Armor", e:"Physical Resistance", v:"+10%", t:"regular"},
{l:"Reuse Psycho Device", e:"Reaction Speed", v:"+5%", t:"special"},
{l:"Rib Jammer", e:"Camouflage Duration", v:"+15s", t:"special"},
{l:"Rocket Booster", e:"Boost Speed", v:"+6%", t:"regular"},
{l:"Rod Antenna", e:"Awakening Duration", v:"+1s", t:"regular"},
{l:"Saturn Engine", e:"Boost Speed", v:"+8%", t:"regular"},
{l:"Scanning Turret", e:"Parts-Out Rate", v:"+2%", t:"special", s:["Mobile SUMO"]},
{l:"Self-repairing Micromachinery Technology", e:"Auto-Repair", v:"+1500/s", t:"regular", s:["Stargazer Backpack"]},
{l:"Shield Booster", e:"Boost Speed", v:"+6%", t:"regular"},
{l:"Spike Armor", e:"Parts-Out Rate", v:"+1%", t:"special"},
{l:"Striking Spike", e:"Parts-Out Rate", v:"+1%", t:"regular"},
{l:"Sturm booster", e:"Boost Speed", v:"+6%", t:"regular"},
{l:"Subcontrol System", e:"Reaction Speed", v:"+1%", t:"regular"},
{l:"Super DRAGOON mobile weapon wing", e:"Boost Speed", v:"+10%", t:"special"},
{l:"Super Heavy Armor", e:"Knockback resistance", v:"+200%", t:"special"},
{l:"Super Vernier", e:"Boost Speed", v:"+8%", t:"regular"},
{l:"Tail Binder", e:"Boost Speed", v:"+6%", t:"regular"},
{l:"Taurus-Type Movable Thruster", e:"Boost Speed", v:"+5%", t:"regular"},
{l:"Thermonuclear Hover Engine", e:"Movement Speed", v:"+8%", t:"regular"},
{l:"Thruster Vane", e:"Boost Speed", v:"+5%", t:"regular"},
{l:"Trans-Phase armor", e:"Physical Resistance", v:"+18%", t:"regular"},
{l:"Twin Drive System", e:"Trance Duration", v:"+15s", t:"special", s:["00 Raiser Backpack"]},
{l:"UE Special Armor", e:"Durability", v:"+15%", t:"regular", s:["Gafran Body"]},
{l:"Universal Boost Pod", e:"Boost Speed", v:"+10%", t:"special"},
{l:"Variable Phase Shift Armor", e:"Physical Resistance", v:"+20%", t:"special"},
{l:"Vernier Binder", e:"Boost Speed", v:"+5%", t:"regular"},
{l:"VL Diversion Wing Unit", e:"Boost Speed", v:"+10%", t:"special"},
{l:"VPS Special Frame", e:"Reaction Speed", v:"+5%", t:"special"},
{l:"Wing Binder (Freedom)", e:"Boost Speed", v:"+3%", t:"regular"},
{l:"Wing Binder", e:"Boost Speed", v:"+8%", t:"regular"},
{l:"Wing shield", e:"Physical Resistance", v:"+10%", t:"regular"},
{l:"Wing Thruster (Feather Wings)", e:"Boost Speed", v:"+8%", t:"regular"},
{l:"Wing Thruster", e:"Boost Speed", v:"+8%", t:"regular"},
{l:"Wing Unit", e:"Boost Speed", v:"+7%", t:"regular"},
{l:"Yata-no-Kagami", e:"Beam Resistance", v:"+20%", t:"special"},
{l:"Zero Frame", e:"Durability", v:"+20%", t:"special", s:["Wing Proto Zero", "Wing Zero Custom"]},
{l:"ZERO System Copy", e:"Awakening Duration", v:"+1.5s", t:"regular"}
]
