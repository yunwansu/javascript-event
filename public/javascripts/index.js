let list = ["abc", "27"];

// row 추가 버튼에 click 이벤트를 등록한다.
$("#addRow").on('click', function(){
    // row 스트링을 만든다.
    let tr = "<tr><td>" + list[0] + "</td><td>" + list[1] + "</td></tr>";

    // myTable 테이블의 tbody 태그에 위에서 만든 스트링을 추가한다.
    $('#myTable tbody').append(tr);
});

// row 삭제 버튼에 click 이벤트를 등록한다.
$('#removeRow').on('click', function(){

    //myTable 테이블의 tbody 태그에 마지막 tr을 제거한다.
    $('#myTable tbody tr:last').remove();
});
