<template>
   <div class="main-product" >
      <article :style="{'backgroundImage': `url(${curImg}`}">
        <div class="main-area">
           <section class="left">
            <div class="nav-item" 
                v-for="(item,i) in productData" 
                :key="i"
                @mouseover=' curImg = item.image'
            >
            {{item.name}} 
                </div>
            </section> 
            <section class="right"></section> 
        </div>
      </article>
   </div>
</template>
<script>
export default {
   name: 'main-product',
   data() {
       return {
           productData: [
               
               {
                   name: '通用变频器',
                   image: '',
                   desc: '汇川技术Inoflex MD系列变频器，性能卓越、功能丰富、易用可靠，规格齐全。自2003年以来，我们已提供了80余万台变频器应用于工业自动化的各个领域，得到了客户的认可。'
               },
               {
                   name: '多机传动变频器',
                   image: '',
                   desc: '多机传动变频器是汇川技术自主研发的新一代低压多机传动引领者，是面向金属制品、印刷包装、纺织印染、化纤塑料、小型造纸及输送带、测试台等需要复杂多点传动系统的高性能应用产品，兼具模块化、高性能、高安全、高防护、灵活扩展和强大易用的特点。'
               },
               {
                   name: '高压变频器',
                   image: '',
                   desc: '汇川技术HD系列高压变频器，产品系列丰富，软硬件技术领先，满足通用领域、工艺应用领域、高端应用领域的不同需求，在钢铁、电力、煤矿、石化等行业得到广泛应用。'
               },
               {
                   name: '中型PLC',
                   image: '',
                   desc: '汇川中型PLC，凭借十余载的工控设备沉淀，打造出坚固可靠的工业大脑。使其在大规模控制的工厂自动化、产线自动化，过程控制自动化设备都十分适用。'
               }
           ], 
           curImg: ''
       }
   },
   created() {
      this.curImg = this.productData[0].image;
   }
}
</script>
<style lang="less">
.main-product {
  background-color: skyblue;
  > article {
    display: flex;
    height: 400px;
    background-size: cover;
    background-position: center top;
    .main-area {
        width: 1200px;
        margin: 0 auto;
    }
     .left {
         width: 250px;
         height: 400px;
         float: left;
         display: flex;
         flex-direction: column;
         .nav-item {
             background: #006ad8;
             color: #fff;
             flex: 1;
             display: flex;
             align-items: center;
             justify-content: center;
             font-size: 20px;
             cursor: pointer;
             &:hover {
                background: #2386ee;
             }
         }
     }
  }
}
</style>

