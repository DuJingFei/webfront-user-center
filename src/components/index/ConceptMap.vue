<template>
    <div class="concept-map">
       <el-popover
            placement="top-start"
            title="water storage"
            width="350"
            trigger="hover"
            >
            <div class="conceptmap-popover-content">
              <img :src='waterStorage.image' :alt='waterStorage.name' />
              {{waterStorage.desc}}
            </div>

            <a class="hya-solar hya-solar-inverter icon-hand" slot="reference"></a>
       </el-popover>

       <el-popover
            placement="top-start"
            title="标题"
            width="350"
            trigger="hover"
            >
            <div class="conceptmap-popover-content">
              <img :src='hyaSolar.image' :alt='hyaSolar.name' />
              {{hyaSolar.desc}}
            </div>
            <a class="icon-hand hya-solar hya-remote-system" slot="reference"></a>
       </el-popover>

       <el-popover
            placement="top-start"
            title="标题"
            width="350"
            trigger="hover"
            >
            <div class="conceptmap-popover-content">
              <img style='height:200px' :src='submersible.image' :alt='submersible.name' />
              {{submersible.desc}}
            </div>
            <a class="icon-hand hya-solar hya-solar-inverter-2" slot="reference"></a>
       </el-popover>
       <el-popover
            placement="top-start"
            title="标题"
            width="350"
            trigger="hover"
            >
            <div class="conceptmap-popover-content">
              <img style='height:200px' :src='intensification.image' :alt='intensification.name' />
              {{intensification.desc}}
            </div>
            <a class="icon-hand hya-solar field-irrigation" slot="reference"></a>
       </el-popover>

    </div>
</template>
<script>
export default {
    name: 'concept-map',
    data() {
      return {
        hyaSolar: {
          name: 'hyaSolar',
          image: require('../../assets/images/conceptMap/solarpanels.png'),
          desc: 'The GF solar panels are designed especially for the LPF pump motor unit. The power level from 160W to 360W ensures optimum efficiency of the complete LPF pump system – with up to 20% flow increase per day in small systems. The solar panels incorporate bypass diodes, which minimize power loss in case the panels are covered by patches of shadow, dirt, leaves or bird lettings. Wiring of the GF solar panels is easily done using the MC cable connectors.'
        },
        waterStorage: {
          name: 'water storage',
          image: require('../../assets/images/conceptMap/waterstorage.png'),
          desc: 'Introducing water storage to a solar water pumping system allows for increased seasonal demands to be met, or simply for overnight water availability without a generator or grid power.'
        },
        submersible: {
          name: 'Submersible',
          image: require('../../assets/images/conceptMap/Solarsubmersible.png'),
          desc: 'LPF Solar Submersible Pumps are fitted with a permanent magnet, brushless motor, Which enables the efficient use of energy from a wide range of supply options. The structure of motor with double shields poses no pollution risk to drinking water. The 3 external controllers provide users with a variety of options, while offering the MPPT function-Maximum Power Point Tracking, maximizing the utilization of power generated from the photovoltaic generator.'
        },
        intensification: {
          name: 'Submersible',
          image: require('../../assets/images/conceptMap/solarpanels.png'),
          desc: 'With the intensification of the current world energy crisis, HYA actively promotes the concept of new energy utilization and sustainable development- SP series solar pump products have emerged at the historic moment, and have built a good reputation since they were launched on the market. The inverter can convert the DC of the solar panel into AC and drive various water pumps. On sunny days, SP series solar pump system can continuously pump water. The water source is natural or special, such as rivers, lakes, wells or water channels.'
        }
      }
    }
}
</script>
<style lang="less">
.concept-map {
   width: 1000px;
   height: 514px;
   background-image: url('../../assets/images/priory.jpg');
   background-size: contain;
   margin: 30px auto;
   position: relative;
   .hya-solar {
      width: 32px;
      height: 32px;
      position: absolute;
   }
   .hya-remote-system {
      top: 300px;
      left: 262px;
   }
   .hya-solar-inverter-2 {
     left: 446px;
     top: 387px;
   }
   
   .hya-solar-inverter {
     top: 210px;
     left: 458px;
   }
   .hya-submersible-pump {
      top: 467px;
      left: 123px;
   }
   .field-irrigation {
      right: 578px;
      top: 296px;
   }
}
.conceptmap-popover-content {
  img {
     width: 100%;
     margin-bottom: 10px;
  }
}
</style>


