$(function () {
    $("#btn").click(function () {
        var ansValue = $("[name=ans]:checked").val();
        if (ansValue == 1) {
            alert("你沒有做領導者的潛力，在朋友圈子裡卻常常是最受歡迎的人。因為你思想單純，沒有太多的心機，而且還有一副天生的熱心腸，總是大公無私的為別人著想。你出於真心對別人好，又善於協調各方面的人際關係，所以很容易得到朋友們的信任，在朋友當中有很好的口碑。但是，做人有時要多個心眼才行，否則被人利用你的善良就不好了。")
        } else if (ansValue == 2) {
            alert("你活潑可愛，風趣幽默，是朋友眼中的開心果。別人與你相處會感到輕鬆自然，就算到了全是陌生人的聚會上你也會吃得很開。但是你大大咧咧的性格會讓別人感到有點靠不住，因此向你袒露心聲的朋友並不多。如果你想得到更多的真心朋友，建議你在與別人交往的時候表現內斂一點，認真傾聽別人的感受，那麼別人才敢對你敞開心扉的。")
        } else if (ansValue == 3) {
            alert("你給人的感覺是孤芳自賞，不瞭解你的人可能覺得你不太順眼，因此很多剛認識的人在交往初期都不敢親近你。但是，當彼此相處過一段時間之後，他們就會發現你原來是一個用心對待朋友的人，外表的冷酷只是因為你不善言詞而已，因此你的朋友都是要經過長時間接觸才發展起來的。其實，只要你能對不熟悉的人也多一點笑容和親切的關心，相信你的人緣一定會更好。")
        } else if (ansValue == 4) {
            alert("你性格內向，與不熟悉的人交往會感到羞澀和不自然。在朋友圈子裡，你不愛出風頭，也不喜歡發表自己的見解和意見，因此常常會被別人忽略。為人低調不是不好，只是可能會喪失很多結交新朋友的機會。如果你想改變這種狀況，最好多點參加朋友之間的聚會，不要總是一副靦腆的表情，嘗試一下主動和別人搭訕吧，相信你的人緣馬上增加不少。")
        } else if (ansValue == 5) {
            alert("在朋友眼中，你是十足的大孩子，天真可愛，自然而不做作。也許因為這樣，一直以來朋友們都會有意無意的遷就你，造成了你很少顧慮別人的感受，只在乎自己的喜惡，因此有時會給人一種刁蠻任性的印象。其實你的人緣已經很不錯，但是如果你想更進一層樓的話，就要學會控制自己的情緒。不要忘記，除了你的父母，沒有人可以長期容忍你的壞脾氣。 ")
        } else if (ansValue == 6) {
            alert("你成熟而理智，對別人的防禦心很強，與人交往時的一言一行都是經過深思熟慮的結果，有時難免會讓人覺得你很深沉，愛耍心計。其實，你只是出於自我保護的本能，並沒有太多的害人之心。但是，別人不可能瞭解你的想法，對你有所誤會是很正常的。如果你想得到更多人的認可，就不要把自己搞得太刻意，多點與別人談心聊天，隨意一點才能令你增加人氣。")
        } else {
            alert("你沒選答案喔")
        }
    });
});