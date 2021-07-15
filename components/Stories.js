import StoryCard from "../components/StoryCard"
const stories = [
    {
      name: "Nathan Ramsdell",
      src: "https://links.papareact.com/4u4",
        profile: "https://links.papareact.com/zvy",
    },
    {
        name: "Olivia Nortwen",
        src: "https://links.papareact.com/4zn",
        profile: "https://links.papareact.com/kxk",
        },
      {
        name: "Brendan O'Brien",
        src: "https://links.papareact.com/k2j",
        profile: "https://links.papareact.com/f0p",
        },
      {
        name: "Hershey Ramsdell",
        src: "https://links.papareact.com/4u4",
        profile: "https://links.papareact.com/zvy",
        },
        {
          name: "Olivia Nortwen",
          src: "https://links.papareact.com/4zn",
          profile: "https://links.papareact.com/kxk",
          },
];


function Stories() {
    return (
        <div className="flex justify-center space-x-3 mx-auto">
        {stories.map((story) => (
            <StoryCard key={story.src} name={story.name} src={story.src} profile={story.profile}
            />
        ))}
            
        </div>
    );
}

export default Stories
