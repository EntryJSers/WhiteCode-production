import { GEHelper } from '../../graphicEngine/GEHelper';

module.exports = {
    getBlocks() {
        return {
            is_clicked: {
                color: EntryStatic.colorSet.block.default.JUDGE,
                outerLine: EntryStatic.colorSet.block.darken.JUDGE,
                skeleton: 'basic_boolean_field',
                statements: [],
                params: [
                    {
                        type: 'Text',
                        text: Lang.Blocks.JUDGEMENT_is_clicked,
                        color: '#FFF',
                    },
                ],
                events: {},
                def: {
                    params: [null],
                    type: 'is_clicked',
                },
                class: 'boolean_input',
                isNotFor: [],
                func(sprite, script) {
                    return Entry.stage.isClick;
                },
                syntax: {
                    js: [],
                    py: [
                        {
                            syntax: 'Entry.is_mouse_clicked()',
                            blockType: 'param',
                        },
                    ],
                },
            },
            is_press_some_key: {
                color: EntryStatic.colorSet.block.default.JUDGE,
                outerLine: EntryStatic.colorSet.block.darken.JUDGE,
                skeleton: 'basic_boolean_field',
                statements: [],
                params: [
                    {
                        type: 'Keyboard',
                        options: [
                            [Lang.Blocks.START_press_some_key_up, '38'],
                            [Lang.Blocks.START_press_some_key_down, '40'],
                            [Lang.Blocks.START_press_some_key_right, '39'],
                            [Lang.Blocks.START_press_some_key_left, '37'],
                            [Lang.Blocks.START_press_some_key_space, '32'],
                            [Lang.Blocks.START_press_some_key_enter, '13'],
                            ['ctrl', '17'],
                            ['shift', '16'],
                            ['alt', '18'],
                            ['tab', '9'],
                            ['esc', '27'],
                            ['back-space', '8'],
                            ['0', '48'],
                            ['1', '49'],
                            ['2', '50'],
                            ['3', '51'],
                            ['4', '52'],
                            ['5', '53'],
                            ['6', '54'],
                            ['7', '55'],
                            ['8', '56'],
                            ['9', '57'],
                            ['a', '65'],
                            ['b', '66'],
                            ['c', '67'],
                            ['d', '68'],
                            ['e', '69'],
                            ['f', '70'],
                            ['g', '71'],
                            ['h', '72'],
                            ['i', '73'],
                            ['j', '74'],
                            ['k', '75'],
                            ['l', '76'],
                            ['m', '77'],
                            ['n', '78'],
                            ['o', '79'],
                            ['p', '80'],
                            ['q', '81'],
                            ['r', '82'],
                            ['s', '83'],
                            ['t', '84'],
                            ['u', '85'],
                            ['v', '86'],
                            ['w', '87'],
                            ['x', '88'],
                            ['y', '89'],
                            ['z', '90'],
                        ],
                        value: 'next',
                        fontSize: 10,
                        bgColor: EntryStatic.colorSet.block.darken.JUDGE,
                        arrowColor: EntryStatic.colorSet.arrow.default.DEFAULT,
                    },
                    {
                        type: 'Text',
                        text: Lang.Blocks.JUDGEMENT_is_press_some_key_2,
                        color: '#FFF',
                    },
                ],
                events: {},
                def: {
                    params: ['81', null],
                    type: 'is_press_some_key',
                },
                pyHelpDef: {
                    params: ['A&value', null],
                    type: 'is_press_some_key',
                },
                paramsKeyMap: {
                    VALUE: 0,
                },
                class: 'boolean_input',
                isNotFor: [],
                func(sprite, script) {
                    const keycode = Number(script.getField('VALUE', script));
                    return Entry.pressedKeys.indexOf(keycode) >= 0;
                },
                syntax: {
                    js: [],
                    py: [
                        {
                            syntax: 'Entry.is_key_pressed(%1)',
                            blockType: 'param',
                            textParams: [
                                {
                                    type: 'Dropdown',
                                    value: 'next',
                                    options: [
                                        [Lang.Blocks.START_press_some_key_up, '38'],
                                        [Lang.Blocks.START_press_some_key_down, '40'],
                                        [Lang.Blocks.START_press_some_key_right, '39'],
                                        [Lang.Blocks.START_press_some_key_left, '37'],
                                        [Lang.Blocks.START_press_some_key_space, '32'],
                                        [Lang.Blocks.START_press_some_key_enter, '13'],
                                        ['ctrl', '17'],
                                        ['shift', '16'],
                                        ['alt', '18'],
                                        ['tab', '9'],
                                        ['esc', '27'],
                                        ['back-space', '8'],
                                        ['0', '48'],
                                        ['1', '49'],
                                        ['2', '50'],
                                        ['3', '51'],
                                        ['4', '52'],
                                        ['5', '53'],
                                        ['6', '54'],
                                        ['7', '55'],
                                        ['8', '56'],
                                        ['9', '57'],
                                        ['a', '65'],
                                        ['b', '66'],
                                        ['c', '67'],
                                        ['d', '68'],
                                        ['e', '69'],
                                        ['f', '70'],
                                        ['g', '71'],
                                        ['h', '72'],
                                        ['i', '73'],
                                        ['j', '74'],
                                        ['k', '75'],
                                        ['l', '76'],
                                        ['m', '77'],
                                        ['n', '78'],
                                        ['o', '79'],
                                        ['p', '80'],
                                        ['q', '81'],
                                        ['r', '82'],
                                        ['s', '83'],
                                        ['t', '84'],
                                        ['u', '85'],
                                        ['v', '86'],
                                        ['w', '87'],
                                        ['x', '88'],
                                        ['y', '89'],
                                        ['z', '90'],
                                    ],
                                    arrowColor: EntryStatic.colorSet.arrow.default.JUDGE,
                                    converter: Entry.block.converters.keyboardCode,
                                },
                            ],
                        },
                    ],
                },
            },
            reach_something: {
                color: EntryStatic.colorSet.block.default.JUDGE,
                outerLine: EntryStatic.colorSet.block.darken.JUDGE,
                skeleton: 'basic_boolean_field',
                statements: [],
                params: [
                    {
                        type: 'Text',
                        text: Lang.Blocks.JUDGEMENT_reach_something_1,
                        color: '#FFF',
                    },
                    {
                        type: 'DropdownDynamic',
                        value: null,
                        menuName: 'collision',
                        fontSize: 10,
                        bgColor: EntryStatic.colorSet.block.darken.JUDGE,
                        arrowColor: EntryStatic.colorSet.arrow.default.DEFAULT,
                    },
                    {
                        type: 'Text',
                        text: Lang.Blocks.JUDGEMENT_reach_something_2,
                        color: '#FFF',
                    },
                ],
                events: {},
                def: {
                    params: [null, null, null],
                    type: 'reach_something',
                },
                pyHelpDef: {
                    params: [null, 'A&value', null],
                    type: 'reach_something',
                },
                paramsKeyMap: {
                    VALUE: 1,
                },
                class: 'boolean_collision',
                isNotFor: [],
                func(sprite, script) {
                    if (sprite.getVisible && !sprite.getVisible()) {
                        return false;
                    }
                    const targetSpriteId = script.getField('VALUE', script);
                    const reg = /wall/;
                    const ath = 0.2;
                    const object = sprite.object;
                    const isWall = reg.test(targetSpriteId);
                    const collision = ndgmr.checkPixelCollision;
                    if (isWall) {
                        const wall = Entry.stage.wall;
                        switch (targetSpriteId) {
                            case 'wall':
                                return !!(
                                    collision(object, wall.up, ath, false) ||
                                    collision(object, wall.down, ath, false) ||
                                    collision(object, wall.left, ath, false) ||
                                    collision(object, wall.right, ath, false)
                                );
                            case 'wall_up':
                                return !!collision(object, wall.up, ath, false);
                            case 'wall_down':
                                return !!collision(object, wall.down, ath, false);
                            case 'wall_right':
                                return !!collision(object, wall.right, ath, false);
                            case 'wall_left':
                                return !!collision(object, wall.left, ath, false);
                        }
                    } else if (targetSpriteId === 'mouse') {
                        return GEHelper.hitTestMouse(object);
                    } else {
                        const targetSprite = Entry.container.getEntity(targetSpriteId);
                        if (targetSprite.type === 'textBox' || sprite.type === 'textBox') {
                            const targetBound = GEHelper.getTransformedBounds(targetSprite.object);
                            const bound = GEHelper.getTransformedBounds(object);
                            if (Entry.checkCollisionRect(bound, targetBound)) {
                                return true;
                            }
                            const clonedEntities = targetSprite.parent.clonedEntities;
                            for (let i = 0, len = clonedEntities.length; i < len; i++) {
                                const entity = clonedEntities[i];
                                if (entity.isStamp || !entity.getVisible()) {
                                    continue;
                                }
                                if (
                                    Entry.checkCollisionRect(
                                        bound,
                                        GEHelper.getTransformedBounds(entity.object)
                                    )
                                ) {
                                    return true;
                                }
                            }
                        } else {
                            if (
                                targetSprite.getVisible() &&
                                collision(object, targetSprite.object, ath, false)
                            ) {
                                return true;
                            }
                            const clonedEntities = targetSprite.parent.clonedEntities;
                            for (let i = 0, len = clonedEntities.length; i < len; i++) {
                                const entity = clonedEntities[i];
                                if (entity.isStamp || !entity.getVisible()) {
                                    continue;
                                }
                                if (collision(object, entity.object, ath, false)) {
                                    return true;
                                }
                            }
                        }
                    }
                    return false;
                },
                syntax: {
                    js: [],
                    py: [
                        {
                            syntax: 'Entry.is_touched(%2)',
                            blockType: 'param',
                            textParams: [
                                undefined,
                                {
                                    type: 'DropdownDynamic',
                                    value: null,
                                    menuName: 'collision',
                                    fontSize: 11,
                                    arrowColor: EntryStatic.colorSet.arrow.default.JUDGE,
                                    converter: Entry.block.converters.returnObjectOrStringValue,
                                    codeMap: 'Entry.CodeMap.Entry.reach_something[1]',
                                },
                            ],
                        },
                    ],
                },
            },
            boolean_basic_operator: {
                color: EntryStatic.colorSet.block.default.JUDGE,
                outerLine: EntryStatic.colorSet.block.darken.JUDGE,
                skeleton: 'basic_boolean_field',
                statements: [],
                params: [
                    {
                        type: 'Block',
                        accept: 'string',
                    },
                    {
                        type: 'Dropdown',
                        options: [
                            ['=', 'EQUAL'],
                            ['>', 'GREATER'],
                            ['<', 'LESS'],
                            ['≥', 'GREATER_OR_EQUAL'],
                            ['≤', 'LESS_OR_EQUAL'],
                        ],
                        value: 'EQUAL',
                        fontSize: 10,
                        bgColor: EntryStatic.colorSet.block.darken.JUDGE,
                        noArrow: true,
                    },
                    {
                        type: 'Block',
                        accept: 'string',
                    },
                ],
                events: {},
                def: {
                    params: [
                        {
                            type: 'text',
                            params: ['10'],
                        },
                        'EQUAL',
                        {
                            type: 'text',
                            params: ['10'],
                        },
                    ],
                    type: 'boolean_basic_operator',
                },
                pyHelpDef: {
                    params: [
                        {
                            type: 'text',
                            params: ['A&value'],
                        },
                        'EQUAL',
                        {
                            type: 'text',
                            params: ['B&value'],
                        },
                    ],
                    type: 'boolean_basic_operator',
                },
                defs: [
                    {
                        params: [
                            {
                                type: 'text',
                                params: ['10'],
                            },
                            'EQUAL',
                            {
                                type: 'text',
                                params: ['10'],
                            },
                        ],
                        type: 'boolean_basic_operator',
                    },
                    {
                        params: [
                            {
                                type: 'text',
                                params: ['10'],
                            },
                            'GREATER',
                            {
                                type: 'text',
                                params: ['10'],
                            },
                        ],
                        type: 'boolean_basic_operator',
                    },
                    {
                        params: [
                            {
                                type: 'text',
                                params: ['10'],
                            },
                            'LESS',
                            {
                                type: 'text',
                                params: ['10'],
                            },
                        ],
                        type: 'boolean_basic_operator',
                    },
                    {
                        params: [
                            {
                                type: 'text',
                                params: ['10'],
                            },
                            'GREATER_OR_EQUAL',
                            {
                                type: 'text',
                                params: ['10'],
                            },
                        ],
                        type: 'boolean_basic_operator',
                    },
                    {
                        params: [
                            {
                                type: 'text',
                                params: ['10'],
                            },
                            'LESS_OR_EQUAL',
                            {
                                type: 'text',
                                params: ['10'],
                            },
                        ],
                        type: 'boolean_basic_operator',
                    },
                ],
                paramsKeyMap: {
                    LEFTHAND: 0,
                    OPERATOR: 1,
                    RIGHTHAND: 2,
                },
                class: 'boolean_compare',
                isNotFor: [],
                func(sprite, script) {
                    const operator = script.getField('OPERATOR', script);
                    let [leftValue, rightValue] = script.getValues(
                        ['LEFTHAND', 'RIGHTHAND'],
                        script
                    );
                    if (typeof leftValue === 'string' && leftValue.length) {
                        const leftNumber = Number(leftValue);
                        if (!isNaN(leftNumber)) {
                            leftValue = leftNumber;
                        }
                    }
                    if (typeof rightValue === 'string' && rightValue.length) {
                        const rightNumber = Number(rightValue);
                        if (!isNaN(rightNumber)) {
                            rightValue = rightNumber;
                        }
                    }

                    switch (operator) {
                        case 'EQUAL':
                            return leftValue === rightValue;
                        case 'GREATER':
                            return leftValue > rightValue;
                        case 'LESS':
                            return leftValue < rightValue;
                        case 'GREATER_OR_EQUAL':
                            return leftValue >= rightValue;
                        case 'LESS_OR_EQUAL':
                            return leftValue <= rightValue;
                    }
                },
                syntax: {
                    js: [],
                    py: [
                        {
                            syntax: '(%1 %2 %3)',
                            template: '%1 %2 %3',
                            keyOption: 'boolean_basic_operator',
                            blockType: 'param',
                            textParams: [
                                {
                                    type: 'Block',
                                    accept: 'string',
                                },
                                {
                                    type: 'Dropdown',
                                    options: [
                                        ['=', 'EQUAL'],
                                        ['>', 'GREATER'],
                                        ['<', 'LESS'],
                                        ['≥', 'GREATER_OR_EQUAL'],
                                        ['≤', 'LESS_OR_EQUAL'],
                                    ],
                                    value: 'EQUAL',
                                    fontSize: 11,
                                    noArrow: true,
                                    converter: Entry.block.converters.returnOperator,
                                },
                                {
                                    type: 'Block',
                                    accept: 'string',
                                },
                            ],
                        },
                    ],
                },
            },
            boolean_and_or: {
                color: EntryStatic.colorSet.block.default.JUDGE,
                outerLine: EntryStatic.colorSet.block.darken.JUDGE,
                skeleton: 'basic_boolean_field',
                statements: [],
                params: [
                    {
                        type: 'Block',
                        accept: 'boolean',
                    },
                    {
                        type: 'Dropdown',
                        options: [
                            [Lang.Blocks.JUDGEMENT_boolean_and, 'AND'],
                            [Lang.Blocks.JUDGEMENT_boolean_or, 'OR'],
                        ],
                        value: 'AND',
                        fontSize: 10,
                        bgColor: EntryStatic.colorSet.block.darken.JUDGE,
                        arrowColor: EntryStatic.colorSet.arrow.default.DEFAULT,
                    },
                    {
                        type: 'Block',
                        accept: 'boolean',
                    },
                ],
                events: {},
                def: {
                    params: [{ type: 'True' }, 'AND', { type: 'True' }],
                    type: 'boolean_and_or',
                },
                defs: [
                    {
                        params: [{ type: 'True' }, 'AND', { type: 'True' }],
                        type: 'boolean_and_or',
                    },
                    {
                        params: [{ type: 'True' }, 'OR', { type: 'False' }],
                        type: 'boolean_and_or',
                    },
                ],
                pyHelpDef: {
                    params: [
                        {
                            type: 'boolean_shell',
                            params: ['A'],
                        },
                        'AND',
                        {
                            type: 'boolean_shell',
                            params: ['B'],
                        },
                    ],
                    type: 'boolean_and_or',
                },
                paramsKeyMap: {
                    LEFTHAND: 0,
                    OPERATOR: 1,
                    RIGHTHAND: 2,
                },
                func(sprite, script) {
                    const operator = script.getField('OPERATOR', script);
                    let [leftValue, rightValue] = script.getValues(
                        ['LEFTHAND', 'RIGHTHAND'],
                        script
                    );
                    leftValue = Boolean(leftValue);
                    rightValue = Boolean(rightValue);

                    if (operator === 'AND') {
                        return leftValue && rightValue;
                    } else {
                        return leftValue || rightValue;
                    }
                },
                syntax: {
                    js: [],
                    py: [
                        {
                            syntax: '(%1 %2 %3)',
                            template: '%1 %2 %3',
                            blockType: 'param',
                            textParams: [
                                {
                                    type: 'Block',
                                    accept: 'boolean',
                                },
                                {
                                    type: 'Dropdown',
                                    options: [
                                        [Lang.Blocks.JUDGEMENT_boolean_and, 'AND'],
                                        [Lang.Blocks.JUDGEMENT_boolean_or, 'OR'],
                                    ],
                                    converter: Entry.block.converters.returnOperator,
                                    value: 'AND',
                                    fontSize: 11,
                                },
                                {
                                    type: 'Block',
                                    accept: 'boolean',
                                },
                            ],
                        },
                    ],
                },
            },
            boolean_not: {
                color: EntryStatic.colorSet.block.default.JUDGE,
                outerLine: EntryStatic.colorSet.block.darken.JUDGE,
                skeleton: 'basic_boolean_field',
                statements: [],
                params: [
                    {
                        type: 'Text',
                        text: Lang.Blocks.JUDGEMENT_boolean_not_1,
                        color: '#FFF',
                    },
                    {
                        type: 'Block',
                        accept: 'boolean',
                    },
                    {
                        type: 'Text',
                        text: Lang.Blocks.JUDGEMENT_boolean_not_2,
                        color: '#FFF',
                    },
                ],
                events: {},
                def: {
                    params: [null, { type: 'True' }, null],
                    type: 'boolean_not',
                },
                pyHelpDef: {
                    params: [null, { type: 'boolean_shell' }, null],
                    type: 'boolean_not',
                },
                paramsKeyMap: {
                    VALUE: 1,
                },
                class: 'boolean',
                isNotFor: [],
                func(sprite, script) {
                    return !script.getBooleanValue('VALUE', script);
                },
                syntax: {
                    js: [],
                    py: [
                        {
                            syntax: 'not (%2)',
                            template: 'not %2',
                            blockType: 'param',
                            textParams: [
                                undefined,
                                {
                                    type: 'Block',
                                    accept: 'Boolean',
                                },
                            ],
                        },
                    ],
                },
            },
        };
    },
};