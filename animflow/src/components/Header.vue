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
                            <h1 class="hover-underline-animation">Home</h1>
                        </RouterLink>
                    </div>
                    <div id="Gallery">
                        <RouterLink :to="{ name: 'gallery' }">
                            <h1 class="hover-underline-animation">Gallery</h1>
                        </RouterLink>
                    </div>
                    <div id="Tools">
                        <RouterLink :to="{ name: 'tools' }">
                            <h1 class="hover-underline-animation">Tools</h1>
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>



    </header>

</template>



<style scoped>

:root {
  --darkblue: #14007a;
  --blue: #1a009c;
  --lightblue: rgb(74, 255, 255);
  --pink: rgb(255, 40, 113);
}

header {
    width: 100%;
    margin: 0;
    position: fixed;
    top: 0;
    z-index: 200;
    background-image:linear-gradient(45deg, var(--lightblue), var(--blue));
    border-bottom: 2px solid black;
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

.hover-underline-animation {
  display: inline-block;
  position: relative;
}

.hover-underline-animation::after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: -7px;
  left: 0;
  background-color: #fff;
  transition: transform 0.25s ease-out;
}

.hover-underline-animation:hover::after {
  transform: scaleX(1);
}

.hover-underline-animation.center::after {
  transform-origin: bottom center;
}

.hover-underline-animation.center:hover::after {
  transform-origin: bottom center;
}



</style>