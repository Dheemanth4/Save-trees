var reason = ["trees provide us shed", "trees provie us food in the form of fruits, vegitables, spices etc", "trees prent soil erotions", "trees are our natural medicens"];
var images = ["https://us.123rf.com/450wm/matkubphom/matkubphom1901/matkubphom190100637/115695151-agriculture-farmer-and-nature-baby-plant-in-hands-.jpg?ver=6", "https://www.conservationinstitute.org/wp-content/uploads/2018/05/Depositphotos_29770679_original.jpg", "https://assets.sentinelassam.com/h-upload/2020/06/05/134087-plantant.webp?w=400&dpr=2.6", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Sequoiafarm_Sequoiadendron_giganteum.jpg/220px-Sequoiafarm_Sequoiadendron_giganteum.jpg"];
var i = 0;

function nextslide() {
    document.getElementById("reasontext").innerHTML = reason[i];
    document.getElementById("album").src = images[i];
    i++;
}
