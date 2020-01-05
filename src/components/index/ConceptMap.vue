<template>
    <div class="concept-map">
       <el-popover
            placement="top-start"
            title="标题"
            width="200"
            trigger="hover"
            >
            <div>
              hya-solar-inverter
            </div>

            <a class="hya-solar hya-solar-inverter" slot="reference"></a>
       </el-popover>

       <el-popover
            placement="top-start"
            title="标题"
            width="200"
            trigger="hover"
            >
            <div>
              hya-remote-system
            </div>
            <a class="hya-solar hya-remote-system" slot="reference">33333</a>
       </el-popover>

       <el-popover
            placement="top-start"
            title="标题"
            width="200"
            trigger="hover"
            >
            <div>
              1212121212
            </div>
            <a class="hya-solar hya-solar-inverter-2" slot="reference">4444</a>
       </el-popover>

       <el-popover
            placement="top-start"
            title="标题"
            width="200"
            trigger="hover"
            >
            <div>
              1212121212
            </div>
            <a class="hya-solar hya-submersible-pump" slot="reference">5555</a>
       </el-popover>

       <el-popover
            placement="top-start"
            title="标题"
            width="200"
            trigger="hover"
            >
            <div>
              1212121212
            </div>
            <a class="hya-solar field-irrigation" slot="reference">field-irrigation</a>
       </el-popover>

    </div>
</template>
<script>
export default {
    name: 'concept-map'
}
</script>
<style lang="less">
.concept-map {
   width: 858px;
   height: 893px;
   background-image: url('~/assets/images/Judentus.png');
   margin: 30px auto;
   position: relative;
   .hya-solar {
      width: 100px;
      height: 50px;
      position: absolute;
   }
   .hya-remote-system {
      top: 276px;
      left: 249px;
   }
   .hya-solar-inverter-2 {
      left: 400px;
      top: 314px;
   }
   .hya-solar-inverter {
      top: 308px;
      left: 79px;
   }
   .hya-submersible-pump {
      top: 467px;
      left: 123px;
   }
   .field-irrigation {
      right: 102px;
      top: 400px;
   }
}
</style>


