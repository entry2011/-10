//커뮤니티 블록은 0.5버전 입니다
//모든 코드는 2차 제작, 2차 배포 가능합니다
//커뮤니티 블록은 무료로 제공됩니다. (단,출처는남겨주세요!)
//커뮤니티 블록은 커뮤니티 블록뿐만 아니라 다른 블록도 추가됩니다.
Entry.staticBlocks = [
{
category: 'start',
blocks: [
'when_run_button_click',
'when_some_key_pressed',
'mouse_clicked',
'mouse_click_cancled',
'when_object_click',
'when_object_click_canceled',
'when_message_cast',
'message_cast',
'message_cast_wait',
'when_scene_start',
'start_scene',
'start_neighbor_scene',
'check_object_property',
'check_block_execution',
'switch_scope',
'is_answer_submited',
'check_lecture_goal',
'check_variable_by_name',
'show_prompt',
'check_goal_success',
'positive_number',
'negative_number',
'wildcard_string',
'wildcard_boolean',
'register_score',
],
},
{
category: 'flow',
blocks: [
'wait_second',
'repeat_basic',
'repeat_inf',
'repeat_while_true',
'stop_repeat',
'_if',
'if_else',
'wait_until_true',
'stop_object',
'restart_project',
'when_clone_start',
'create_clone',
'delete_clone',
'remove_all_clones',
],
},
{
category: 'moving',
blocks: [
'move_direction',
'bounce_wall',
'move_x',
'move_y',
'move_xy_time',
'locate_x',
'locate_y',
'locate_xy',
'locate_xy_time',
'locate',
'locate_object_time',
'rotate_relative',
'direction_relative',
'rotate_by_time',
'direction_relative_duration',
'rotate_absolute',
'direction_absolute',
'see_angle_object',
'move_to_angle',
],
},
{
category: 'looks',
blocks: [
'show',
'hide',
'dialog_time',
'dialog',
'remove_dialog',
'change_to_some_shape',
'change_to_next_shape',
'add_effect_amount',
'change_effect_amount',
'erase_all_effects',
'change_scale_size',
'set_scale_size',
'flip_x',
'flip_y',
'change_object_index',
],
},
{
category: 'brush',
blocks: [
'brush_stamp',
'start_drawing',
'stop_drawing',
'set_color',
'set_random_color',
'change_thickness',
'set_thickness',
'change_brush_transparency',
'set_brush_tranparency',
'brush_erase_all',
],
},
{
category: 'text',
blocks: ['text_blue', 'text_orange', 'text_Yello', 'text_gray ', 'text_flush'],
},
{
category: 'sound',
blocks: [
'sound_something_with_block',
'sound_something_second_with_block',
'sound_from_to',
'sound_something_wait_with_block',
'sound_something_second_wait_with_block',
'sound_from_to_and_wait',
'sound_volume_change',
'sound_volume_set',
'sound_silent_all',
],
},
{
category: 'judgement',
blocks: [
'is_clicked',
'is_press_some_key',
'reach_something',
'boolean_basic_operator',
'boolean_and_or',
'boolean_not',
],
},
{
category: 'calc',
blocks: [
'calc_basic',
'calc_rand',
'coordinate_mouse',
'coordinate_object',
'get_sound_volume',
'quotient_and_mod',
'calc_operation',
'get_project_timer_value',
'choose_project_timer_action',
'set_visible_project_timer',
'get_date',
'distance_something',
'get_sound_duration',
'get_user_name',
'length_of_string',
'combine_something',
'char_at',
'substring',
'index_of_string',
'replace_string',
'change_string_case',
],
},
{
category: 'variable',
blocks: [
'variableAddButton',
'listAddButton',
'ask_and_wait',
'get_canvas_input_value',
'set_visible_answer',
'get_variable',
'change_variable',
'set_variable',
'show_variable',
'hide_variable',
'value_of_index_from_list',
'add_value_to_list',
'remove_value_from_list',
'insert_value_to_list',
'change_value_list_index',
'length_of_list',
'is_included_in_list',
'show_list',
'hide_list',
],
},
{
category: 'func',
blocks: ['functionAddButton'],
},
{
category: 'analysis',
blocks: [
'analizyDataAddButton',
'append_row_to_table',
'insert_row_to_table',
'delete_row_from_table',
'set_value_from_table',
'get_table_count',
'get_value_from_table',
'calc_values_from_table',
'open_table_chart',
'close_table_chart',
],
},
{
category: 'ai_utilize',
blocks: [
'aiUtilizeBlockAddButton',
'aiUtilizeModelTrainButton',
'audio_title',
'check_microphone',
'speech_to_text_convert',
'speech_to_text_get_value',
'get_microphone_volume',
'tts_title',
'read_text',
'read_text_wait_with_block',
'set_tts_property',
'translate_title',
'get_translated_string',
'check_language',
'video_title',
'video_draw_webcam',
'video_check_webcam',
'video_flip_camera',
'video_set_camera_opacity_option',
'video_motion_value',
'video_toggle_model',
'video_is_model_loaded',
'video_number_detect',
'video_toggle_ind',
'video_body_part_coord',
'video_face_part_coord',
'video_detected_face_info',
],
},
{
category: 'expansion',
blocks: [
'expansionBlockAddButton',
'weather_title',
'check_weather',
'check_finedust',
'get_weather_data',
'get_current_weather_data',
'get_today_temperature',
'check_city_weather',
'check_city_finedust',
'get_city_weather_data',
'get_current_city_weather_data',
'get_today_city_temperature',
'festival_title',
'count_festival',
'get_festival_info',
'behaviorConductDisaster_title',
'count_disaster_behavior',
'get_disaster_behavior',
'behaviorConductLifeSafety_title',
'count_lifeSafety_behavior',
'get_lifeSafety_behavior',
],
},
{
category: 'arduino',
blocks: [
'arduino_reconnect',
'arduino_open',
'arduino_cloud_pc_open',
'arduino_connect',
'arduino_download_connector',
'download_guide',
'arduino_download_source',
'arduino_noti',
].concat(EntryStatic.DynamicHardwareBlocks),
}
];
EntryStatic.getAllBlocks = () => {
return Entry.staticBlocks;
}
const updateCategory = (category, options) => {
Entry.playground.mainWorkspace.blockMenu._generateCategoryView([
{ category: 'start', visible: true },
{ category: 'flow', visible: true },
{ category: 'moving', visible: true },
{ category: 'looks', visible: true },
{ category: 'brush', visible: true },
{ category: 'text', visible: true },
{ category: 'sound', visible: true },
{ category: 'judgement', visible: true },
{ category: 'calc', visible: true },
{ category: 'variable', visible: true },
{ category: 'func', visible: true },
{ category: 'analysis', visible: true },
{ category: 'ai_utilize', visible: true },
{ category: 'expansion', visible: true },
{ category: 'arduino', visible: false }, { category: category, visible: true }
]);
for (let i = 0; i < $('.entryCategoryElementWorkspace').length; i++) {
if (!($($('.entryCategoryElementWorkspace')[i]).attr('id') == 'entryCategorytext')) {
$($('.entryCategoryElementWorkspace')[i]).attr('class', 'entryCategoryElementWorkspace');
}
}
Entry.playground.blockMenu._categoryData = EntryStatic.getAllBlocks();
Entry.playground.blockMenu._generateCategoryCode(category);
if (options) {
if (options.background) {
$(`#entryCategory${category}`).css('background-image', 'url(' + options.background + ')');
$(`#entryCategory${category}`).css('background-repeat', 'no-repeat');
if (options.backgroundSize) {
$(`#entryCategory${category}`).css('background-size', options.backgroundSize + 'px');
}
}
if (options.name) {
$(`#entryCategory${category}`)[0].innerText = options.name
}
}
}
const addBlock = (blockname, template, color, params, _class, func, skeleton = 'basic') => {
Entry.block[blockname] = {
color: color.color,
outerLine: color.outerline,
skeleton: skeleton,
statement: [],
params: params.params,
events: {},
def: {
params: params.def,
type: blockname
},
paramsKeyMap: params.map,
class: _class ? _class : 'default',
func: func,
template: template
}
} // 블록 추가 시작

////////////////////
addBlock('post_report', '%1 제목과 %2 내용의 글을 제안 및 건의에 올리기%3', {
color: EntryStatic.colorSet.block.default.HARDWAR,
outerLine: EntryStatic.colorSet.block.darken.HARDWAR
}, {
params: [
{
type: 'Block',
accept: 'string'
},
{
type: 'Block',
accept: 'string'
},
{
type: 'Indicator',
img: 'block_icon/hardware_icon.svg',
size: 11,
}
],
def: [
{
type: 'text',
params: [`영자님! 궁금한게 있어요`]
},
{
type: 'text',
params: [`악용되면 이기능 삭제해주세요`]
},
null
],
map: {
TITLE: 0,
CONTENT: 1
}
}, 'text', (sprite, script) => {confirm("이 작품이 제안 및 건의에 글을 올릴려고 합니다. 허락하시나요? (허락한 이상 본인에게 책임이 있습니다)")
fetch('https://playentry.org/api/discuss/', {
method: 'POST',
body: `{ "images": [], "category": "report", "title": "${script.getValue('TITLE', script)}", "content": "${script.getValue('CONTENT', script)}", "groupNotice": false }`,
headers: {
'Content-Type': 'application/json'
}
})
return script.callReturn()
}) /////////////0.3//

////////////////////
addBlock('post_commu', '%1 제목과 %2 내용의 글을 엔트리이야기에 올리기%3', {
color: EntryStatic.colorSet.block.default.HARDWAR,
outerLine: EntryStatic.colorSet.block.darken.HARDWAR
}, {
params: [
{
type: 'Block',
accept: 'string'
},
{
type: 'Block',
accept: 'string'
},
{
type: 'Indicator',
img: 'block_icon/hardware_icon.svg',
size: 11,
}
],
def: [
{
type: 'text',
params: [`악용될시`]
},
{
type: 'text',
params: [`이기능삭제`]
},
null
],
map: {
TITLE: 0,
CONTENT: 1
}
}, 'text', (sprite, script) => {confirm("이 작품이 엔트리 이야기에 글을 올릴려고 합니다. 허락하시나요? (허락한 이상 본인에게 책임이 있습니다)")
fetch('https://playentry.org/api/discuss/', {
method: 'POST',
body: `{ "images": [], "category": "free", "title": "${script.getValue('TITLE', script)}", "content": "${script.getValue('CONTENT', script)}", "groupNotice": false }`,
headers: {
'Content-Type': 'application/json'
}
})
return script.callReturn()
}) ////////////0.5(onlythis)//

////////////////////
addBlock('post_////////////////////
addBlock('post_tips', '%1 제목과 %2 내용의 글을 노하우&팁에 올리기%3', {
color: EntryStatic.colorSet.block.default.HARDWAR,
outerLine: EntryStatic.colorSet.block.darken.HARDWAR
}, {
params: [
{
type: 'Block',
accept: 'string'
},
{
type: 'Block',
accept: 'string'
},
{
type: 'Indicator',
img: 'block_icon/hardware_icon.svg',
size: 11,
}
],
def: [
{
type: 'text',
params: [`이것을 알려드릴께요!`]
},
{
type: 'text',
params: [`악용되면 이기능 삭제바랍니다`]
},
null
],
map: {
TITLE: 0,
CONTENT: 1
}
}, 'text', (sprite, script) => {confirm("이 작품이 노하우&팁에 글을 올릴려고 합니다. 허락하시나요? (허락한 이상 본인에게 책임이 있습니다)")
fetch('https://playentry.org/api/discuss/', {
method: 'POST',
body: `{ "images": [], "category": "tips", "title": "${script.getValue('TITLE', script)}", "content": "${script.getValue('CONTENT', script)}", "groupNotice": false }`,
headers: {
'Content-Type': 'application/json'
}
})
return script.callReturn()
}) /////////////0.3//



////////////////////
addBlock('post_qna', '%1 제목과 %2 내용의 글을 묻고답하기에 올리기%3', {
color: EntryStatic.colorSet.block.default.HARDWAR,
outerLine: EntryStatic.colorSet.block.darken.HARDWAR
}, {
params: [
{
type: 'Block',
accept: 'string'
},
{
type: 'Block',
accept: 'string'
},
{
type: 'Indicator',
img: 'block_icon/hardware_icon.svg',
size: 11,
}
],
def: [
{
type: 'text',
params: [`궁금한것이 있어요!`]
},
{
type: 'text',
params: [`악용되면 이기능 삭제`]
},
null
],
map: {
TITLE: 0,
CONTENT: 1
}
}, 'text', (sprite, script) => {confirm("이 작품이 묻고답하기에 글을 올릴려고 합니다. 허락하시나요? (허락한 이상 본인에게 책임이 있습니다)")
fetch('https://playentry.org/api/discuss/', {
method: 'POST',
body: `{ "images": [], "category": "qna", "title": "${script.getValue('TITLE', script)}", "content": "${script.getValue('CONTENT', script)}", "groupNotice": false }`,
headers: {
'Content-Type': 'application/json'
}
})
return script.callReturn()
}) /////////////0.3//
// 블록 추가 끝


Entry.staticBlocks.push({
category: 'API', blocks: [
'fetch',
'array_number',
'array_length',
'json_key',
'json_length',
'post_commu',
'post_qna',
'get_browser',
'toast',
'console',
'console_clear',
'entry_console',
'entry_console_clear',
'change_var', 'entry_console_writing', 'finish',
'likeList', 'boost_mode', 'mouse','didScroll','scrollHandle','box','stop_button(click)_start','open_win','pc','PromptConfirm','user.username','change(X)','mypage'
]
});


updateCategory('API')

$('head').append(`
<style>
#entryCategoryAPI {
background-image: url(/lib/entry-js/images/hardware.svg);
background-repeat: no-repeat;
border-bottom-right-radius: 6px;
border-bottom-left-radius: 6px;
margin-bottom: 1px;
}
.entrySelectedCategory#entryCategoryAPI {
background-image: url(/lib/entry-js/images/hardware_on.svg);
background-color: #000;
border-color: #000;
color: #ffff;
}
</style>
`)

$('#entryCategoryAPI').append('커뮤니티'), alert("현재커뮤니티블럭은0.5입니다~(알림)"),console.log("커뮤니티블럭 작동이 시작되었습니다."),document.title = "커뮤니티블럭이정상작동되고있습니다.";
