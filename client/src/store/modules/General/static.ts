/**
 * Front page links
 */
export const frontPageLinks = [
  {
    id: 'where',
    icon: 'fas fa-globe-americas',
  },
  {
    id: 'when',
    icon: 'fas fa-chart-line',
  },
  {
    id: 'what',
    icon: 'fas fa-bars',
  }
];

/**
 * Main nav
 */
export const mainNavigation = [
  {
    path: '/search',
    name: 'Catalogue',
    icon: 'search',
    color: 'yellow',
    border: 'border-yellow',
    bg: 'bg-yellow-20',
    hover: 'hover:bg-yellow-20',
  },
  {
    path: '/browse',
    name: 'Browse',
    icon: 'globe-americas',
    color: 'red',
    border: 'border-red',
    bg: 'bg-red-20',
    hover: 'hover:bg-red-20',
    groupHover: 'group-hover:bg-red-20',
    subMenu: [
      {
        path: '/browse/where',
        name: 'Where',
        icon: 'globe-americas',
        color: 'red',
        border: 'border-red',
        bg: 'bg-red-20',
        hover: 'hover:bg-red-20',
      },
      {
        path: '/browse/when',
        name: 'When',
        icon: 'chart-line',
        color: 'red',
        border: 'border-red',
        bg: 'bg-red-20',
        hover: 'hover:bg-red-20',
      },
      {
        path: '/browse/what',
        name: 'What',
        icon: 'bars',
        color: 'red',
        border: 'border-red',
        bg: 'bg-red-20',
        hover: 'hover:bg-red-20',
      },
    ],
  },
  /*{
    path: '/services',
    name: 'Services',
    icon: 'cog',
    color: 'green',
    border: 'border-green',
    bg: 'bg-green-20',
    hover: 'hover:bg-green-20',
  },*/
  {
    path: '/about',
    name: 'About',
    icon: 'question',
    color: 'blue',
    border: 'border-blue',
    bg: 'bg-blue-20',
    hover: 'hover:bg-blue-20',
  },
];

/**
 * Front page images & texts
 */

export const frontPageImageTexts: any = {
  1: {
    title: 'Mary Rose Museum',
    text: 'Visitors viewing the Mary Rose and related displays at the Mary Rose Museum, Portsmouth. Data copyright © Hufton + Crow'
  },
  2: {
    title: 'CITiZAN project',
    text: 'Foreshore site survey being undertaken by the CITiZAN project. Data copyright © MOLA'
  },
  3: {
    title: 'The Cattewater Wreck',
    text: 'The Cattewater Wreck was discovered in 1973 during channel dredging in the Cattewater, Plymouth, Devon. The site was the first wreck to be designated by the UK Government under the 1973 Protection of Wreck Act and is believed to be an unidentified armed merchantman of the first half of the 16th century. https://doi.org/10.5284/1024721'
  },
  4: {
    title: 'Royal Anne Galley',
    text: 'Sea conditions in survey area from the Royal Anne Galley Marine Environmental Assessment,wrecked off the Lizard in 1721 while on voyage to the Barbados. The wreck site was rediscovered in 1991 by local diver Robert Sherratt. Subsequently numerous objects were recovered from the seabed, including items of cutlery bearing the Belhaven crest, which led to the identification of the wreck. https://doi.org/10.5284/1000387 Data copyright © Cornwall Council'
  },
  5: {
    title: 'Newport Medieval Ship',
    text: 'General shot from the excavation of the Newport Medieval Ship. The Newport Ship is the most substantial late medieval vessel excavated and recovered in Britain. The ship was discovered during development on the west bank of the River Usk in Newport, South Wales in 2002. More than twenty-three metres of the clinker-built ship were recovered, along with significant artefact and environmental assemblages. https://doi.org/10.5284/1044659 Data copyright © Newport Museums'
  },
  6: {
    title: 'VENUS project',
    text: 'Image resulting from the survey carried out by the Remora 200 submarine on October 11 2008 as part of the VENUS project.  https://doi.org/10.5284/1000004. Data copyright © VENUS: Virtual ExploratioN of Underwater Site'
  },
  7: {
    title: 'Isles of Scilly Designated Wrecks',
    text: 'Anchor and diver from the Isles of Scilly Designated Wrecks project This project concerned five wreck sites situated in the Isles of Scilly: Tearing Ledge, HMS Association, Bartholomew Ledges, HMS Colossus and the Wheel Wreck. The project collected high resolution multi-beam data for each of the five sites and created web-based virtual site tours. https://doi.org/10.5284/1051619 Data copyright © Kevin Camidge'
  },
  8: {
    title: 'Isles of Scilly Designated Wrecks',
    text: 'Side view of sheave wheels showing rims with diver in background from the Isles of Scilly Designated Wrecks project. The project investigated five designated wreck sites situated in the Isles of Scilly: Tearing Ledge, HMS Association, Bartholomew Ledges, HMS Colossus and the Wheel Wreck.  https://doi.org/10.5284/1051619 Data copyright © Kevin Camidge'
  },
  9: {
    title: 'Flamborough Head Lighthouse',
    text: 'General view of Flamborough Head Lighthouse, viewed from the east during a historic building recording survey of the building. The recording was undertaken to provide a permanent record of the current Fresnel Lens optic of the lighthouse, which is to be replaced with a modern light. https://doi.org/10.5284/1103149 Data copyright © York Archaeology'
  },
  10: {
    title: 'The barque Antoinette',
    text: 'The barque Antoinette was wrecked on the Doom Bar on 2 January 1895 bound for Santos from Newport, Gwent with a cargo of coal. Part of the wreckage was carried by spring tides on to Town Bar where it became a hazard to fishermen and ferrymen and the remains became buried by sand following unsuccessful attempts at demolition using explosives. https://doi.org/10.5284/1000403 Data copyright © Maritime Archaeology Trust'
  },
  11: {
    title: 'SS Apapa',
    text: 'Survey of the SS Apapa. The Unpath\'d Waters project is using such data to try to identify wrecks in the Irish Sea. Data copyright © Dr Michael Roberts, Bangor University'
  }
};

export const frontPageImagesTotal = Object.keys(frontPageImageTexts).length;
