(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{128:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(3),i=n(7),o=(n(0),n(227)),r=["components"],s={title:"Customer Journey Clustering - How to use sequential modeling techniques to handle customer journey data",author:"Sabri Belli",author_title:null,author_url:"mailto:inno@ekimetrics.com",header_image_url:"img/blog/customer_journey.jfif",tags:["Clustering","Autoencoders","Churn","Interpretability"],draft:!1,description:"Enrich your understanding of customer journeys through clustering using  image embedding, autoencoders and unsupervised learning.",keywords:["Data Science","EkiLab","Ekimetrics","Eki.Lab","Eki","Machine Learning","Artificial Intelligence","Clustering","Machine Learning","Neural Networks","K-means","Autoencoders","Churn","Shapley values","Interpretability","Data Science for business"]},c={permalink:"/blog/2021/12/22/cjc",source:"@site/blog\\2021-12-22-cjc.md",description:"Enrich your understanding of customer journeys through clustering using  image embedding, autoencoders and unsupervised learning.",date:"2021-12-22T00:00:00.000Z",tags:[{label:"Clustering",permalink:"/blog/tags/clustering"},{label:"Autoencoders",permalink:"/blog/tags/autoencoders"},{label:"Churn",permalink:"/blog/tags/churn"},{label:"Interpretability",permalink:"/blog/tags/interpretability"}],title:"Customer Journey Clustering - How to use sequential modeling techniques to handle customer journey data",readingTime:11.54,truncated:!0,prevItem:{title:"Hackathon Stories - Ensuring access to affordable and clean energy",permalink:"/blog/2022/01/06/hackathon"},nextItem:{title:"Introduction to Pyepidemics - epidemiological modeling in Python",permalink:"/blog/introduction-pyepidemics"}},l=[{value:"Enriching understanding of customer journeys through clustering",id:"enriching-understanding-of-customer-journeys-through-clustering",children:[]},{value:"Advancing methodologies - Creating groups of similar journeys through image embedding, autoencoders and unsupervised learning",id:"advancing-methodologies---creating-groups-of-similar-journeys-through-image-embedding-autoencoders-and-unsupervised-learning",children:[{value:"Step 1: Reducing the dimensions of our dataset",id:"step-1-reducing-the-dimensions-of-our-dataset",children:[]},{value:"Step 2: Encoding and creating images to represent journeys",id:"step-2-encoding-and-creating-images-to-represent-journeys",children:[]},{value:"Step 3: Clustering customer journey \u201cimages\u201d to identify standard paths",id:"step-3-clustering-customer-journey-images-to-identify-standard-paths",children:[]}]},{value:"Making the customer journey analysis easier to perform - taking advantage of a reduced number of journeys",id:"making-the-customer-journey-analysis-easier-to-perform---taking-advantage-of-a-reduced-number-of-journeys",children:[]},{value:"Leveraging the Customer Journey Clustering - three ways of improving customer-centric strategy",id:"leveraging-the-customer-journey-clustering---three-ways-of-improving-customer-centric-strategy",children:[{value:"Improving websites",id:"improving-websites",children:[]},{value:"Building audiences",id:"building-audiences",children:[]},{value:"Improve churn prediction",id:"improve-churn-prediction",children:[]}]},{value:"Conclusion",id:"conclusion",children:[]},{value:"Appendix",id:"appendix",children:[]},{value:"References",id:"references",children:[]}],u={toc:l};function d(e){var t=e.components,s=Object(i.a)(e,r);return Object(o.b)("wrapper",Object(a.a)({},u,s,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"enriching-understanding-of-customer-journeys-through-clustering"},"Enriching understanding of customer journeys through clustering"),Object(o.b)("p",null,"Analyzing customer website behaviour is an essential step towards understanding the ways in which customers perceive and interact with a brand\u2019s products and services. Methods for analyzing these online interactions have improved in sophistication and depth of insight offered in recent years meaning many traditional methods, such as journey mapping now fall short. Exploring Customer Journeys, whilst more complex, offers brands the opportunity to dive deeper and obtain more granular insights that can then be used to optimise and improve the experience of future customers."),Object(o.b)("p",null,"Employing advanced methodologies is not only beneficial, but it has also become a necessary action for any business that wants to explore the increasingly complex customer journeys possible on modern websites. To provide some context to this challenge - when investigating this possibility for one of our clients, a global leader in the telecom industry, we quickly realized that given the number of possible actions on their website (about 1,760), performing standard analysis would be overwhelming. It would, in fact, raise the number of potential journeys to something of the order of 10",Object(o.b)("sup",null,"4900"),". To put this number into perspective, the number of atoms in the universe is of the order of 10",Object(o.b)("sup",null,"100"),". A simple method of analysing customer journeys is mapping. Essentially creating a visual representation of every touchpoint your customers have with you, creating a fluid timeline from how you initially engaged them to their first purchase and tracking the ongoing relationship.  "),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"\u2026 it would raise the number of possible journeys to something of the order of 10",Object(o.b)("sup",null,"4900"),". To put this number into perspective, the number of atoms in the universe is of the order of 10",Object(o.b)("sup",null,"100"),".")),Object(o.b)("h2",{id:"advancing-methodologies---creating-groups-of-similar-journeys-through-image-embedding-autoencoders-and-unsupervised-learning"},"Advancing methodologies - Creating groups of similar journeys through image embedding, autoencoders and unsupervised learning"),Object(o.b)("p",null,"Many businesses are adapting strategic models to emphasise customer-centricity and build up their online presence. Websites, therefore, become a powerful asset in understanding customer behaviour through the data that they generate. And analyzing this data becomes a potential source of insight to improve future interactions with the customer base, driving loyalty and higher conversion. Journey mapping and other traditional methods can provide fast and high-level customer insight, which can be an important first step in making use of this asset. However, they often fall short as the numbers of potential journeys increase exponentially. "),Object(o.b)("p",null,"Journey clustering is a more advanced approach that uses algorithms to analyse all journeys by identifying groups of customers who interact with the website in similar ways. In doing so, we identify patterns in customer behaviour and begin to understand the motivations behind their actions.  This type of analysis can be used by businesses to personalise their websites and improve customer experience. Ekimetrics' innovative approach specifically uses advanced encoding and machine learning methods, as well as clustering algorithms to make sense of the complex digital world."),Object(o.b)("p",null,"To address this challenge our approach requires three key steps: "),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Reducing the dimensions of our customer journey dataset")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Creating image-like representations of customer journeys; one image represents one customer journey")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Applying clustering algorithms on images to create groups of users with similar behaviours. For each cluster, we are then able to define a \u201cstandard journey\u201d."))),Object(o.b)("h3",{id:"step-1-reducing-the-dimensions-of-our-dataset"},"Step 1: Reducing the dimensions of our dataset"),Object(o.b)("p",null,"Analyzing customer journeys is a difficult task that can lead to memory allocation errors, primarily due to high data diversity. Even for less sophisticated brands, the number of parameters feeding into a customer journey analysis model can quickly become unmanageable due to the sheer size of data needing to be analysed. "),Object(o.b)("p",null,"For example, the following features can be tracked: the URL of the pages visited, time spent on one page, overall duration on the website, user clicks, and many more.  The temptation is to add as much detail as possible, but more variables create more noise and lengthening computation time. "),Object(o.b)("p",null,"A solution to this problem is to identify the most relevant variables - with respect to the business question we want to answer - to take forward through feature selection, these metrics can then be aggregated into a single data structure. This process serves two purposes: firstly reducing the size and complexity of our inputs and ensuring the outputs are directed towards the business objectives and free of unnecessary noise."),Object(o.b)("h3",{id:"step-2-encoding-and-creating-images-to-represent-journeys"},"Step 2: Encoding and creating images to represent journeys"),Object(o.b)("p",null,"Customer Journeys are path-dependent processes that describe customers\u2019 interactions with different touchpoints, for example, all actions on a website leading up to purchase. To analyse these relationships we need to manipulate datasets to represent online journeys but also translate them into something that can be easily interpreted and modelled."),Object(o.b)("p",null,"To do this and ensure no information is lost we create a 3D embedding \u2018image\u2019 that merges all this data into a single structure through the following processes:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Touchpoints that a customer has interacted with are represented in columns")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"The order in which interactions happen is represented in rows")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"A vector describing the quality of the customer interaction (e.g. time spent/number of clicks\u2026)"))),Object(o.b)("p",null,Object(o.b)("img",{src:n(360).default})),Object(o.b)("div",{align:"center"}," Building our 3D embedding through an iterative process"),Object(o.b)("br",null),Object(o.b)("p",null,"The 3 parts for building our 3D embedding highlighted in the figure above are:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Given n, the number of possible interactions on the platform, it is possible to build a vector V=(1,n) representing all actions that a customer can perform. At a particular stage t, it is possible to fill V with \u201c0\u201c or \u201c1\u201d depending on the customer\u2019s action: if the i",Object(o.b)("sup",null,"th")," action has been performed at stage t, set V(1,i)=1 , otherwise V(1,i)=0")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"It is then possible to replicate this process at every stage of the customer\u2019s journey in order to build a matrix M(l,n) where every line l represents the lth action performed by the customer")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Finally, adding an indicator of the journey\u2019s quality consists of replacing the 0 & 1 in the previous matrix, with a vector of values describing the interactions."))),Object(o.b)("p",null,Object(o.b)("img",{src:n(361).default})),Object(o.b)("div",{align:"center"}," Example of an image decomposition through RGB channels"),Object(o.b)("br",null),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Colourized pictures can be decomposed into Red, Green and Blue monochromatic sub-pictures.\nIn our case, we can draw a parallel between the different indicators describing the interactions and the colourized levels of an image."))),Object(o.b)("h3",{id:"step-3-clustering-customer-journey-images-to-identify-standard-paths"},"Step 3: Clustering customer journey \u201cimages\u201d to identify standard paths"),Object(o.b)("p",null,"In order to apply a clustering algorithm first, we had to clean and apply pre-processing to our data. We then had to control the dimensions in order to keep the number of variables below a defined threshold (we chose ~log #observations). To achieve such control we used autoencoder neural networks."),Object(o.b)("p",null,"The goal of such algorithm is to learn a semantic representation by extracting the relevant signals from a given set of observations. This is a dimension reduction method that enables us to perform non-linear transformations. In other words autoencoders enable us to turn our inputs into meaningful and compressed data by getting rid of the non relevant information."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"PCA is another such dimension reduction method that performs linear transformations."))),Object(o.b)("p",null,Object(o.b)("img",{src:n(362).default})),Object(o.b)("div",{align:"center"}," Using a convolutional autoencoder to compress customer journeys "),Object(o.b)("br",null),Object(o.b)("p",null," The above figure shows how an autoencoder performs on a dimension reduction problem. First, the input signal is compressed over the blue layers to reach a compressed representation (represented by the Dense layer). The signal is reconstructed using the green layers to then give the output. ",Object(o.b)("strong",{parentName:"p"},"The goal is to have similar inputs and outputs while controlling the size of the Dense layer.")),Object(o.b)("p",null,"The above architecture is different from the classic convolutional autoencoders (classic autoencoders involve a succession of convolution and pooling layers for the encoding part, and upsampling layers for the decoding part). The architecture we used relies on convolution layers, and on deconvolution layers rather than upsampling ones. Since deconvolution layers are trainable (meaning that they depend on learnable parameters), and upsampling ones are not, this architecture can learn more complex transformations than a classic convolutional autoencoder of the same depth."),Object(o.b)("p",null," ",Object(o.b)("em",{parentName:"p"},"This architecture is inspired from the one described in this ",Object(o.b)("a",{parentName:"em",href:"https://xifengguo.github.io/papers/ICONIP17-DCEC.pdf"},"article about Deep Clustering")),"."),Object(o.b)("p",null,"Once we had completed the dimension reduction, we need to apply a clustering solution on the compressed customer journeys. We then assigned each group of similar customer journeys to a representative standard journey."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),Object(o.b)("strong",{parentName:"h5"},"A word about clustering"))),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"A clustering process consists of building groups of observations (e.g. customer journeys) based on their characteristics. The key components of the clustering process are:"),Object(o.b)("ul",{parentName:"div"},Object(o.b)("li",{parentName:"ul"},"Building groups containing similar observations: we talk about intra-class variance minimization."),Object(o.b)("li",{parentName:"ul"},"Building groups that are different from each other: we talk about inter-class variance maximization.")),Object(o.b)("p",{parentName:"div"},"Clustering tasks rely on unlabelled data (such learning tasks are known as \u2018unsupervised learning\u2019)."))),Object(o.b)("h2",{id:"making-the-customer-journey-analysis-easier-to-perform---taking-advantage-of-a-reduced-number-of-journeys"},"Making the customer journey analysis easier to perform - taking advantage of a reduced number of journeys"),Object(o.b)("p",null,"Performing a clustering algorithm on Customer Journeys aims to reduce the complexity of the analysis through the creation of groups with similar journeys. The analysis is easier to perform as it becomes possible to focus only on the representations of each group, instead of analyzing every single path. This method drastically reduces the number of journeys that require our attention. It also becomes possible to highlight complex similarities or patterns when creating these clusters."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Once the clusters are created, each of them is assigned to a standard journey (e.g. when using k-means, these standard journey are called centroids)."))),Object(o.b)("p",null,Object(o.b)("img",{src:n(363).default})),Object(o.b)("div",{align:"center"}," Example of standard journeys "),Object(o.b)("br",null),Object(o.b)("p",null,"The example above shows three of these standard journeys. We can already see some interesting information and differences between the clusters:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Customers in the Standard journey #1 group complete more actions compared to #2 and #3.")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"All three standard journeys have different starting and ending pages that correspond to the first and last rows in the pictures). By looking at these standard journeys, at a glance we can already spot some initial differences between the clusters. "))),Object(o.b)("p",null,"Note that deeper analyses can be performed on these journeys by looking at the non-embedded data."),Object(o.b)("h2",{id:"leveraging-the-customer-journey-clustering---three-ways-of-improving-customer-centric-strategy"},"Leveraging the Customer Journey Clustering - three ways of improving customer-centric strategy"),Object(o.b)("p",null,"We believe that this solution has several uses to improving the way businesses operate by better understanding customer behaviour, forming a stronger view of the customer lifetime value, and improving the user experience and conversion rate."),Object(o.b)("h3",{id:"improving-websites"},"Improving websites"),Object(o.b)("p",null,"We can use customer journey clustering to build a representative journey (using the centroid of each cluster), establishing the usual actions a user performs between touchpoint A (e.g. website\u2019s homepage) and touchpoint B (e.g. website\u2019s purchasing page). These typical journeys help gain a better understanding of the customers\u2019 experiences, allowing us to identify ways to improve the website. "),Object(o.b)("p",null,"For example, it will help brands optimise the groups of products shown at the top of a landing page."),Object(o.b)("h3",{id:"building-audiences"},"Building audiences"),Object(o.b)("p",null,"By understanding the size and similarities between groups that interact with our website Customer Journey Clustering is also a way to create specific audiences. It then allows brands to tailor their activity to engage with these specific audiences, improving the overall experience. "),Object(o.b)("p",null,"For example, if clusters 1 and 2 appear similar, but cluster 1 has a higher conversion rate than cluster 2, then analyzing the behaviours from cluster 1 may help us understand how to better retarget cluster 2. "),Object(o.b)("p",null,"These insights also make it possible to redirect customers through an optimal action that will drive more conversions."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"We could go a step further by creating customer conversion scores based on their journey. These scores could then be used to build an optimized communication strategy, leading to the next optimal action (i.e. increase or reduce media spend, depending on the score). "))),Object(o.b)("h3",{id:"improve-churn-prediction"},"Improve churn prediction"),Object(o.b)("p",null,"Another use case to Customer Journey clustering is evaluating churn and when customers are likely to shop with a competitor or stop ordering from us. When journeys are associated to a churn score, it becomes possible to create a predictive model that can be used to identify the groups that are more inclined to churn."),Object(o.b)("p",null,"Following the training of the model, the learnings could be applied to the standard journeys associated with each cluster, outputting a global churn score per cluster. These scores can then be evaluated and compared to other groups to better manage expected orders and improve communications with at-risk customers. "),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Since a churn predictive model such as this is trained on the 3D embedded customer journeys, one can expect it to be capable of spotting complex churn patterns involving huge sequences of actions, or time spent per action."))),Object(o.b)("h2",{id:"conclusion"},"Conclusion"),Object(o.b)("p",null,"At Ekimetrics we believe that customer journey clustering can help enhance the customer experience and increase customer lifetime value. We also know that with customer behaviours changing rapidly, an approach such as this provides a flexible solution that can translate into actionable insights for any business. "),Object(o.b)("p",null,"However, complexity is not always the answer. A good model should tell a compelling and comprehensive story, but increased complexity must be accompanied by an effort to improve interpretability and should showcase enhanced benefits for business application."),Object(o.b)("p",null,"The customer journey is still a challenge for every business globally. We do believe that there is no \xab plug and play \xbb answer and each solution needs to be built for the problem at hand. For us, intelligent data science means developing integrated approaches and leveraging different methods to help make brighter business decisions."),Object(o.b)("h2",{id:"appendix"},"Appendix"),Object(o.b)("p",null,"To give you more details, if we take an example where a user can perform up to 10 different actions on a website, the number of possible journeys is 9,864,100."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Given n the number of possible interactions, the number of possible journeys is given by the sum from 1 to n of the number of permutation of n."))),Object(o.b)("h2",{id:"references"},"References"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Xifeng Guo, Xinwang Liu, En Zhu, and Jianping Yin. ",Object(o.b)("a",{parentName:"li",href:"https://xifengguo.github.io/papers/ICONIP17-DCEC.pdf"},"Deep Clustering with Convolutional\nAutoencoders"))))}d.isMDXComponent=!0},227:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},h=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),h=a,m=d["".concat(r,".").concat(h)]||d[h]||p[h]||o;return n?i.a.createElement(m,s(s({ref:t},l),{},{components:n})):i.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},360:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/Image_1-f51932e54a6f74dbb70d7de7c389ac0f.png"},361:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/Image_2-163fab723ca3e6737cbf9a587ffb2a88.png"},362:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/Image_3-142efcbabc575d028c9301768810ce8f.png"},363:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/Image_4-87162fb7366cd46a150c4d3f96db2334.png"}}]);