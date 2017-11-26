/**
 * @license
 * Copyright (C) 2017 Patrice Le Gurun
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class SenderData implements InMemoryDbService {
    createDb() {
        const sender = [
            { id: 1, address: 'happy@foobar.test' },
            { id: 2, address: 'root@foobar.test' },
            { id: 3, address: 'root@foobar.lan.test' },
            { id: 4, address: 'sad@foobar.test' }
        ];
        return { sender };
    }
}
