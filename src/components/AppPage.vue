<template>
  <div class = "menu-section">
    <div class = "buffer">
      <h1>Appetizers</h1>
    </div>
    <div class = "right-side ">
      <div class = "food-box">
      <FoodItem class="food-list"  v-show="item.vegan === 'yes' && veganOnly === true" :key="item.name" v-for="(item) in items" :item="item" />
      <FoodItem class="food-list"  v-show="veganOnly === false" :key="item.name" v-for="(item) in items" :item="item" />
      </div>
   
    
    <div class = "picture-box">
      <RosterCard class="rostercard" :imagelink="require('../assets/images/zuchini.jpg')" :altname="'zuchini'" name = "Fried Zuchini" />
      <RosterCard class="rostercard" :imagelink="require('../assets/images/rolls.jpg')" :altname="'rolls'" name = "Pepperoni Rolls" />
      <RosterCard class="rostercard" :imagelink="require('../assets/images/vegan 2.jpg')" :altname="'vegan rolls'" name = "Vegan Pepperoni Rolls" />
    </div>
  </div>
  </div>
</template>

<script>
import RosterCard from './RosterCard.vue'
import FoodItem from './FoodItem.vue'
export default {
  name: 'AppPage',
  components: {
    FoodItem,
    RosterCard,
  },
  data() {
  return {
    sizeColumnWidth: '',
    foodColumnWidth: '',
    items: [
    { name: 'Breadsticks', price:'$6.00', vegan: 'yes' },
    { name: 'Cheese Sticks', price:'$7.00' },
    { name: 'Cheesy Bread Sticks', price:'$9.00', vegan: 'yes'  },
    { name: 'Chicken Tenders', price:'$9.00' },
    { name: 'Tenders and Fries', price:'$11.00' },
    { name: 'Fried Mushrooms', price:'$8.00' },
    { name: 'Fried Pickles', price:'$8.00', vegan: 'yes'  },
    { name: 'Fried Zucchini', price:'$8.00' },
    { name: 'Garlic Bread', price:'$3.00', vegan: 'yes'  },
    { name: 'Hot Pepper Balls', price:'$7.00' },
    { name: 'Mac n Cheese Bites', price:'$8.00' },
    { name: 'Onion Rings', price:'$7.00' },
    { name: 'Pretzel w Beer Cheese', price:'$8.00', vegan: 'yes'  },
    { name: 'Spinach Rolls', price:'$9.00', vegan: 'yes'  },
    { name: 'Buffalo Chicken Rolls', price:'$11.00', vegan: 'yes'  },
    { name: 'Pepperoni Rolls', price:'$9.00', vegan: 'yes'  },
    { name: 'Steak Rolls', price:'$11.00' },
    { name: 'Vegan Chili', price:'$6.00', vegan: 'yes'  },
    { name: 'Chili', price:'$6.00' },
    { name: 'Wedding Soup', price:'$6.00' },
    { name: 'Quart Chili', price:'$9.00' },
    { name: 'Quart Vegan Chili', price:'$9.00', vegan: 'yes'  },
    { name: 'Quart Wedding Soup', price:'$9.00' },
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
  width: 40%;
  min-width: fit-content;
  align-items: end;
  border-bottom:1px dashed white;
  margin: 0;
  padding: 0;
  grid-template-columns: v-bind('sizeColumnWidth');
}



.menu-section {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.food-box {
  width: 95%;
  height: 820px;
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




.picture-box {
  width: 95%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
@media (max-width: 1215.5px){
  .food-box{
    flex-wrap: nowrap;
  }
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
    grid-template-columns: v-bind('sizeColumnWidth') ;
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

  .food-box {
  flex-wrap: nowrap;
}
  }




  @media (max-width: 400.5px) {
    .menu-section {
      flex-direction: column;
      align-items: center;
    }
  }


</style>
