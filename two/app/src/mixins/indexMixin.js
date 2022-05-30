export default {
    data() {
        return {
            defaultItems: [
                {name: 'Blue', color: 'blue'},
                {name: 'Orange', color: 'orange'},
                {name: 'Green', color: 'green'},
                {name: '#000000', color: '#000000'},
            ],
            rightItems: [
                {name: 'Grey', color: 'grey'},
            ],
            selected: {},
            copied: [],
            focusPosition: '',
            isDisabled: true,
            alertMessage: '6 items maximum'
        }
    },

    methods: {

        /**
         * Move item
         */
        toMove() {
            this.actionItemHandler(this.selected, this.focusPosition, true)
        },

        /**
         * Clear focus
         */
        clearFocus() {
            this.selected = null
            this.focusPosition = null
            this.isDisabled = true
        },

        /**
         * Copy by reference
         */
        toReference() {
            this.actionItemHandler(this.selected)
        },

        /**
         * Copy
         */
        toCopy() {
            this.actionItemHandler({...this.selected})
        },

        /**
         * Actions handler :
         *  add | copy by reference | copy | move
         * @param item
         * @param type
         * @param move
         */
        actionItemHandler: function (item, type = this.focusPosition, move = false) {
            if (this.rightItems.length < 6 && type === 'default') {
                this.rightItems.push(item)
                if (move) {
                    this.deleteItemHandler(type, item)
                }
            } else if (this.defaultItems.length < 6 && type === 'right') {
                this.defaultItems.push(item)
                if (move) {
                    this.deleteItemHandler(type, item)
                }
            } else {
                alert(this.alertMessage)
            }
            this.clearFocus()
        },

        /**
         * Delete focused item
         */
        toDelete() {
            this.deleteItemHandler(this.focusPosition, this.selected);
        },

        /**
         * Add focus on list
         *
         * @param elt
         * @param type
         */
        focusField(elt, type) {
            this.selected = elt;
            this.focusPosition = type
            this.isDisabled = false
        },

        /**
         * Add item to list
         *
         * @param type
         */
        toAdd(type) {
            let item = prompt('Add Item');
            this.actionItemHandler({name: item, color: item}, type)
        },

        /**
         * Remove item
         *
         * @param type
         * @param item
         */
        removeItem(type, item) {
            this.deleteItemHandler(type, item);
        },

        /**
         * Delete handler
         *  removeItem | deleteItem | toMove
         * @param type
         * @param item
         */
        deleteItemHandler: function (type, item) {
            type === 'default'
                ? this.defaultItems.splice(this.defaultItems.indexOf(item), 1)
                : this.rightItems.splice(this.rightItems.indexOf(item), 1);
            this.clearFocus()
        },
    }
}