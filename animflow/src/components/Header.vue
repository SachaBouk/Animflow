<template>

    <header>
        <div class="BarHeader">
            <div class="alignHeader">
                <div id="brand">
                    <h1>Animflow</h1>
                </div>
                <div class="linksAlign">
                    <div id="Home">
                        <RouterLink :to="{ name: 'home' }">
                            <h1>Home</h1>
                        </RouterLink>
                    </div>
                    <div id="Gallery">
                        <RouterLink :to="{ name: 'gallery' }">
                            <h1>Gallery</h1>
                        </RouterLink>
                    </div>
                    <div id="Tools">
                        <RouterLink :to="{ name: 'tools' }">
                            <h1>Tools</h1>
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>



    </header>

</template>



<style scoped>
header {
    width: 100%;
    margin: 0;
    position: fixed;
    top: 0;
    z-index: 200;
    background-color: black;
}

.BarHeader {
    width: 100%;
    height: 10vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.alignHeader {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 240px;
}

.linksAlign {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 125px;
}

a {
  text-decoration: none;
  color: white;
  font-size: 2em;
}

#brand h1 {
    color: white;
    font-size: 3em;
    margin-left: 20px;
}

.linksAlign h1 {
    color: white;
    font-size: 1em;
}

#Home h1:hover, #Gallery h1:hover, #Tools h1:hover {
    color:darkgreen;
    cursor: pointer;
}




</style>