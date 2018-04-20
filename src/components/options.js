export default {
  instance: (type, text1, text2, data) => {
    return {
      chart: {
        type: type //'variablepie'
      },
      title: {
        floating: true,
        text: text1 //'江苏卫监'
      },
      subtitle: {
        text: text2 //'扇区长度（圆周方法）表示设备数量，宽度（纵向）表示机构数量'
      },
      tooltip: {
        headerFormat: '',
        pointFormat: '<span style="color:{point.color}">\u25CF</span>' + '城市名称: <b> {point.name}</b><br/>' +
          '设备数量: <b>{point.y}</b><br/>' +
          '机构数量: <b>{point.z}</b><br/>'
      },
      series: [{
        minPointSize: 10,
        innerSize: '50%',
        zMin: 0,
        name: 'countries',
        data: data,
      }]
    }
  },
  fn1: function (c) {
    // 环形图圆心
    console.log(c);
    var centerY = c.chartHeight / 2,
      titleHeight = parseInt(c.title.styles.fontSize);
    c.setTitle({
      y: centerY + titleHeight / 2
    });
  },
  fn2: function (c) {
    // 环形图圆心
    c.on('click', () => {
      console.log(c)
    })
  }
}
