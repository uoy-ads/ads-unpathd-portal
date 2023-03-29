<template>
	<div class="pt-3x px-base max-w-screen-xl mx-auto text-mmd">
    <h1 class="text-2xl mb-md">Using the Unpath’d Waters Catalogue</h1>
    <p class="mb-md">The Portal consists of a Catalogue providing access to over 0.5 million archaeological resources  which can be searched and filtered according to a number of criteria. The returned results from the search facilities provided with the Catalogue are listed individually and also as aggregated results on a map and as a timeline. This Guide aims at helping all end users to get the maximum benefit from using the Catalogue.</p>
    <p class="mb-md">For further information about the Project and the Portal, see the ? About page: <a class="underline" href="https://unpathd.ads.ac.uk/about">https://unpathd.ads.ac.uk/about</a>.</p>
    <p class="mb-md">This guide contains information on:</p>
    <ul class="list-disc mb-2x list-inside" id="skip-list">
      <li class="underline"><a href="#search-cat">Searching the catalogue</a></li>
      <li class="underline"><a href="#search-res">The Search Results page</a></li>
      <li class="underline"><a href="#ind-res">The Individual Resource page</a></li>
      <li class="underline"><a href="#horizontal">The Horizontal Menu options</a></li>
      <li class="underline"><a href="#services">Services for use with the Catalogue Data</a></li>
    </ul>

    <hr class="mb-lg h-px w-7/8 mx-auto" style="color:lightgray;" >
    <h2 class="text-xl mb-md anchor" id="search-cat">Searching the catalogue</h2>
    <p class="mb-lg">Entry to the catalogue consists of a text entry search box with the option to apply one of four filters:</p>
    <img :src="`${ assets }/about/search-box.png`" alt="portal search box" class="mb-lg" :width="imgMaxWidth">
    <p class="mb-md" id="filters">The search is designed to start with one or more key words where logical “AND” is applied. For example, a search for “dock crane” will return only records where both these words are to be found in the metadata record. The default setting is “All fields”, i.e. the whole record is searched. </p>
    <p class="mb-md">Alternatively, there are four filters available for a more targeted search:</p>
    <ul class="mb-2x">
      <li><strong>Time period</strong> - name of time period(s) e.g. medieval, 19th century</li>
      <li><strong>Place</strong> - place name which can be anything from a specific place to a country</li>
      <li><strong>Title</strong> - only the title fields are searched for matching terms.</li>
      <li><strong>Getty AAT Subject</strong> – all the subject terms used by the data provider have been mapped to the Getty Arts and Architecture Thesaurus which enables the end user to search across multiple sources for the equivalent subject. Since the search is hierarchical, any broad term such as “Fishing vessels” will also include all sub-categories such as trawlers and seiners etc. More on the Getty AAT:  <a class="underline" href="https://www.getty.edu/research/tools/vocabularies/aat/about.html">https://www.getty.edu/research/tools/vocabularies/aat/about.html</a>.</li>
    </ul>

    <hr class="mb-lg h-px w-6/8 mx-auto" style="color:lightgray;">
    <h2 class="text-xl mb-md anchor" id="search-res">The Search Results page</h2>
    <p class="mb-lg">The search results are displayed along with a wider range of filters which can be used to further refine the results.</p>
    <img :src="`${ assets }/about/results.png`" alt="search results" class="mb-3x" :width="imgMaxWidth">

    <hr class="mb-lg h-px w-7/8 mx-auto" style="color:lightgray;">
    <h2 class="text-lg mb-md">The filters in detail</h2>
    <div class="flex mb-2x">
      <div class="md:basis-1/3">
        <img :src="`${ assets }/about/filters.png`" alt="filters box">
      </div>
      <div class="md:basis-1/2" style="padding-top:20px; margin-left: 20px;">
        <p class="mb-md">The first set of filters are a repeat of those to be found on the Catalogue start page <a class="underline" href="#filters">as described previously</a>.</p>
      </div>
    </div>
    <hr class="mb-lg h-px w-6/8 mx-auto" style="color:lightgray;">
    <h2 class="text-lg mb-md">The Map (Where)</h2>
    <div class="flex mb-md">
      <div class="md:basis-1/3">
        <img :src="`${ assets }/about/map.png`" alt="heat map">
      </div>
      <div class="md:basis-1/2" style="padding-top:20px; margin-left: 20px;">  
        <p class="mb-md">The map on the Results page displays the location of the records returned in the search results (where co-ordinates have been provided). These are shown as ‘heat spots’ at this macro level. Clicking on ‘Advanced Search’ will open the Map filter page where the search results can be refined geographically by selecting an area on the map.</p>
      </div>
    </div>
    <p class="mb-md">As the map can be user inter-changeably with the other filters, these are displayed on the left side of the screen. They can be hidden by clicking on the yellow tab to the right of this column (Hide filters). </p>
    <p class="mb-md">The default view is a geographic Open Street Map (OSM) showing national borders.</p>
    <img :src="`${ assets }/about/map-large.png`" alt="heat map and filters box" class="mb-2x" :width="imgMaxWidth">
    <p class="mb-lg">There are a number of options for use with the map filter, the icons for which are shown in a column in the bottom right-hand corner:</p>
    <table class="mb-lg text-left text-md">
      <thead>
        <tr>
          <th class="underline">Icon</th>
          <th class="underline">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><img style="max-width: 75%;" :src="`${ assets }/about/icon-layers.png`" alt="map layer icon"></td>
          <td>The Layers icon displays a sub-menu with six different options for the display of the map, four of which are from Google including a satellite and a street map version.</td>
        </tr>
        <tr>
          <td><img style="max-width: 75%;" :src="`${ assets }/about/icon-zoom.png`" alt="zoom in and out icons"></td>
          <td>The Zoom (in and out) icons for panning in and out of geographic regions. This can also be achieved with a touchpad (and mouse where enabled).</td>
        </tr>
        <tr>
          <td><img style="max-width: 75%;" :src="`${ assets }/about/icon-drawing.png`" alt="zoom in and out icons"></td>
          <td>
            <p>The Drawing tools icons:</p>
            <ul>
              <li>The Line tool will display the distance covered as each point is drawn. </li>
              <li>The Polygon tool defines a multi-sided area on the map</li>
              <li>The Rectangle tool defines a rectangular area between two opposite corners. </li>
              <li>The results are updated to show only the records located within the defined areas.</li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
    <p class="mb-lg">Once an area of interest has been defined, all the related resources can be displayed on the Results page by clicking on the ‘Display as search result’ part of the information box displayed in the top left corner of the screen.</p>
    <img class="mb-md" :src="`${ assets }/about/map-satellite.png`" alt="satellite map showing clusters of resources" :width="imgMaxWidth">
    <p class="mb-2x"><em>Map shown in Google Satellite mode showing both individual and clusters of resources</em></p>

    <hr class="mb-lg h-px w-6/8 mx-auto" style="color:lightgray;">
    <h2 class="text-lg mb-md">Representation of resources on the Map</h2>
    <p class="mb-lg">Different modes are used to represent how resources are shown on the map:</p>
    <img :src="`${ assets }/about/resources.png`" alt="filters box" class="mb-lg" :width="smallImgMaxWidth">
    <ul class="mb-md list-disc list-inside">
      <li>A <strong>Geo point</strong> shows a single resource with exact co-ordinates. If there are more than one Geo point on the Map, then the one for the current resource is denoted by an inner red ring. </li>
      <li>A <strong>Geo shape</strong> indicates a resource where the location is not precise. This may be due to the location being given as a geographical area (e.g. a town or region) for a resource or, for example, reports which cover large and/or multiple locations.</li>
      <li><strong>Approx. location</strong> icons are shown where the location of the resource is considered to be sensitive, for example, shipwrecks, or where the location of a site is only approximately known. Blue ‘pins’ indicate an approximate point and red ‘pins’ an area.</li>
    </ul>
    <p class="mb-lg">The individual record for red ‘pin’ sites will display a defined (often rectangular) area for the resource where the actual location will be a random point within the shown area.</p>
    <img class="mb-lg" :src="`${ assets }/about/resource-map.png`" alt="map showing geo points" :width="imgMaxWidth">
    <p class="mb-2x">Mouseover can be used on each individual Geo point and Geo shape to display the title of the associated Resource. Note that the Map functions in the same way in the Browse options as for the Results page, i.e. the same icons are used. </p>

    <hr class="mb-lg h-px w-6/8 mx-auto" style="color:lightgray;">
    <h2 class="text-lg mb-md">Time period filter (When)</h2>
    <p class="mb-md">The When filter consists of three different ways of selecting a time period of interest: a graphic where the mouse is used to select the date range, a text entry box where the start and end year can be specified and a separate filter that uses named time periods as defined in PeriodO.</p>
    <div class="flex mb-2x">
      <div class="md:basis-1/4">
        <img :src="`${ assets }/about/when-filter1.png`" alt="time period graph">
      </div>
      <div class="md:basis-1/2" style="padding-top:20px; margin-left: 20px;">
        <p class="mb-md">The Time Period graphic displays the resources returned in the search results by date distribution. </p>
        <p class="mb-md">The search results can be refined by Clicking on ‘Advanced Search’ to display the Time period filter page (Browse when). </p>
        <p class="mb-md">If no search term is used or the filter is accessed via the ‘Browse when’ option, then the graph shows the date distribution for the entire catalogue.</p>
      </div>
    </div>
    <div class="flex mb-2x">
      <div class="md:basis-1/4">
        <img :src="`${ assets }/about/when-filter2.png`" alt="time period graph">
      </div>
      <div class="md:basis-1/2" style="padding-top:20px; margin-left: 20px;">
        <p class="mb-md">Using the mouse with the Shift key directly on the graphic can used to define a shorter time period -200-1400 C.E. in this case.</p>
        <p class="mb-md">Scrolling with the mouse will cause the time period graphic to expand. If the mouse is placed closer to the left side, the x-axis will ‘stretch’ from the left (reducing the end date), placed to the right the start date increases (‘stretch’ from the right).</p>
      </div>
    </div>
    <div class="flex mb-2x">
      <div class="md:basis-1/4">
        <img :src="`${ assets }/about/when-filter3.png`" alt="time period graph">
      </div>
      <div class="md:basis-1/2" style="padding-top:20px; margin-left: 20px;">
        <p class="mb-md">Each time the time period graphic is changed, the range updates to show the selected time span. The distribution of the resources by date is recalculated, shown in greater detail as the period range reduces.</p>
        <p class="mb-md">Clicking on ‘Display as search result’ returns to the Search Results page with the refined record set.</p>
      </div>
    </div>

    <hr class="mb-lg h-px w-6/8 mx-auto" style="color:lightgray;">
    <h3 class="text-lg mb-md">Filter by Year</h3>
    <p class="mb-md">An alternative method for selecting a time period is to enter the start and end years in the text box below the graph. </p>
    <p class="mb-lg">In both methods, (graph and direct year entry), all records that specify a time period that either falls within and/or overlaps the specified time period will be returned in the results – as shown in the following illustration.</p>
    <img class="mb-2x" :src="`${ assets }/about/time-period-graph.png`" alt="time period graph" :width="imgMaxWidth">

    <hr class="mb-lg h-px w-6/8 mx-auto" style="color:lightgray;">
    <h2 class="text-lg mb-md">Resource type</h2>
    <p class="mb-lg">The Resource type is a general concept designed to categorise the resources into different types:</p>
    <div class="flex mb-md">
      <div class="md:basis-1/4">
        <img :src="`${ assets }/about/resource-type.png`" alt="resource type filter box" class="mb-lg">
      </div>
      <div class="md:basis-1/2" style="padding-top:20px; margin-left: 20px;">
        <p class="mb-md">The main Resource types available in Unpath’d Waters are:</p>
        <ul class="mb-lg list-disc">
          <li><strong>Site/monument</strong> - normally a single record relating to a specific site or monument</li>
          <li><strong>Fieldwork</strong> – normally a single record relating to specific fieldwork e.g. evaluations, interventions, etc.</li>
          <li><strong>Fieldwork report</strong> – these always have a link (URL or DOI) to the actual document.</li>
          <li><strong>Fieldwork archive</strong> – the record refers to a collection of documents, images etc. relating to a site (accessible from the DOI supplied).</li>
        </ul>
      </div>
    </div>
    <p class="mb-2x">More than one Resource type can be selected but as ‘AND’ is used with each term, this will only result in records where all the terms have been used.</p>

    <hr class="mb-lg h-px w-6/8 mx-auto" style="color:lightgray;">
    <h2 class="text-lg mb-md">Getty AAT Subjects</h2>
    
    <div class="flex mb-2x">
      <div class="md:basis-1/4">
        <img :src="`${ assets }/about/getty.png`" alt="getty subjects filter box" class="mb-lg">
      </div>
      <div class="md:basis-1/2" style="padding-top:20px; margin-left: 20px;">
        <p class="mb-md">The Getty Arts and Architecture Thesaurus (AAT) has been used to classify each resource, mapping the original subject(s) to those found in this extensive ontology. Over one thousand terms have been used and each resource usually has more than one term assigned to it.</p>
        <p class="mb-md">The Getty AAT is hierarchical in structure and when a (single) higher level term is specified in this filter, the search results will also include all the sub-categories. So, the general term “Fishing vessels” will also include resources with terms such as “Trawlers” as these are a sub-category of “Fishing vessels”.</p>
        <p class="mb-md">When a set of search results is displayed, the Getty AAT filter will only show the first 20 terms found within the current set of resources, starting with the most numerous matches ordered by size. More terms can be displayed by clicking on the “Get 20 more results..” box at the end of the displayed list which extends the list with a scroll bar. This can be repeated until all the matching terms may be viewed.</p>
      </div>
    </div>

    <hr class="mb-lg h-px w-6/8 mx-auto" style="color:lightgray;">
    <h2 class="text-lg mb-md">Publisher</h2>
    <div class="flex mb-md">
      <div class="md:basis-1/4">
        <img :src="`${ assets }/about/publisher.png`" alt="publisher filter box" class="mb-lg">
      </div>
      <div class="md:basis-1/2" style="padding-top:20px; margin-left: 20px;">
        <p class="mb-md">The Publisher is the organisation which has supplied the metadata to the Catalogue and is responsible for the maintenance and updating of this metadata.</p>
        <p class="mb-md">The Publisher may also own the original data or be responsible for its maintenance as in the case of regional and national repositories.</p>
      </div>
    </div>
    <p class="mb-lg">Note that the “i” icon next to each name provides a short summary about the Publisher in a new page which also shows the geographic distribution of their records on the map and the first 20 of these below a link to the Publisher’s website. The second link will display the results in the standard ‘Results’ page:</p>
    <img class="mb-3x" :src="`${ assets }/about/her-scotland.png`" alt="information and map on Historic Environment Scotland" :width="imgMaxWidth">

    <hr class="mb-lg h-px w-6/8 mx-auto" style="color:lightgray;">
    <h2 class="text-lg mb-md">Contributor</h2>
    <div class="flex mb-2x">
      <div class="md:basis-1/4">
        <img :src="`${ assets }/about/contributor.png`" alt="publisher filter box" class="mb-lg">
      </div>
      <div class="md:basis-1/2" style="padding-top:20px; margin-left: 20px;">
        <p>The Contributor is usually (but not always) the owner of the data but not the Publisher who will have put the data online on behalf of the Contributor.</p>
      </div>
    </div>

    <hr class="mb-lg h-px w-6/8 mx-auto" style="color:lightgray;">
    <h2 class="text-lg mb-md">Original subject</h2>
    <div class="flex mb-2x">
      <div class="md:basis-1/4">
        <img :src="`${ assets }/about/original-subject.png`" alt="original subject filter box" class="mb-lg">
      </div>
      <div class="md:basis-1/2" style="padding-top:20px; margin-left: 20px;"> 
        <p class="mb-md">The original subject is the term from the ontology used by the Contributor and/or Publisher and which is then mapped to the Getty AAT.</p>
        <p>The Original subject will, in most cases, be in the native language of the provider. The option to filter using alternative, localised terms facilitates both multi-lingual searches (i.e. in languages other than English) and terminology specific to a Publisher (country).</p>
      </div>
    </div>

    <hr class="mb-lg h-px w-6/8 mx-auto" style="color:lightgray;">
    <h2 class="text-lg mb-md">Dating</h2>
    <div class="flex mb-2x">
      <div class="md:basis-1/4">
        <img :src="`${ assets }/about/dating.png`" alt="dating filter box" class="mb-lg">
      </div>
      <div class="md:basis-1/2" style="padding-top:20px; margin-left: 20px;">
        <p>The dating filter can be viewed as a ‘catch all’ filter which works solely on the information in the ‘Dating’ field of the metadata. This is a broad category which includes named periods as well as date numerals, general terms such as ‘16th century’ and localised terms specific to regions. Rather than lose this information and make resources less findable, the Dating filter is intended to cover all the resources, some of which may not have both start and end dates or PeriodO definitions.</p>
      </div>
    </div>

    <hr class="mb-lg h-px w-6/8 mx-auto" style="color:lightgray;">
    <h2 class="text-lg mb-md">Options for displaying the results</h2>
    <p class="mb-md">At the top on the right-hand side of the Results page are two options for controlling the display of the results, Order and Per page.</p>
    <img :src="`${ assets }/about/results-bar.png`" alt="result set display options" class="mb-lg" :width="smallImgMaxWidth">
    <p class="mb-md">Results can be ordered by Issued Date (Current setting), most relevant results, least relevant results, most recent records and least recent records.</p>
    <p class="mb-2x">The default number of resources shown on the Results page is 20. The Order option enables this to be changed from between 5 to 50 per page.</p>

    <hr class="mb-lg h-px w-6/8 mx-auto" style="color:lightgray;">
    <h3 class="text-lg mb-md">Further information for ‘Relevance’</h3>
    <p class="mb-3x">Relevance is basically a score allocated to resources which match the current search criteria based on the metadata fields. This score determines the order in which the resources are listed (i.e. from highest score to lowest or vice versa). The algorithm used gives the highest score to matches to the Title, followed by the Description and then the Subject fields (i.e. nativeSubject and derivedSubject) after that with other fields such as location and time etc. also adding to the score (as and where relevant). </p>

    <hr class="mb-lg h-px w-7/8 mx-auto" style="color:lightgray;">
    <h2 class="text-xl mb-md anchor" id="ind-res">The Individual Resource page</h2>
    <p class="mb-lg">Clicking on the title of a resource from the Results page will display the metadata record and all associated information for that resource. At the top of the page, the resource’s location is shown on a map where zoom in and out can be done using the ‘+’and ‘-‘ icons on the right hand side.</p>
    <img class="mb-lg" :src="`${ assets }/about/individual-resource.png`" alt="individual resource page" :width="imgMaxWidth">
    <p class="mb-2x">The map can be enlarged by clicking on the frame icon below the Zoom icons to display the Map size menu as shown here. The size of the map on the resource page  can be increased (and reduced) using the Medium and Full Screen options, the default setting being Small.</p>

    <hr class="mb-lg h-px w-6/8 mx-auto" style="color:lightgray;">
    <h2 class="text-lg mb-md">Display of near-by resources on the map</h2>
    <p class="mb-md">For each record for an individual resource, the map may also display Geo points or shapes for other resources located close by which are included in the returned search results. There are several other sites and monuments of interest in this area, each denoted by a separate Geo shape. Clicking on any of the Geo shapes will display the associated resource.</p>
    <p class="mb-2x">Nearby resources can be hidden and shown by clicking on the toggle Geo shape icon “Nearby resources” on the left below the map.</p>

    <hr class="mb-lg h-px w-6/8 mx-auto" style="color:lightgray;">
    <h2 class="text-lg mb-md">The metadata</h2>
    <p class="mb-md">The Title of the resource is shown followed by the Description and several self-explanatory Metadata fields. In this case the Core Trust Seal is also displayed as the resource in maintained by a repository which holds Core Trust Seal certification.</p>
    <img class="mb-2x" :src="`${ assets }/about/hazardous.png`" alt="individual resource page - hazardous project" :width="medImgMaxWidth">

    <hr class="mb-lg h-px w-6/8 mx-auto" style="color:lightgray;">
    <h2 class="text-lg mb-md">Responsible person and organisations, Licence information</h2>
    <div class="flex mb-2x">
      <div class="md:basis-1/4">
        <img :src="`${ assets }/about/responsible.png`" alt="responsible person listing">
      </div>
      <div class="md:basis-1/2" style="padding-top:20px; margin-left: 20px;">
        <ul>
          <li>The <strong>Creator</strong> is the original author(s) of the information. </li>
          <li>The <strong>Contributor</strong> is the organisation (or person) who has supplied the resource. </li>
          <li>The <strong>Owner</strong> is the organisation (or person) who owns the licence.</li>
          <li>The <strong>Responsible</strong> is the organisation which funded the research.</li>
          <li>The <strong>Licence</strong> indicates the permitted access and reuse of the metadata.</li>
        </ul>
      </div>
    </div>

    <hr class="mb-lg h-px w-6/8 mx-auto" style="color:lightgray;">
    <h2 class="text-lg mb-md">Resource links</h2>
    <p class="mb-lg">The Resource links are for technical applications apart from Report an issue.</p>
    <img :src="`${ assets }/about/resource-links.png`" alt="resource navigation bar" class="mb-md" :width="smallImgMaxWidth">
    <ul class="mb-2x list-disc">
      <li><strong>Json</strong> displays the resource data formatted in JSON. This is all the data (and combinations of data) available for that specific resource. (This data is very close to how the data is formatted and looks in the OpenSearch source).</li>
      <li><strong>Xml</strong> displays the resource data formatted in XML (as for JSON).</li>
      <li><strong>Rdf</strong> displays the resource data formatted in RDF</li>
      <li><strong>Report an issue</strong> this option generates a form containing the resource id (Subject) in which end users can report any issues they encounter with the Catalogue.</li>
    </ul>

    <hr class="mb-lg h-px w-6/8 mx-auto" style="color:lightgray;">
    <h2 class="text-lg mb-md">Resource is a part of</h2>
    <p class="mb-md">This section indicates the Collection or dataset that the resource belongs to. It provides a link to a new page with further information and access to the other resources within the Collection.</p>
    <img :src="`${ assets }/about/resource-part.png`" alt="resource is part of listing" class="mb-md" :width="smallImgMaxWidth">
    <p class="mb-sm">The Collection record for the Historic Environment Scotland (HES) CANMORE database is shown here:</p>
    <img class="mb-sm" :src="`${ assets }/about/resource-part-her.png`" alt="resource is part of listing - Historic Environment Scotland" :width="imgMaxWidth">
    <p class="mb-3x">The remainder of the page follows the same format as the individual Resource page.</p>

    <hr class="mb-lg h-px w-7/8 mx-auto" style="color:lightgray;">
    <h2 class="text-xl mb-md anchor" id="horizontal">The Horizontal Menu options</h2>
    
    <p class="mb-md">There are four options in the horizontal menu across the top of the page:</p>
    <ul class="list-disc mb-2x">
      <li>Catalogue – this returns the user to the initial Results page with the default search showing all the records. As all the filters are available on this page, this page is considered to be more useful than the landing page displayed upon initial entry to the Catalogue.</li>
      <li>Browse – this contains three options for searching the catalogue/knowledgebase based on Where, When and What.
        <ul class="list-disc list-inside">
            <li>Where – displays the map filter. This is a stand-alone version which works in exactly the same way as described previously.</li>
            <li>When – displays the time line filter. This is a stand-alone version which works in exactly the same way as described previously.</li>
            <li>What – this displays an interactive Wordle representing the distribution of the Getty AAT subject terms in the current selection by the relative size of each term to each of the others.</li>
        </ul>
        Note that selecting a Browse option will automatically clear all previously set filters so, in the case of <strong><em>Where</em></strong> and <strong><em>When</em></strong>, these should be used from the Results page to refine the results.
      </li>
      <li>Services - a brief summary of the services</li>
      <li>About – a brief overview of the project.</li>
    </ul>

    <hr class="mb-lg h-px w-6/8 mx-auto" style="color:lightgray;">
    <h2 class="text-lg mb-md">The Browse “What” filter</h2>
    <p>The “What” filter displays an interactive Wordle based upon the first twenty most common Getty AAT Subject(s) recorded for the current selection, the default on entry being the entire Catalogue.</p>
    <img :src="`${ assets }/about/cloud.png`" alt="word cloud" :width="medImgMaxWidth">
    <p class="mb-3x">To explore further, click on any of the terms to display the corresponding resources on the Results page. From here, filters can be applied as described previously.</p>

    <hr class="mb-lg h-px w-7/8 mx-auto" style="color:lightgray;">
    <h2 class="text-xl mb-md anchor" id="services">Services for use with the Catalogue Data</h2>
    <p class="mb-base">The ARIADNE Lab VRE is another way of accessing the data in the Catalogue as this allows technical users to query the triplestore direct using tools such as Jupyter Notebooks, R and GraphDB. Further information along with how to access the Lab VRE is to be found here: <a class="underline" href="https://ariadne-infrastructure.eu/the-ariadneplus-lab-vre/">https://ariadne-infrastructure.eu/the-ariadneplus-lab-vre/.</a></p>
  </div>
</template>

<script setup lang="ts">
import { $computed } from 'vue/macros';
import { generalModule } from "@/store/modules";
import BLink from '@/component/Base/Link.vue';

const imgMaxWidth: number = 800;
const medImgMaxWidth: number = 600;
const smallImgMaxWidth: number = 400;

const assets: string = $computed(() => generalModule.getAssetsDir);
</script>
