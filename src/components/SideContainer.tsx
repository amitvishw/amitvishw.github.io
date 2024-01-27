import DownloadIcon from "../Icons/Download";
import EmailIcon from "../Icons/Email";
import GithubIcon from "../Icons/Github";
import HackerRankIcon from "../Icons/HackerRank";
import LinkedinIcon from "../Icons/Linkedin";
import LocationIcon from "../Icons/Location";
import PhoneIcon from "../Icons/Phone";

const profileImageUrl = new URL(
  "../assets/amit-vishwakarma-profile-picture.jpg",
  import.meta.url,
).href;

const resumeUrl = new URL("../assets/amit_vishwakarma.pdf", import.meta.url)
  .href;

const profiles = [
  {
    website: "Linkedin",
    url: "https://www.linkedin.com/in/amitvishw",
    icon: <LinkedinIcon />,
  },
  {
    website: "Github",
    url: "https://github.com/amitvishw",
    icon: <GithubIcon />,
  },
  {
    website: "HackerRank",
    url: "https://www.hackerrank.com/profile/amitvishw",
    icon: <HackerRankIcon />,
  },
];

const SideContainer = () => {
  return (
    <div className="flex flex-col items-center">
      <div>
        <img
          className="w-60 h-60 rounded-lg"
          src={profileImageUrl}
          alt="Amit Vishwakarma MERN Stack Developer"
        />
      </div>
      <div>
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-slate-100 p-2">
            Amit Vishwakarma
          </h1>
          <h3 className="text-lg font-semibold inline-block text-slate-400 px-4 py-2 bg-slate-900 rounded-lg">
            MERN Stack Developer
          </h3>
        </div>
        <div className="flex justify-center gap-2 py-4 text-slate-400">
          {profiles.map((profile) => (
            <div className="p-4 bg-slate-900 rounded-lg">
              <div className="w-6 h-6">
                <a
                  className="hover:text-primary duration-200"
                  href={profile.url}
                  target="_blank"
                >
                  {profile.icon}
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-slate-900 p-4 rounded-lg space-y-4 text-slate-400">
          <div className="flex gap-4 items-center">
            <div className="w-10 h-10 p-2 bg-slate-950 rounded-lg">
              <PhoneIcon />
            </div>
            <div>
              <div>Phone</div>
              <div className="text-slate-100">+91 9179550580</div>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <div className="w-10 h-10 p-2 bg-slate-950 rounded-lg">
              <EmailIcon />
            </div>
            <div>
              <div>Email</div>
              <div>
                <a
                  className="text-slate-100 hover:text-primary duration-200"
                  href="mailto:amit.excellence@gmail.com"
                >
                  amit.excellence@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <div className="w-10 h-10 p-2 bg-slate-950 rounded-lg">
              <LocationIcon />
            </div>
            <div>
              <div>Location</div>
              <div className="text-slate-100">Bhopal, MP</div>
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-8 text-primary text-lg font-semibold">
          <a download href={resumeUrl}>
            <div className="flex gap-2 px-6 py-2 bg-slate-900 hover:bg-primary hover:text-slate-100 duration-200 rounded-lg">
              <div className="w-6 h-6">
                <DownloadIcon />
              </div>
              <div>
                <span>Download CV</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideContainer;
