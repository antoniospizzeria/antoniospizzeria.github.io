<template>
  <div>
  <div class = "menu-section">
    <div class ="left-side">
      <h1>Wings & Fries</h1>
      <div class="mobile-styles">
        <div class="style-box">
          <h2>Sizes and Styles</h2>
            <SizePrice  class = "size-list" v-show="size.vegan === 'yes' && veganOnly === true" :key="size.name" v-for="(size) in sizes" :size="size"/>
            <SizePrice  class = "size-list" v-show="veganOnly === false" :key="size.name" v-for="(size) in sizes" :size="size"/>
          </div>
      </div>
    </div>
    <div class = "right-side ">
      <div class = "food-box">
        <div>
          <h2>Flavors</h2>
          <div class ="topping-list">
            <ToppingList class="topping-item" v-show="topping.vegan === 'yes' && veganOnly === true"  :key="topping.name" v-for="(topping) in toppings" :topping="topping" />
            <ToppingList class="topping-item" v-show="veganOnly === false"  :key="topping.name" v-for="(topping) in toppings" :topping="topping" />
          </div>
        </div>
        <div>
          <h2>Wing add ons</h2>
          <p>Celery, Ranch, Blue cheese</p>
        </div>
        <div>
          <h2>Fry add ons</h2>
        <div class="topping-list">
          <ToppingList class="topping-item"  v-show="mod.vegan === 'yes' && veganOnly === true" :key="mod.name" v-for="(mod) in mods" :topping="mod" />
          <ToppingList class="topping-item"  v-show="veganOnly === false" :key="mod.name" v-for="(mod) in mods" :topping="mod" />
        </div>
        </div>
      </div>
   
    
  
  </div>
  </div>
  <div class = "picture-box">
      <RosterCard :imagelink="require('../assets/images/cajun.jpg')" :altname="'cajun'" name = "Cajun Wings" />
      <RosterCard :imagelink="require('../assets/images/garlicparmwings.jpg')" :altname="'garlicparm'" name = "Garlic Parm Wings" />
    </div>
  </div>
</template>

<script>
import RosterCard from './RosterCard.vue'
import ToppingList from './ToppingList.vue'
import SizePrice from './SizePrice.vue'
import wingsize from '@/assets/MenuJSon/wingsize.json'
import wingsauce from '@/assets/MenuJSon/wingsauce.json'

export default {
  name: 'WingsPage',
  components: {
    ToppingList,
    SizePrice,
    RosterCard,
  },
  data() {
  return {
    sizeColumnWidth: '',
    foodColumnWidth: '',
    toppings: wingsauce,
    sizes: wingsize,

    mods: [
      {name: 'Chili', vegan: 'yes'},
      {name: 'Shredded Cheese', vegan: 'yes'},
      {name: 'Nacho Cheese',},
      {name: 'Bacon', vegan: 'yes'},
    ],
  }
},
  props: {
    msg: String,
    veganOnly: Boolean,
  },
  methods: {
  GetLengthOfLongestElement(arr) {
  var biggestNum = 0;

  for (var i = 0; i < arr.length; i++) {
    var obj = arr[i].name;
    if (obj.length > biggestNum) {
      biggestNum = obj.length;
    }
  }
  return biggestNum;
},
findlength() {
    this.sizeColumnWidth = this.GetLengthOfLongestElement(this.sizes)+'ch'
},

  },
beforeMount() {
this.findlength()
},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

img {
  height: 250px;
  width: 25%;
  object-fit: cover;
  margin: 10px;
  border: 2px solid #FFFAA1;
}

h2 {
  text-decoration: underline;
}
ul {
  display: block;
  padding: 0;
}
li {
  display: inline;
  margin: 0 5px;
}

.left-side {
  margin: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width:20%;
}

.right-side {
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width:100%;
}
.style-box {
  border: 3px double white;
  height: 1000px;
  border-radius: 10px;
  width: fit-content;
  margin-bottom:5px;
  height: fit-content;
}


.size-list {
  display: grid;
  width: 100%;
  column-gap:30px;
  text-align: left;
  margin:2px;
  grid-template-columns: v-bind('sizeColumnWidth') max-content;
  font-size: .75em;
}

.food-list {
  display: flex;
  width: 100%;
  flex-direction: column;
  flex-wrap: nowrap;
  border-bottom:1px dashed white;
  margin: 0;
  padding: 0;
}

.topping-list {
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0;
  margin-bottom: 50px;
  padding: 0;
}

.topping-item {
  margin-right: 4px;
}

.menu-section {
  width: 100%;
  height: 100%;
  display: flex;
}

.food-box {
  width: 100%;
  height: fit-content;
  border: 3px double white;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: nowrap;
  overflow-y: scroll;
}


.picture-box {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
}


/* Works on Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: #FFFAA1 rgb(164, 164, 164);
}

/* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 12px;
}

*::-webkit-scrollbar-track {
  background: rgba(25, 25, 25, 1);
}

*::-webkit-scrollbar-thumb {
  background-color: rgb(164, 164, 164);
  border-radius: 20px;
  border: 3px solid #FFFAA1;
}

@media (max-width: 1490.5px) {
    .menu-section {
      flex-direction: column;
      align-items: center;
    }
  }


@media (max-width: 991.5px) {
  h2 {
    margin-bottom: 10px;
  }
  .menu-section {
    flex-direction: column;
      align-items: center;
  }
  .left-side {
    width: 30%;
    margin: 5px;
    margin-top: 60px;
  }
  .mobile-styles {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
  .style-box {
    margin-right: 4px;
    height: fit-content;
    margin-left: 4px;
  }
  .right-side {
    width: 90%;
    flex-direction: column;
    justify-content: center;
  }
  .picture-box {
    justify-content: center;
  }
  }


</style>
