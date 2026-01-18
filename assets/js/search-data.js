// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-portfolio",
          title: "portfolio",
          description: "Science communication and illustration",
          section: "Navigation",
          handler: () => {
            window.location.href = "/portfolio/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-git",
          title: "git",
          description: "Not a coder (but working on it)",
          section: "Navigation",
          handler: () => {
            window.location.href = "/GitHub/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "more to come :)",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Hi there!  I&#39;m a PhD researcher in ecological genetics, using genetic data to answer ecological questions. My thesis project looks at K&#39;gari&#39;s peatland ecosystems, using eDNA metabarcoding, population genetics, and transcriptomics to document their invertebrate assemblages. I genuinely enjoy the challenge of distilling complex information and have exhibitions and awards in both visual and verbal communication. I tutor at the University of the Sunshine Coast in climate change, environmental economics, invertebrate biology, and evolution, and am involved in several science outreach and education programs for school, university, and community groups. I&#39;m interested in the overlap between science, education, and communication.    Teaching Philosophy   Education should be accessible and engaging to people of all backgrounds. I focus on a down-to-earth, student-driven approach, fostering a space where students feel safe to engage, ask questions, and build confidence.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-mt-ballow",
        
          title: "Mt Ballow",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/ballow/";
          
        },
      },{id: "post-wild-south-coast-way",
        
          title: "Wild South Coast Way",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/wild-south-coast/";
          
        },
      },{id: "post-cooloola-great-walk",
        
          title: "Cooloola Great Walk",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/cooloola/";
          
        },
      },{id: "post-conondale-great-walk",
        
          title: "Conondale Great Walk",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/conondale/";
          
        },
      },{id: "post-carnarvon-gorge",
        
          title: "Carnarvon Gorge",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/carnarvon/";
          
        },
      },{id: "post-kosciuszko",
        
          title: "Kosciuszko",
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/kosci/";
          
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
