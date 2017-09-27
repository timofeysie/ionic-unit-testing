import { TestBed, inject, async } from '@angular/core/testing';
import { Http, HttpModule, BaseRequestOptions, Response, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { AuthProvider } from './auth';
import {} from 'jasmine';

describe('Provider: Auth Provider', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
            ],
            providers: [
                AuthProvider,
                MockBackend,
                BaseRequestOptions,
                {
                    provide: Http, 
                    useFactory: (mockBackend, options) => {
                        return new Http(mockBackend, options);
                    },
                    deps: [MockBackend, BaseRequestOptions]
                }
            ],
            imports: [
                HttpModule
            ]
        }).compileComponents();

    }));

    it('checkKey should make a call to the server to check the validity of a key', inject([AuthProvider, MockBackend], (authProvider, mockBackend) => {
        let key = 'ewu0fef0ewuf08j3892jf98';
        let mockResponse = '{"isValid": true}';
        mockBackend.connections.subscribe((connection) => {
            connection.mockRespond(new Response(new ResponseOptions({
                body: mockResponse
            })));
        });
        let serverResponse; 
            authProvider.checkKey(key).subscribe((result) => {
        serverResponse = result;
        });

        expect(serverResponse.isValid).toBe(true);
    }));

});