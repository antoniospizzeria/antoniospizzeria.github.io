<template>
  <div class = "menu-section">
    <div class="menu-side">
        <div class = "buffer">
          <h1>Pasta</h1>
          <h4>All Pasta comes with side of garlic bread</h4>
        </div>
        <div class = "right-side ">
          <div class = "food-box">
          <SaladItem class="food-list" v-show="item.vegan === 'yes' && veganOnly === true" :key="item.name" v-for="(item) in items" :item="item" />
          <SaladItem class="food-list" v-show="veganOnly === false" :key="item.name" v-for="(item) in items" :item="item" />
          </div>
      </div>
    </div>
    <div class="menu-side">
      <div class = "buffer">
          <h1>Gyros</h1>
          <h4>All gyros served in a pita flat bread.</h4>
          <p>Add Feta cheese for $1</p>
        </div>
        <div class = "right-side ">
          <div class = "food-box">
          <SaladItem class="food-list" v-show="gyro.vegan === 'yes' && veganOnly === true" :key="gyro.name" v-for="(gyro) in gyros" :item="gyro" />
          <SaladItem class="food-list" v-show="veganOnly === false" :key="gyro.name" v-for="(gyro) in gyros" :item="gyro" />
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import SaladItem from './LimitedItem.vue'
export default {
  name: 'PastaPage',
  components: {
    SaladItem,
  },
  data() {
  return {
    sizeColumnWidth: '',
    foodColumnWidth: '',
    items: [
    { name: 'Penne Pasta',desc: 'Your choice of Marinara, Alfredo, or Aglio Olio.  Alfredo is not vegan.', price:'$10.00', vegan: 'yes' },
    { name: 'Baked Penne',desc: 'Penne baked with mozzarella and marinara ', price:'$11.00', vegan: 'yes' },
    { name: 'Chicken Alfredo',desc: 'Grilled Chicken with Alfredo Sauce', price:'$14.00' },
    { name: 'Chicken Parm Pasta',desc: 'Breaded Chicken with Mozzarella, Mozzarella, and Parmesan', price:'$14.00', vegan: 'yes' },
    { name: 'Stuffed Shells',desc: 'Baked with Marinara and Mozzarella Cheese', price:'$11.00' },
    ],
    gyros: [
    { name: 'Traditional Lamb Gyro', desc: 'Topped with lettuce, tomato, onion, and tzaziki sauce.', price:'$8.00' },
    { name: 'Chicken Gyro', desc: 'Topped with lettuce, tomato, onion, and tzaziki sauce.', price:'$8.00' },
    { name: 'Seitan Gyro', desc: 'Topped with lettuce, tomato, and onion', price:'$8.00', vegan: 'yes' },
    ]
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
    this.sizeColumnWidth = this.GetLengthOfLongestElement(this.items)+'ch'
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

ul {
  display: block;
  padding: 0;
}
li {
  display: inline;
  margin: 0 5px;
}
.right-side {
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.style-box {
  border: 3px double white;
  height: 1000px;
  border-radius: 10px;
  width: fit-content;
  margin-bottom:5px;
}


.food-list {
  display: grid;
  width: 80%;
  min-width: fit-content;
  align-items: end;
  border-bottom:1px dashed white;
  margin: 0;
  padding: 0;
  grid-template-columns: v-bind('sizeColumnWidth') inherit;
}



.menu-section {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.menu-side {
  width: 48%;

}

.food-box {
  width: 95%;
  height: fit-content;
  border: 3px double white;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  overflow-y: scroll;
}

@media (max-width: 1499.5px) {
.food-box {
  flex-wrap: nowrap;
}
}


.picture-box {
  width: 95%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

@media (max-width: 2056.5px) {
  .picture-box{
    flex-wrap: nowrap;
  }
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

@media (max-width: 1277.5px) {
  .food-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

@media (max-width: 991.5px) {
  h1 {
    margin-top: 55px;
  }
  h2 {
    margin-bottom: 10px;
  }
  .menu-section {
    flex-direction: column;
    flex-wrap: nowrap;
  }
  .menu-side {
    width: 98%
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
  .food-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    flex-direction: column;
   }
  }

  @media (max-width: 400.5px) {
    .menu-section {
      flex-direction: column;
      align-items: center;
    }
  }


</style>
