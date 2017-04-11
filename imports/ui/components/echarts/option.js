const option = {
    // title : {
    //     text: 'Entries',
    //     subtext: 'something'
    // },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['Promo 1','Promo 2','Promo 3']
    },
    theme: 'macarons',
    grid: {
      x: 40,
      y: 40,
      x2: 0,
      y2: 80
    },
    // toolbox: {
    //     show : true,
    //     feature : {
    //         mark : {show: true},
    //         dataView : {show: true, readOnly: false},
    //         magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
    //         restore : {show: true},
    //         saveAsImage : {show: true}
    //     }
    // },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['1','2','3','4','5','6','7']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'Promo 1',
            type:'line',
            smooth:true,
            itemStyle: {normal: {areaStyle: {color: '#FFB980',type: 'default'},lineStyle: {color: '#FFB980',type: 'dotted'}}},
            data:[10, 12, 21, 54, 260, 830, 710],

        },
        {
            name:'Promo 2',
            type:'line',
            smooth:true,
            itemStyle: {normal: {areaStyle: {color: '#CBBDE7', type: 'default'},lineStyle: {color: '#CBBDE7',type: 'dotted'}}},
            data:[30, 182, 434, 791, 390, 30, 10],

        },
        {
            name:'Promo 3',
            type:'line',
            smooth:true,
            itemStyle: {normal: {areaStyle: {color: '#6cd7d9',type: 'default'},lineStyle: {color: '#6cd7d9',type: 'dotted'}}},
            data:[1320, 1132, 601, 234, 120, 90, 20],

        }
    ]
};

export default option;
