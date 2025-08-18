import { Injectable, signal } from '@angular/core';
import { Offer } from './offer.model';

@Injectable({ providedIn: 'root' })
export class OffersService {
    private _offers = signal<Offer[]>([
        {
            id: 1,
            title: 'AeroView Pro: 4K',
            highlights: `4K Camera, 40 min flight, GPS, Auto-follow, Obstacle Avoidance`,
            description: `The AeroView Pro Drone is designed for aerial photography, surveying, and exploration. Equipped with an ultra-high resolution 4K camera, this drone captures breathtaking images and smooth videos from above. Its advanced GPS stabilization ensures precise flight control, making it ideal for both beginners and professionals. With a remarkable flight time of up to 40 minutes and a 2km range, explore or monitor large areas easily. Features intelligent flight modes—auto-follow, waypoint navigation, orbit, and one-tap return. Obstacle avoidance sensors, a foldable design, and a robust carrying case provide reliability and portability. Includes controller, spare propellers, battery, charging dock, manual. For hobbyists and pros seeking stability, quality, and intuitive controls.`,
            votes: 5,
            stock: 300,
            price: 100,
            image: 'assets/drone1.jpg'
        },
        {
            id: 2,
            title: 'SkyScout Mini: HD',
            highlights: `1080p Camera, 18 min flight, One-key takeoff/landing, Cool stunts`,
            description: `The SkyScout Mini Drone delivers performance and portability for indoor and outdoor fun. Its 1080p HD camera streams crisp video, while the agile maneuverability makes it perfect for beginners and kids. Enjoy up to 18 minutes of flight with one battery, one-key takeoff/landing, and easy controls. Cool stunts like flips and barrel rolls make every session exciting. Lightweight design fits in your palm and travels easily. Kit includes controller, two rechargeable batteries, four spare propellers, USB charger, and quick-start guide.`,
            votes: 3,
            stock: 0,
            price: 50,
            image: 'https://images.pexels.com/photos/724921/pexels-photo-724921.jpeg?cs=srgb&dl=pexels-pok-rie-33563-724921.jpg&fm=jpg'
        },
        {
            id: 3,
            title: 'SurveyPlus X8',
            highlights: `Thermal & RGB Camera, 55 min flight, Autonomous waypoints, Geofencing`,
            description: `Engineered for professional surveying and mapping, the SurveyPlus X8 features a state-of-the-art thermal and RGB dual camera. Conduct inspections, agriculture analysis, or search and rescue with pinpoint accuracy. Autonomous waypoint navigation, geofencing, and advanced safety systems minimize manual effort and risk. Enjoy a 55-minute flight time and a transmission range up to 5km for large-scale missions. Package includes flight planning software, ruggedized controller, extra batteries, propellers, hard-shell case, and detailed technical documentation.`,
            votes: 7,
            stock: 11,
            price: 75,
            image: 'https://st2.depositphotos.com/4995823/11017/i/450/depositphotos_110178992-stock-photo-drone-with-high-resolution-digital.jpg'
        },
        {
            id: 4,
            title: 'FPV Racer R5',
            highlights: `720p Camera, 10 min flight, Ultra-light frame, Tuneable motors`,
            description: ` Dive into first-person racing with the FPV Racer R5—a drone built for speed, agility, and competitive edge. 720p live stream camera delivers low-latency video straight to your goggles for immersive flight. Ultra-light carbon fiber frame enables rapid acceleration and tight turns. Tuneable motors and easy-access mount points for upgrades and repairs. Perfect for drone racing leagues and freestyle acrobatics. Box includes FPV goggles, controller, two batteries, spares, adjustment tools, and racer guide.`,
            votes: 2,
            stock: 9,
            price: 60,
            image: 'https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJvbmVzfGVufDB8fDB8fHww'
        },
        {
            id: 5,
            title: 'Atari X Drone',
            highlights: `Retro design, HD Camera, 20 min flight, Beginner-friendly`,
            description: ` The Atari X Drone blends classic style with cutting-edge flight technology. Its unique retro look sets it apart, while a built-in HD camera captures clear aerial footage. With a flight time of 20 minutes, intuitive controls, and light build, this drone is perfect for beginners seeking style and reliability. Includes controller, battery, USB charger, and setup guide.`,
            votes: 1,
            stock: 5,
            price: 40,
            image: 'https://t3.ftcdn.net/jpg/01/85/89/86/360_F_185898613_eWuLBxLdLlKxI7LLFRRdTjkGCtOWc9i6.jpg'
        },
        {
            id: 6,
            title: 'Longboard Drone',
            highlights: `4K Camera, 30 min flight, Brushless motors, GPS auto return`,
            description: ` Cruise the air with the Longboard Drone, designed for smooth footage even in windy conditions. Features 4K camera, brushless motors, and GPS auto return for safe flights up to 30 minutes. Features a 4K camera, brushless motors, and GPS auto return for safe flights up to 30 minutes. Ideal for creators and explorers wanting silky video and easy flying. Includes controller, propellers, battery, and quick-travel bag. Pack includes controller, propellers, battery set, and quick-travel bag.`,
            votes: 4,
            stock: 30,
            price: 80,
            image: 'https://media.istockphoto.com/id/1394934572/photo/dji-mavic-3-drone-flying-in-the-air.jpg?s=612x612&w=0&k=20&c=eFrHsvZNFmfgIlADG-lFUjkcPAAVics5CQ5eHgrlaf4='
        },
        {
            id: 7,
            title: 'Super Turbo Drone',
            highlights: `HD FPV Camera, 25 min flight, Racing mode, Stunt-ready`,
            description: ` The Super Turbo Drone is made for racing enthusiasts and acrobatic pilots. Ultra-responsive controls, reinforced frame, and high-speed motors let you excel on the course or in freestyle tricks. HD FPV camera ensures you see every move live. Kit includes racer remote, 3 batteries, spare blades, and tuning tools. Perfect for racing leagues and stunt competitions. Includes racer remote, 3 batteries, spare blades, and tuning tools.`,
            votes: 6,
            stock: 40,
            price: 90,
            image: 'https://thumbs.dreamstime.com/b/camera-drone-big-professional-mid-air-81438439.jpg'
        },
        {
            id: 8,
            title: 'High Flyer Drone',
            highlights: `4K Camera, 35 min flight, GPS-assisted flight modes, Obstacle alert`,
            description: ` For aerial photographers and explorers, the High Flyer Drone offers 35-minute flights, advanced stabilization, and a 4K camera for spectacular landscapes. GPS-assisted flight modes, one-tap return, and obstacle alert make it safe and easy to use. Package comes with controller, battery, propeller set, and spacious carry case. Perfect for capturing stunning vistas and documenting adventures.`,
            votes: 5,
            stock: 10,
            price: 120,
            image: 'https://cdn.pixabay.com/photo/2018/03/04/15/33/drone-3198324_640.jpg',
        },
    ]);


    offers = this._offers;
    get offersSortedByVotes() {
        return this._offers().slice().sort((a, b) => b.votes - a.votes);
    }

    getOfferById(id: number): Offer | undefined {
        const offer = this._offers().find(o => o.id === id);
        return offer;
    }

    getCurrentUserId(): string | null {
        return localStorage.getItem('userId');
    }

    private processVote(offerId: number, newVote: 'upvote' | 'downvote', voteValueChangeIfSwitch: number, voteValueChangeIfNew: number) {
        const userId = this.getCurrentUserId();
        if (!userId) {
            alert('Please login first!');
            return;
        }

        const voteKey = `vote-${userId}-${offerId}`;
        const currentVote = this.getUserVote(offerId);

        if (currentVote === newVote) {
            // User already voted the same way, do nothing or add toggle logic here if needed
            return;
        }

        if (currentVote && currentVote !== newVote) {
            this._offers.update(list =>
                list.map(o =>
                    o.id === offerId ? { ...o, votes: o.votes + voteValueChangeIfSwitch } : o
                )
            );
        } else {
            // New vote
            this._offers.update(list =>
                list.map(o =>
                    o.id === offerId ? { ...o, votes: o.votes + voteValueChangeIfNew } : o
                )
            );
        }

        localStorage.setItem(voteKey, newVote);
    }

    upvote(offerId: number) {
        this.processVote(offerId, 'upvote', 2, 1);
    }

    downvote(offerId: number) {
        this.processVote(offerId, 'downvote', -2, -1);
    }

    buy(id: number) {
        const userId = this.getCurrentUserId();
        if (!userId) {
            alert('Please login first!');
            return;
        }
        this._offers.update(list =>
            list.map(o =>
                o.id === id ? { ...o, isBought: true } : o
            )
        );

        // Save bought IDs in localStorage, keeping existing ones
        const key = 'bought-offers';
        const boughtIdsJson = localStorage.getItem(key);
        const boughtIds: number[] = boughtIdsJson ? JSON.parse(boughtIdsJson) : [];

        if (!boughtIds.includes(id)) {
            boughtIds.push(id);
            localStorage.setItem(key, JSON.stringify(boughtIds));
        }
    }


    getUserVote(offerId: number): 'upvote' | 'downvote' | null {
        const userId = this.getCurrentUserId();
        if (!userId) return null;
        return localStorage.getItem(`vote-${userId}-${offerId}`) as ('upvote' | 'downvote' | null);
    }

}
