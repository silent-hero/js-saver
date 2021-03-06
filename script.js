$(document).ready()
{
    // [[1]] = only once
    var functionList = [[mainframeSectors, false], [frameColor, true], [showSphere, true], [showIframe, true]];
    var functionsToCall = [0, 0, 0];
    var screens = ["#screen-1", "#screen-2", "#screen-3"];

    var random = 0;
    var cycleRandom = Math.random();
    var updateInterval = 200;
    var block1height = 0;
    var sectorsGreen = 0;
    var sectorsRed = 0;
    var sectorsBlue = 0;
    var sectorsYellow = 0;
    var sectorsCount = 1200;

    var colors = ["lightcoral", "lightseagreen", "lightcyan", "white", "lightblue"];
    var wireSpheres = ["wire_sphere_1.gif", "wire_sphere_2.gif", "wire_sphere_3.gif", "wire_sphere_4.gif", "wire_sphere_5.gif", "wire_sphere_6.gif"];
    var youtubeIds = ["4XA7mBDGvnI", "yMPog5O0g8E", "0qHloLgGlio", "iF2UqsWGZ9o", "gXXUGZvYdzE", "vvbN-cWe0A0", "gXhvW3ViC3A"];

    var cycles1 = 0;
    var nextCycle = 1000;

    var text1 = "Donec ornare mattis facilisis. Fusce volutpat euismod augue in scelerisque. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent a justo eros. Phasellus luctus lacus magna, ut aliquet magna maximus ut. Praesent neque risus, hendrerit a luctus at, viverra nec nunc. Sed mollis orci sed augue lobortis porta. Praesent efficitur aliquet lorem, ac gravida elit pharetra et. Sed ultricies tempus condimentum. Nullam lacus ipsum, accumsan vel consequat ac, tincidunt id sem. Curabitur maximus metus ac vulputate pharetra. Etiam quis nibh lacus. Phasellus sit amet purus id sapien scelerisque volutpat. In vitae ornare sem. Nulla facilisi. Aenean sollicitudin ullamcorper eros ut tempus. Ut eros eros, egestas a sem at, porttitor vulputate eros. Ut nunc urna, facilisis vel commodo quis, blandit et dolor. Sed malesuada suscipit diam in scelerisque. Fusce rutrum lectus a quam rutrum, eget facilisis felis malesuada. Curabitur aliquam placerat augue a interdum. Nam lacinia ligula sed neque ultrices vestibulum. Nam eu nulla mi. Donec hendrerit feugiat posuere. Vivamus pharetra eros lacus, nec placerat lacus mattis nec. Quisque nec elementum urna. Mauris odio diam, blandit viverra massa eget, ornare hendrerit arcu. Nullam mauris libero, pellentesque ut ipsum id, placerat vehicula dolor. Mauris efficitur fringilla sollicitudin. Sed lobortis neque eget lacus facilisis euismod. Integer semper nec libero a vehicula. Cras at sem elementum neque volutpat viverra. Curabitur vehicula lorem ut purus tincidunt, non placerat tellus interdum. Duis at libero laoreet, facilisis nisi varius, suscipit sem. Quisque convallis blandit metus. Aliquam vitae tortor urna. Donec rutrum scelerisque condimentum. In commodo tristique purus, eget euismod nisi cursus id. Integer mattis ipsum in lobortis dignissim. Aliquam vehicula finibus nisi, at faucibus dolor eleifend vel. Nulla gravida lorem feugiat justo elementum sodales. Phasellus id ex auctor sapien placerat tincidunt vel non felis. Sed accumsan ex commodo, hendrerit justo a, facilisis erat. Aliquam purus magna, placerat vitae metus in, accumsan vehicula risus. Nunc aliquet turpis in rhoncus pretium. Ut massa risus, aliquet a mollis non, semper at tortor. Vivamus lacus justo, luctus quis tincidunt non, luctus sed lorem. Nullam dignissim et quam elementum sodales. Donec ipsum libero, dignissim sed mi at, scelerisque porta quam. Nulla semper leo a ligula ullamcorper, et eleifend enim lobortis. Sed vulputate erat orci, sed molestie felis maximus sit amet. Quisque ultricies maximus finibus. Sed elementum condimentum maximus. Vivamus cursus libero et tellus mattis, ac pretium nulla bibendum. Duis lobortis scelerisque leo, nec egestas sem suscipit ut. Suspendisse metus diam, sagittis vitae pretium finibus, lacinia nec augue. Cras rhoncus non augue a rhoncus. Cras a nunc eget neque tristique consequat tincidunt id purus. Quisque fringilla enim tortor, et condimentum lacus tempor sed. Pellentesque congue ipsum at lacus iaculis, ac viverra mi gravida. Mauris nec gravida libero. Fusce accumsan risus est, et fermentum ex feugiat sed. Quisque ut lorem ac dolor aliquet tempus ut a tellus. Quisque sit amet faucibus leo. Nam porttitor commodo turpis non interdum. Sed porttitor elit enim. Vivamus fermentum, risus at cursus feugiat, arcu nulla bibendum mi, in bibendum ante enim nec turpis. Aliquam cursus, arcu vel rutrum ullamcorper, dolor diam blandit nulla, at iaculis mauris nibh sed justo. Mauris ut ligula malesuada est venenatis aliquet. Cras sit amet nunc consectetur, fringilla mauris et, convallis purus. In ligula nulla, ultricies quis est sed, porta volutpat urna. Phasellus in nunc at libero suscipit ullamcorper. Cras iaculis finibus suscipit. Ut id venenatis ligula. Proin a enim in mi laoreet interdum. Vivamus tristique tortor et justo fermentum venenatis. Morbi ac facilisis justo. Cras porttitor leo non fringilla lobortis. Praesent semper volutpat enim, eget finibus nulla accumsan id. Nunc vehicula non ipsum sit amet accumsan. Phasellus at porta tellus. Sed maximus pellentesque dapibus. Morbi ut orci at quam posuere sagittis.";

    updateScreen();
    initialize();
}

function initialize()
{
    cycleRandom = Math.random();
    setNewFunctions();
}

function updateScreen()
{
    random = Math.random();

    for(var a = 0; a < functionsToCall.length; a++)
    {
        if(functionList[functionsToCall[a]][0] == frameColor)
        {
            setNewFunctions(a);
        }
        if(functionList[functionsToCall[a]][1] == true && cycles1 > 1 && $(screens[a] + "-child").html() != "")
        {
            continue;
        }

        functionList[functionsToCall[a]][0](screens[a]);
    }

    for(var a = 0; a < functionsToCall.length; a++)
    {
        for(var b = 0; b < functionsToCall.length; b++)
        {
            if(a != b && functionsToCall[a] == functionsToCall[b] && functionList.length >= 3)
            {
                clearScreens(screens[a]);
                setNewFunctions(a);
            }
        }
    }

    setTimeout(function()
    {
        cycles1++;
        updateScreen();
    }, 
    updateInterval);

    // new cycle
    if(cycles1 > nextCycle)
    {
        setNewFunctions();
        cycles1 = 0;
        cycleRandom = Math.random();
        clearScreens();
    }

}

function setNewFunctions(id = -1)
{
    if(id == -1)
    {
        for(var a = 0; a < functionsToCall.length; a++)
        {
            functionsToCall[a] = Math.floor(Math.random() * functionList.length);
        }
    }
    else
    {
        functionsToCall[id] = Math.floor(Math.random() * functionList.length);
    }

}

function clearScreens(which = "all")
{
    if(which == "all")
    {
        for(var a = 0; a < screens.length; a++)
        {
            $(screens[a] + "-child").html("");
        }
    }
    else
    {
        $(which + "-child").html("");
    }
    hideScreens()
}

function hideScreens()
{
   $("#mainframe-info").css("display", "none");
}

function frameColor(currentScreen)
{
    $(".border").each(function()
    {
        $(this).css("border", "solid 1px " + colors[Math.floor(cycleRandom * colors.length)]);
    });
}

function showSphere(currentScreen)
{
    var widthClass = "";
    var sphereCount = 2;
    var substract = 1;

    if($(currentScreen).width() / $(currentScreen).height() > 2)
    {
        substract = 2;
    }

    if(substract == 2)
    {
        widthClass = "width-25";
        sphereCount = 4;
    }
    else
    {
        widthClass = "width-50";
        sphereCount = 2;
    }

    var childDiv = $(currentScreen + "-child");
    childDiv.css("top", "0");
    var sphere = "<img class='float-left padding-bottom-10 padding-top-10 " + widthClass + " ' src='img/" + wireSpheres[Math.floor(Math.random() * wireSpheres.length)] + "' style='" + "height: " + $(currentScreen).height() + "px;" + "' />";

    for(var a = 0; a < sphereCount; a++)
    {
        childDiv.append($(sphere));
    }
}

function showIframe(currentScreen)
{
    var childDiv = $(currentScreen + "-child");
    var substract = 1;

    if($(currentScreen).width() / $(currentScreen).height() > 2)
    {
        substract = 2;
    }

    childDiv.css("top", "0");
    var iframe = "<iframe id='iframe' class='iframe overflow-hidden' src='https://www.youtube.com/embed/" + youtubeIds[Math.floor(Math.random() * youtubeIds.length)] + "?rel=0&autoplay=1&controls=0&showinfo=0&loop=1&iv_load_policy=3' frameborder='0'></iframe>";
    iframe = $(iframe);
    iframe.attr("height", $(currentScreen).height());
    iframe.attr("width", Math.floor($(currentScreen).width() / substract));
    childDiv.append(iframe);
}

function mainframeSectors(currentScreen)
{
    var childDiv = currentScreen + "-child";
    random = Math.random();

    // $("#screen-1").html(childDiv1 + currentChar);
    block1height = $(childDiv).height();
    
    if(cycles1 < sectorsCount)
    {
        $(childDiv).css("top", -(block1height - $(childDiv).parent().height()));
    }
    else
    {
        $(childDiv).css("top", -(block1height - $(childDiv).parent().height() - 18));
    }

    if(cycles1 > sectorsCount)
    {
        $(childDiv).children().first().remove();
    }

    if($("#mainframe-info").css("display") !== "block")
    {
        $("#mainframe-info").detach().prependTo(currentScreen);
        $("#mainframe-info").css("display", "block");
    }

    $("#green-sectors").html(sectorsGreen);
    $("#red-sectors").html(sectorsRed);
    $("#blue-sectors").html(sectorsBlue);
    $("#yellow-sectors").html(sectorsYellow);

    if(random > 0 && random <= 0.94)
    {
        $(childDiv).append("<span style='color: green;'> |||||| </span>");
        sectorsGreen++;
    }
    else if(random > 0.94 && random <= 0.95)
    {
        $(childDiv).append("<span style='color: red;'> |||||| </span>");
        sectorsRed++;
    }
    else if(random > 0.95 && random <= 0.96)
    {
        $(childDiv).append("<span style='color: yellow;'> |||||| </span>");
        sectorsYellow++;
    }
    else if(random > 0.96 && random <= 0.97)
    {
        $(childDiv).append("<span style='color: blue;'> |||||| </span>");
        sectorsBlue++;
    }
    else
    {
        $(childDiv).append("<span style='color: white;'> |||||| </span>");
    }

}



