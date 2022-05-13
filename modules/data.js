const pages = [
    `
    <h1 class="h1">Вектора</h1>
    <div class="info">
        Если начало и конец вектора совпадают, то такой вектор называется <b>нулевым</b>. Чаще всего нулевой вектор обозначается как O. Векторы называются <b>коллинеарными</b>, если они лежат либо на одной прямой, либо на параллельных прямых
    </div>
    <div class="div_image_info">
        <img class="image_info" src="/png/kollinearnye_vektory_434.gif">
    </div>
    <div class="info">
        Два коллинеарных вектора называются сонаправленными, если их направления совпадают. Два коллинеарных вектора называются противоположно направленными, если их направления противоположны:
    </div>
    <div class="div_image_info">
        <img class="image_info" src="/png/formules_435.gif">
    </div>
    <div class="info">
        Векторы называются компланарными, если они параллельны одной плоскости или лежат в одной плоскости
    </div>
    <div class="div_image_info">
        <img class="image_info" src="/png/komplanarnye_vektory_436.gif">
    </div>
    <div class="info">
        Длиной (модулем) вектора называется расстояние между его началом и концом
    </div>
    <div class="info">
        Вектор, длина которого равна единице, называется единичным вектором или ортом. Векторы называются равными, если они лежат на одной или параллельных прямых; их направления совпадают и длины равны. Иначе говоря, два вектора равны, если они коллинеарны, сонаправлены и имеют равные длины:
    </div>
   `,

`  
<h1 class="h1">Сложение и вычитание векторов.</h1>
<div class="info">
    Линейными операциями над векторами называются операции сложения векторов и умножения вектора на число.
</div>

<div class="info">
    Сложение векторов осуществляется по правилу треугольника.
</div>
<div class="info">
    Суммой двух векторов A и B называют такой третий вектор C, начало которого совпадает с началом A, а конец - с концом B при условии, что конец вектора B и начало вектора совпадают 
</div>
<div class="div_image_info">
    <img class="image_info" src="/png/slozhenie_vektorov_pravilo_treugolnika_476.gif">
</div>
<div class="info">
    Правило параллелограмма - если два неколлинеарных вектора A и B привести к общему началу, то вектор C = A + B совпадает с диагональю параллелограмма, построенного на векторах A и B. Причем начало вектора C совпадает с началом заданных векторов.
</div>
<div class="div_image_info">
    <img class="image_info" src="/png/slozhenie_vektorov_pravilo_parallelogramma_477.gif">
</div>
<div class="info">
    Вектор  -A называется противоположным вектором к вектору A, если он коллинеарен вектору A, равен ему по длине, но направлен в противоположную сторону вектору A.
</div>
<div class="div_image_info">
    <img class="image_info" src="/png/Screenshot_16.jpg">
</div>
<div class="info"> 
    Разностью A - B  векторов A и B называется вектор C такой, что выполняется условие: B + C = A
</div>
<div class="div_image_info">
    <img class="image_info" src="/png/raznost_vektorov_478.gif">
</div>
   `,

`   
<h1 class="h1">Уравнение окружности</h1>
<div class="info">
    Окружность есть геометрическое место точек с одним определенным свойством (каждая точка окружности равноудалена от одной точки, называется центром). Уравнение окружности должно отражать это свойство, удовлетворять этому условию. Геометрическая интерпретация уравнения окружности – это линия окружности. Если поместить окружность в систему координат, то все точки окружности удовлетворяют одному условию – расстояние от них до центра окружности должно быть одинаковым и равным окружности.
</div>
<div class="info">
    Окружность с центром в точке А и радиусом R поместим в координатную плоскость. Если координаты центра (а;b), а координаты любой точки окружности (х; у), то уравнение окружности имеет вид:
</div>

<div class="div_image_info">
    <img class="image_info" src="/png/Eqn116.gif">
</div>
<div class="info">
    Если квадрат радиуса окружности равен сумме квадратов разностей соответствующих координат любой точки окружности и ее центра, то это уравнение является уравнением окружности в плоской системе координат.
</div>
<div class="info">
    Если центр окружности совпадает с точкой начала координат, то квадрат радиуса окружности равен сумме квадратов координат любой точки окружности. В этом случае уравнение окружности принимает вид:
</div>
<div class="div_image_info">
    <img class="image_info" src="/png/Eqn115.gif">
</div>
<div class="info">
    Следовательно, любая геометрическая фигура как геометрическое место точек определяется уравнением, связывающим координаты ее точек. И наоборот, уравнение, связывающее координаты х и у, определяют линию как геометрическое место точек плоскости, координаты которых удовлетворяют данному уравнению.
</div>
   `,

`  
<h1 class="h1">Уравнение прямой</h1>
<div class="info">
    Уравнение, имеющее вид Ax+By+C=0 – это общее уравнение прямой на плоскости в прямоугольной системе координат Oxy.
</div>
<div class="info">
    Полное общее уравнение прямой – такое общее уравнение прямой Ax+By+C=0, в котором числа А, В, С отличны от нуля. В ином случае уравнение является неполным.
</div>

<div class="div_image_info">
    <img class="image_info" src="/png/Screenshot_1.jpg">
</div>
   `,

`  
<h1 class="h1">Синус, косинус и тангенс угла. </h1>
<div class="info">
    Синус острого угла в прямоугольном треугольнике – это отношение противолежащего катета к гипотенузе.
</div>
<div class="info">
    Косинус острого угла в прямоугольном треугольнике – это отношение прилежащего катета к гипотенузе.
</div>
<div class="info">
    Тангенс острого угла в прямоугольном треугольнике – это отношение противолежащего катета к прилежащему.
</div>
<div class="info">
    Котангенс острого угла в прямоугольном треугольнике – это отношение прилежащего катета к противолежащему.
</div>
<div class="div_image_info">
    <img class="image_info" src="/png/pict001.png">
</div>
<div class="info">
    Синус угла поворота α - это ордината точки A1, то есть, sinα=y.
</div>
<div class="info">
    Косинусом угла поворота α называют абсциссу точки A1, то есть, cosα=x.
</div>
<div class="info">
    Тангенс угла поворота α - это отношение ординаты точки A1 к ее абсциссе, то есть, tgα=y/x.
</div>
<div class="info">
    Котангенсом угла поворота α называют отношение абсциссы точки A1 к ее ординате, то есть, ctgα=x/y.
</div>
<div class="div_image_info">
    <img class="image_info" src="/png/slide-1.jpg">
</div>
<div class="div_image_info">
    <img class="image_info" src="/png/пп3.jpg">
</div>
   `,

`  
<h1 class="h1">Формулы площадей параллелограмма и треугольника </h1>
<div class="div_image_info">
    <img class="image_info" src="/png/пп3.jpg">
</div>
   `,

`  
<h1 class="h1">Теорема синусов </h1>
<div class="info">
    Стороны треугольника пропорциональны синусам противолежащих углов.
</div>
<div class="div_image_info">
    <img class="image_info" src="/png/Screenshot_3.jpg">
</div>
<div class="info">
    Теорема синусов устанавливает зависимость между сторонами треугольника и противолежащими им углами.
</div>
<div class="info">
    Для произвольного треугольника имеет место соотношение:
</div>
<div class="div_image_info">
    <img class="image_info" src="/png/Screenshot_4.jpg">
</div>
   `,

`  
<h1 class="h1">Теорема косинусов </h1>
<div class="info">
    Квадрат стороны треугольника равен сумме квадратов двух других сторон минус удвоенное произведение этих сторон на косинус угла между ними.
</div>
<div class="div_image_info">
    <img class="image_info" src="/png/Screenshot_5.jpg">
</div>
<div class="div_image_info">
    <img class="image_info" src="/png/Screenshot_6.jpg">
</div>
   `,

`  
<h1 class="h1">Правильный многоугольник</h1>
<div class="info">
    Выпуклый многоугольник называется правильным, если у него все стороны равны и все углы равны.
</div>
<div class="info">
    Центром правильного многоугольника называется точка, равноудаленная от всех его вершин и всех его сторон.
</div>
<div class="info">
    Центральным углом правильного многоугольника называется угол, под которым видна сторона из его центра.
</div>
<div class="div_image_info">
    <img class="image_info" src="/png/Screenshot_7.jpg">
</div>
   `,

`  
<h1 class="h1">Окружность, описанная около многоугольника</h1>
<div class="info">
    Окружность называется описанной около многоугольника, если все его вершины многоугольника лежат на этой окружности.
</div>
<div class="info">
    Около любого правильного многоугольника можно описать окружность, и притом только одну.
</div>

<div class="div_image_info">
    <img class="image_info" src="/png/Screenshot_7.jpg">
</div>
   `,

`  
<h1 class="h1">Окружность, вписанная в правильный многоугольник</h1>
<div class="info">
    Окружность называется вписанной в многоугольник, если все стороны многоугольника касаются этой окружности
</div>
<div class="info">
    В любой правильный многоугольник можно вписать окружность, и притом только одну.
</div>
<div class="info">
    Окружность, вписанная в правильный многоугольник, касается всех сторон многоугольника в их серединах.
</div>
<div class="info">
    Центр окружности, описанной около правильного многоугольника, совпадает с центром окружности, вписанной в тот же многоугольник
</div>
<div class="div_image_info">
    <img class="image_info" src="/png/Screenshot_7.jpg">
</div>
   `,

`  
<h1 class="h1">Длина окружности </h1>
<div class="info">
    Длину окружности можно вычислить по двум формулам: C = 2πr или C = πd, где π – число «пи» (математическая константа, приблизительно равная 3,14) , r – радиус окружности, d – диаметр окружности.
</div>
<div class="div_image_info">
    <img class="image_info" src="/png/circle.jpg">
</div>
   `,

`  
<h1 class="h1">Площадь круга</h1>
<div class="info">
    S = πxr^2, где r — это радиус, π — это константа, которая выражает отношение длины окружности к диаметру, она приблизительно равна 3,14.
</div>
<div class="div_image_info">
    <img class="image_info" src="/png/круг1.JPG">
</div>
<div class="info">
    S = d2:4x*π, где d — это диаметр.
</div>
<div class="div_image_info">
    <img class="image_info" src="/png/круг2.JPG">
</div>
<div class="info">
    S = L^2:(4xπ), где L — это длина окружности.
</div>
<div class="div_image_info">
    <img class="image_info" src="/png/круг3.JPG">
</div>
   `
]

export default pages