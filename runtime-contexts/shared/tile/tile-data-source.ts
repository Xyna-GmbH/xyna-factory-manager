/*
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * Copyright 2023 Xyna GmbH, Germany
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 */

import { Comparable } from '@zeta/base';
import { XcSelectionDataSource, XcSelectionModel, XcSortDirection, XcSortPredicate, XcTemplate } from '@zeta/xc';
import { XcColor } from '@zeta/xc/shared/xc-themeable.component';
import { Observable, Subject } from 'rxjs';

export interface iconData {
    color: XcColor;
    material: boolean;
    style: string;
    name: string;
    tooltip: string;
}

export interface TileItemInterface extends Comparable {
    getDetailTemplate(): XcTemplate;
    getLabel(): string;
    getCursiveLabel?(): string;
    getTooltip?(): string;
    getIcon?(): XcTemplate;
}

export class TileDataSource extends XcSelectionDataSource<TileItemInterface> {

    private left: TileItemInterface[];
    private right: TileItemInterface[];
    private _isSelected = true;
    private leftselected = true;

    constructor(selectionModel: XcSelectionModel<TileItemInterface>, leftitems: TileItemInterface[], rightitems: TileItemInterface[], public label: string = '') {
        super(selectionModel);
        this.leftitems = leftitems;
        this.rightitems = rightitems;
    }

    set leftitems(leftitems: TileItemInterface[]) {
        this.left = leftitems;
        this.left.sort(XcSortPredicate(XcSortDirection.asc, t => t.uniqueKey));
    }

    get leftitems(): TileItemInterface[] {
        return this.left;
    }

    set rightitems(rightitems: TileItemInterface[]) {
        this.right = rightitems;
        this.right.sort(XcSortPredicate(XcSortDirection.asc, t => t.uniqueKey));
    }

    get rightitems(): TileItemInterface[] {
        return this.right;
    }

    private readonly actionButton = new Subject<(void)>();

    get detailItem(): TileItemInterface {
        return this.hasDetail() ? this.selectionModel.selection[0] : undefined;
    }

    set detailItem(value: TileItemInterface)  {
        let selected = this.leftitems.find(item => item.equals(value));
        if (selected) {
            this.leftselected = true;
        } else {
            selected = this.rightitems.find(item => item.equals(value));
            this.leftselected = false;
        }

        this.selectionModel.combineOperations(() => {
            this._isSelected = false;
            this.selectionModel.clear();
            if (selected) {
                this.selectionModel.select(selected);
                this._isSelected = true;
            }
        });
    }

    get actionPressed(): Observable<void> {
        return this.actionButton.asObservable();
    }

    action() {
        this.actionButton.next();
    }

    hasDetail(): boolean {
        if (this._isSelected && !this.selectionModel.isEmpty()) {
            if (this.leftitems.find(item => item.equals(this.selectionModel.selection[0]))) {
                this.leftselected = true;
                return true;
            }
            if (this.rightitems.find(item => item.equals(this.selectionModel.selection[0]))) {
                this.leftselected = false;
                return true;
            }
        }
        this._isSelected = false;
        return false;
    }

    isLeftSelected(): boolean {
        return this.hasDetail() && this.leftselected;
    }

    isRightSelected(): boolean {
        return this.hasDetail() && !this.leftselected;
    }

    isSelected(item: TileItemInterface): boolean {
        return this.hasDetail() && this.detailItem.equals(item);
    }

    isEmpty() {
        return this.leftitems.length === 0 && this.rightitems.length === 0;
    }
}
