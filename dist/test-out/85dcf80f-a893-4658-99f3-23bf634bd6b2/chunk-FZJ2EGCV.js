import {
  DomSanitizer,
  NG_VALUE_ACCESSOR,
  init_forms,
  init_platform_browser
} from "./chunk-US4PCD67.js";
import {
  HttpClient,
  init_http
} from "./chunk-KMTMA6MF.js";
import {
  NgTemplateOutlet,
  init_common,
  isPlatformBrowser
} from "./chunk-TBDZK7FY.js";
import {
  ANIMATION_MODULE_TYPE,
  APP_ID,
  ApplicationRef,
  BehaviorSubject,
  CSP_NONCE,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ConnectableObservable,
  ContentChild,
  ContentChildren,
  DOCUMENT,
  DestroyRef,
  Directive,
  ElementRef,
  EnvironmentInjector,
  ErrorHandler,
  EventEmitter,
  FactoryTarget,
  HostAttributeToken,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  IterableDiffers,
  NgModule,
  NgZone,
  Observable,
  Optional,
  Output,
  PLATFORM_ID,
  QueryList,
  Renderer2,
  RendererFactory2,
  SecurityContext,
  SkipSelf,
  Subject,
  Subscription,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  afterNextRender,
  animationFrameScheduler,
  asapScheduler,
  auditTime,
  booleanAttribute,
  catchError,
  combineLatest,
  concat,
  core_exports,
  createComponent,
  debounceTime,
  distinctUntilChanged,
  effect,
  filter,
  finalize,
  forkJoin,
  forwardRef,
  fromEvent,
  init_core,
  init_esm,
  init_operators,
  inject,
  isObservable,
  isSignal,
  map,
  mapTo,
  merge,
  of,
  pairwise,
  share,
  shareReplay,
  signal,
  skip,
  startWith,
  switchMap,
  take,
  takeUntil,
  tap,
  throwError,
  untracked,
  ɵɵngDeclareClassMetadata,
  ɵɵngDeclareComponent,
  ɵɵngDeclareDirective,
  ɵɵngDeclareFactory,
  ɵɵngDeclareInjectable,
  ɵɵngDeclareInjector,
  ɵɵngDeclareNgModule
} from "./chunk-BSQ7UZGP.js";
import {
  __esm,
  __spreadValues
} from "./chunk-TTULUY32.js";

// node_modules/@angular/cdk/fesm2022/fake-event-detection-DWOdFTFz.mjs
function isFakeMousedownFromScreenReader(event) {
  return event.buttons === 0 || event.detail === 0;
}
function isFakeTouchstartFromScreenReader(event) {
  const touch = event.touches && event.touches[0] || event.changedTouches && event.changedTouches[0];
  return !!touch && touch.identifier === -1 && (touch.radiusX == null || touch.radiusX === 1) && (touch.radiusY == null || touch.radiusY === 1);
}
var init_fake_event_detection_DWOdFTFz = __esm({
  "node_modules/@angular/cdk/fesm2022/fake-event-detection-DWOdFTFz.mjs"() {
    "use strict";
  }
});

// node_modules/@angular/cdk/fesm2022/keycodes-CpHkExLC.mjs
var TAB, ENTER, SHIFT, CONTROL, ALT, ESCAPE, SPACE, PAGE_UP, PAGE_DOWN, END, HOME, LEFT_ARROW, UP_ARROW, RIGHT_ARROW, DOWN_ARROW, ZERO, NINE, A, Z, META, MAC_META;
var init_keycodes_CpHkExLC = __esm({
  "node_modules/@angular/cdk/fesm2022/keycodes-CpHkExLC.mjs"() {
    "use strict";
    TAB = 9;
    ENTER = 13;
    SHIFT = 16;
    CONTROL = 17;
    ALT = 18;
    ESCAPE = 27;
    SPACE = 32;
    PAGE_UP = 33;
    PAGE_DOWN = 34;
    END = 35;
    HOME = 36;
    LEFT_ARROW = 37;
    UP_ARROW = 38;
    RIGHT_ARROW = 39;
    DOWN_ARROW = 40;
    ZERO = 48;
    NINE = 57;
    A = 65;
    Z = 90;
    META = 91;
    MAC_META = 224;
  }
});

// node_modules/@angular/cdk/fesm2022/shadow-dom-B0oHn41l.mjs
function _supportsShadowDom() {
  if (shadowDomIsSupported == null) {
    const head = typeof document !== "undefined" ? document.head : null;
    shadowDomIsSupported = !!(head && (head.createShadowRoot || head.attachShadow));
  }
  return shadowDomIsSupported;
}
function _getShadowRoot(element) {
  if (_supportsShadowDom()) {
    const rootNode = element.getRootNode ? element.getRootNode() : null;
    if (typeof ShadowRoot !== "undefined" && ShadowRoot && rootNode instanceof ShadowRoot) {
      return rootNode;
    }
  }
  return null;
}
function _getFocusedElementPierceShadowDom() {
  let activeElement = typeof document !== "undefined" && document ? document.activeElement : null;
  while (activeElement && activeElement.shadowRoot) {
    const newActiveElement = activeElement.shadowRoot.activeElement;
    if (newActiveElement === activeElement) {
      break;
    } else {
      activeElement = newActiveElement;
    }
  }
  return activeElement;
}
function _getEventTarget(event) {
  return event.composedPath ? event.composedPath()[0] : event.target;
}
var shadowDomIsSupported;
var init_shadow_dom_B0oHn41l = __esm({
  "node_modules/@angular/cdk/fesm2022/shadow-dom-B0oHn41l.mjs"() {
    "use strict";
  }
});

// node_modules/@angular/cdk/fesm2022/platform-DNDzkVcI.mjs
var hasV8BreakIterator, Platform;
var init_platform_DNDzkVcI = __esm({
  "node_modules/@angular/cdk/fesm2022/platform-DNDzkVcI.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_common();
    try {
      hasV8BreakIterator = typeof Intl !== "undefined" && Intl.v8BreakIterator;
    } catch {
      hasV8BreakIterator = false;
    }
    Platform = class _Platform {
      _platformId = inject(PLATFORM_ID);
      // We want to use the Angular platform check because if the Document is shimmed
      // without the navigator, the following checks will fail. This is preferred because
      // sometimes the Document may be shimmed without the user's knowledge or intention
      /** Whether the Angular application is being rendered in the browser. */
      isBrowser = this._platformId ? isPlatformBrowser(this._platformId) : typeof document === "object" && !!document;
      /** Whether the current browser is Microsoft Edge. */
      EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
      /** Whether the current rendering engine is Microsoft Trident. */
      TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent);
      // EdgeHTML and Trident mock Blink specific things and need to be excluded from this check.
      /** Whether the current rendering engine is Blink. */
      BLINK = this.isBrowser && !!(window.chrome || hasV8BreakIterator) && typeof CSS !== "undefined" && !this.EDGE && !this.TRIDENT;
      // Webkit is part of the userAgent in EdgeHTML, Blink and Trident. Therefore we need to
      // ensure that Webkit runs standalone and is not used as another engine's base.
      /** Whether the current rendering engine is WebKit. */
      WEBKIT = this.isBrowser && /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
      /** Whether the current platform is Apple iOS. */
      IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !("MSStream" in window);
      // It's difficult to detect the plain Gecko engine, because most of the browsers identify
      // them self as Gecko-like browsers and modify the userAgent's according to that.
      // Since we only cover one explicit Firefox case, we can simply check for Firefox
      // instead of having an unstable check for Gecko.
      /** Whether the current browser is Firefox. */
      FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
      /** Whether the current platform is Android. */
      // Trident on mobile adds the android platform to the userAgent to trick detections.
      ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT;
      // Safari browsers will include the Safari keyword in their userAgent. Some browsers may fake
      // this and just place the Safari keyword in the userAgent. To be more safe about Safari every
      // Safari browser should also use Webkit as its layout engine.
      /** Whether the current browser is Safari. */
      SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
      constructor() {
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _Platform, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _Platform, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: Platform, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
  }
});

// node_modules/@angular/cdk/fesm2022/passive-listeners-esHZRgIN.mjs
function supportsPassiveEventListeners() {
  if (supportsPassiveEvents == null && typeof window !== "undefined") {
    try {
      window.addEventListener("test", null, Object.defineProperty({}, "passive", {
        get: () => supportsPassiveEvents = true
      }));
    } finally {
      supportsPassiveEvents = supportsPassiveEvents || false;
    }
  }
  return supportsPassiveEvents;
}
function normalizePassiveListenerOptions(options) {
  return supportsPassiveEventListeners() ? options : !!options.capture;
}
var supportsPassiveEvents;
var init_passive_listeners_esHZRgIN = __esm({
  "node_modules/@angular/cdk/fesm2022/passive-listeners-esHZRgIN.mjs"() {
    "use strict";
  }
});

// node_modules/@angular/cdk/fesm2022/element-x4z00URv.mjs
function coerceNumberProperty(value, fallbackValue = 0) {
  if (_isNumberValue(value)) {
    return Number(value);
  }
  return arguments.length === 2 ? fallbackValue : 0;
}
function _isNumberValue(value) {
  return !isNaN(parseFloat(value)) && !isNaN(Number(value));
}
function coerceElement(elementOrRef) {
  return elementOrRef instanceof ElementRef ? elementOrRef.nativeElement : elementOrRef;
}
var init_element_x4z00URv = __esm({
  "node_modules/@angular/cdk/fesm2022/element-x4z00URv.mjs"() {
    "use strict";
    init_core();
  }
});

// node_modules/@angular/cdk/fesm2022/focus-monitor-DUe99AIS.mjs
var INPUT_MODALITY_DETECTOR_OPTIONS, INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS, TOUCH_BUFFER_MS, modalityEventListenerOptions, InputModalityDetector, FocusMonitorDetectionMode, FOCUS_MONITOR_DEFAULT_OPTIONS, captureEventListenerOptions, FocusMonitor, CdkMonitorFocus;
var init_focus_monitor_DUe99AIS = __esm({
  "node_modules/@angular/cdk/fesm2022/focus-monitor-DUe99AIS.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_esm();
    init_operators();
    init_fake_event_detection_DWOdFTFz();
    init_keycodes_CpHkExLC();
    init_shadow_dom_B0oHn41l();
    init_platform_DNDzkVcI();
    init_passive_listeners_esHZRgIN();
    init_element_x4z00URv();
    INPUT_MODALITY_DETECTOR_OPTIONS = new InjectionToken("cdk-input-modality-detector-options");
    INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS = {
      ignoreKeys: [ALT, CONTROL, MAC_META, META, SHIFT]
    };
    TOUCH_BUFFER_MS = 650;
    modalityEventListenerOptions = {
      passive: true,
      capture: true
    };
    InputModalityDetector = class _InputModalityDetector {
      _platform = inject(Platform);
      _listenerCleanups;
      /** Emits whenever an input modality is detected. */
      modalityDetected;
      /** Emits when the input modality changes. */
      modalityChanged;
      /** The most recently detected input modality. */
      get mostRecentModality() {
        return this._modality.value;
      }
      /**
       * The most recently detected input modality event target. Is null if no input modality has been
       * detected or if the associated event target is null for some unknown reason.
       */
      _mostRecentTarget = null;
      /** The underlying BehaviorSubject that emits whenever an input modality is detected. */
      _modality = new BehaviorSubject(null);
      /** Options for this InputModalityDetector. */
      _options;
      /**
       * The timestamp of the last touch input modality. Used to determine whether mousedown events
       * should be attributed to mouse or touch.
       */
      _lastTouchMs = 0;
      /**
       * Handles keydown events. Must be an arrow function in order to preserve the context when it gets
       * bound.
       */
      _onKeydown = (event) => {
        if (this._options?.ignoreKeys?.some((keyCode) => keyCode === event.keyCode)) {
          return;
        }
        this._modality.next("keyboard");
        this._mostRecentTarget = _getEventTarget(event);
      };
      /**
       * Handles mousedown events. Must be an arrow function in order to preserve the context when it
       * gets bound.
       */
      _onMousedown = (event) => {
        if (Date.now() - this._lastTouchMs < TOUCH_BUFFER_MS) {
          return;
        }
        this._modality.next(isFakeMousedownFromScreenReader(event) ? "keyboard" : "mouse");
        this._mostRecentTarget = _getEventTarget(event);
      };
      /**
       * Handles touchstart events. Must be an arrow function in order to preserve the context when it
       * gets bound.
       */
      _onTouchstart = (event) => {
        if (isFakeTouchstartFromScreenReader(event)) {
          this._modality.next("keyboard");
          return;
        }
        this._lastTouchMs = Date.now();
        this._modality.next("touch");
        this._mostRecentTarget = _getEventTarget(event);
      };
      constructor() {
        const ngZone = inject(NgZone);
        const document2 = inject(DOCUMENT);
        const options = inject(INPUT_MODALITY_DETECTOR_OPTIONS, { optional: true });
        this._options = __spreadValues(__spreadValues({}, INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS), options);
        this.modalityDetected = this._modality.pipe(skip(1));
        this.modalityChanged = this.modalityDetected.pipe(distinctUntilChanged());
        if (this._platform.isBrowser) {
          const renderer = inject(RendererFactory2).createRenderer(null, null);
          this._listenerCleanups = ngZone.runOutsideAngular(() => {
            return [
              renderer.listen(document2, "keydown", this._onKeydown, modalityEventListenerOptions),
              renderer.listen(document2, "mousedown", this._onMousedown, modalityEventListenerOptions),
              renderer.listen(document2, "touchstart", this._onTouchstart, modalityEventListenerOptions)
            ];
          });
        }
      }
      ngOnDestroy() {
        this._modality.complete();
        this._listenerCleanups?.forEach((cleanup) => cleanup());
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _InputModalityDetector, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _InputModalityDetector, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: InputModalityDetector, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
    (function(FocusMonitorDetectionMode2) {
      FocusMonitorDetectionMode2[FocusMonitorDetectionMode2["IMMEDIATE"] = 0] = "IMMEDIATE";
      FocusMonitorDetectionMode2[FocusMonitorDetectionMode2["EVENTUAL"] = 1] = "EVENTUAL";
    })(FocusMonitorDetectionMode || (FocusMonitorDetectionMode = {}));
    FOCUS_MONITOR_DEFAULT_OPTIONS = new InjectionToken("cdk-focus-monitor-default-options");
    captureEventListenerOptions = normalizePassiveListenerOptions({
      passive: true,
      capture: true
    });
    FocusMonitor = class _FocusMonitor {
      _ngZone = inject(NgZone);
      _platform = inject(Platform);
      _inputModalityDetector = inject(InputModalityDetector);
      /** The focus origin that the next focus event is a result of. */
      _origin = null;
      /** The FocusOrigin of the last focus event tracked by the FocusMonitor. */
      _lastFocusOrigin;
      /** Whether the window has just been focused. */
      _windowFocused = false;
      /** The timeout id of the window focus timeout. */
      _windowFocusTimeoutId;
      /** The timeout id of the origin clearing timeout. */
      _originTimeoutId;
      /**
       * Whether the origin was determined via a touch interaction. Necessary as properly attributing
       * focus events to touch interactions requires special logic.
       */
      _originFromTouchInteraction = false;
      /** Map of elements being monitored to their info. */
      _elementInfo = /* @__PURE__ */ new Map();
      /** The number of elements currently being monitored. */
      _monitoredElementCount = 0;
      /**
       * Keeps track of the root nodes to which we've currently bound a focus/blur handler,
       * as well as the number of monitored elements that they contain. We have to treat focus/blur
       * handlers differently from the rest of the events, because the browser won't emit events
       * to the document when focus moves inside of a shadow root.
       */
      _rootNodeFocusListenerCount = /* @__PURE__ */ new Map();
      /**
       * The specified detection mode, used for attributing the origin of a focus
       * event.
       */
      _detectionMode;
      /**
       * Event listener for `focus` events on the window.
       * Needs to be an arrow function in order to preserve the context when it gets bound.
       */
      _windowFocusListener = () => {
        this._windowFocused = true;
        this._windowFocusTimeoutId = setTimeout(() => this._windowFocused = false);
      };
      /** Used to reference correct document/window */
      _document = inject(DOCUMENT);
      /** Subject for stopping our InputModalityDetector subscription. */
      _stopInputModalityDetector = new Subject();
      constructor() {
        const options = inject(FOCUS_MONITOR_DEFAULT_OPTIONS, {
          optional: true
        });
        this._detectionMode = options?.detectionMode || FocusMonitorDetectionMode.IMMEDIATE;
      }
      /**
       * Event listener for `focus` and 'blur' events on the document.
       * Needs to be an arrow function in order to preserve the context when it gets bound.
       */
      _rootNodeFocusAndBlurListener = (event) => {
        const target = _getEventTarget(event);
        for (let element = target; element; element = element.parentElement) {
          if (event.type === "focus") {
            this._onFocus(event, element);
          } else {
            this._onBlur(event, element);
          }
        }
      };
      monitor(element, checkChildren = false) {
        const nativeElement = coerceElement(element);
        if (!this._platform.isBrowser || nativeElement.nodeType !== 1) {
          return of();
        }
        const rootNode = _getShadowRoot(nativeElement) || this._document;
        const cachedInfo = this._elementInfo.get(nativeElement);
        if (cachedInfo) {
          if (checkChildren) {
            cachedInfo.checkChildren = true;
          }
          return cachedInfo.subject;
        }
        const info = {
          checkChildren,
          subject: new Subject(),
          rootNode
        };
        this._elementInfo.set(nativeElement, info);
        this._registerGlobalListeners(info);
        return info.subject;
      }
      stopMonitoring(element) {
        const nativeElement = coerceElement(element);
        const elementInfo = this._elementInfo.get(nativeElement);
        if (elementInfo) {
          elementInfo.subject.complete();
          this._setClasses(nativeElement);
          this._elementInfo.delete(nativeElement);
          this._removeGlobalListeners(elementInfo);
        }
      }
      focusVia(element, origin, options) {
        const nativeElement = coerceElement(element);
        const focusedElement = this._document.activeElement;
        if (nativeElement === focusedElement) {
          this._getClosestElementsInfo(nativeElement).forEach(([currentElement, info]) => this._originChanged(currentElement, origin, info));
        } else {
          this._setOrigin(origin);
          if (typeof nativeElement.focus === "function") {
            nativeElement.focus(options);
          }
        }
      }
      ngOnDestroy() {
        this._elementInfo.forEach((_info, element) => this.stopMonitoring(element));
      }
      /** Use defaultView of injected document if available or fallback to global window reference */
      _getWindow() {
        return this._document.defaultView || window;
      }
      _getFocusOrigin(focusEventTarget) {
        if (this._origin) {
          if (this._originFromTouchInteraction) {
            return this._shouldBeAttributedToTouch(focusEventTarget) ? "touch" : "program";
          } else {
            return this._origin;
          }
        }
        if (this._windowFocused && this._lastFocusOrigin) {
          return this._lastFocusOrigin;
        }
        if (focusEventTarget && this._isLastInteractionFromInputLabel(focusEventTarget)) {
          return "mouse";
        }
        return "program";
      }
      /**
       * Returns whether the focus event should be attributed to touch. Recall that in IMMEDIATE mode, a
       * touch origin isn't immediately reset at the next tick (see _setOrigin). This means that when we
       * handle a focus event following a touch interaction, we need to determine whether (1) the focus
       * event was directly caused by the touch interaction or (2) the focus event was caused by a
       * subsequent programmatic focus call triggered by the touch interaction.
       * @param focusEventTarget The target of the focus event under examination.
       */
      _shouldBeAttributedToTouch(focusEventTarget) {
        return this._detectionMode === FocusMonitorDetectionMode.EVENTUAL || !!focusEventTarget?.contains(this._inputModalityDetector._mostRecentTarget);
      }
      /**
       * Sets the focus classes on the element based on the given focus origin.
       * @param element The element to update the classes on.
       * @param origin The focus origin.
       */
      _setClasses(element, origin) {
        element.classList.toggle("cdk-focused", !!origin);
        element.classList.toggle("cdk-touch-focused", origin === "touch");
        element.classList.toggle("cdk-keyboard-focused", origin === "keyboard");
        element.classList.toggle("cdk-mouse-focused", origin === "mouse");
        element.classList.toggle("cdk-program-focused", origin === "program");
      }
      /**
       * Updates the focus origin. If we're using immediate detection mode, we schedule an async
       * function to clear the origin at the end of a timeout. The duration of the timeout depends on
       * the origin being set.
       * @param origin The origin to set.
       * @param isFromInteraction Whether we are setting the origin from an interaction event.
       */
      _setOrigin(origin, isFromInteraction = false) {
        this._ngZone.runOutsideAngular(() => {
          this._origin = origin;
          this._originFromTouchInteraction = origin === "touch" && isFromInteraction;
          if (this._detectionMode === FocusMonitorDetectionMode.IMMEDIATE) {
            clearTimeout(this._originTimeoutId);
            const ms = this._originFromTouchInteraction ? TOUCH_BUFFER_MS : 1;
            this._originTimeoutId = setTimeout(() => this._origin = null, ms);
          }
        });
      }
      /**
       * Handles focus events on a registered element.
       * @param event The focus event.
       * @param element The monitored element.
       */
      _onFocus(event, element) {
        const elementInfo = this._elementInfo.get(element);
        const focusEventTarget = _getEventTarget(event);
        if (!elementInfo || !elementInfo.checkChildren && element !== focusEventTarget) {
          return;
        }
        this._originChanged(element, this._getFocusOrigin(focusEventTarget), elementInfo);
      }
      /**
       * Handles blur events on a registered element.
       * @param event The blur event.
       * @param element The monitored element.
       */
      _onBlur(event, element) {
        const elementInfo = this._elementInfo.get(element);
        if (!elementInfo || elementInfo.checkChildren && event.relatedTarget instanceof Node && element.contains(event.relatedTarget)) {
          return;
        }
        this._setClasses(element);
        this._emitOrigin(elementInfo, null);
      }
      _emitOrigin(info, origin) {
        if (info.subject.observers.length) {
          this._ngZone.run(() => info.subject.next(origin));
        }
      }
      _registerGlobalListeners(elementInfo) {
        if (!this._platform.isBrowser) {
          return;
        }
        const rootNode = elementInfo.rootNode;
        const rootNodeFocusListeners = this._rootNodeFocusListenerCount.get(rootNode) || 0;
        if (!rootNodeFocusListeners) {
          this._ngZone.runOutsideAngular(() => {
            rootNode.addEventListener("focus", this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
            rootNode.addEventListener("blur", this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
          });
        }
        this._rootNodeFocusListenerCount.set(rootNode, rootNodeFocusListeners + 1);
        if (++this._monitoredElementCount === 1) {
          this._ngZone.runOutsideAngular(() => {
            const window2 = this._getWindow();
            window2.addEventListener("focus", this._windowFocusListener);
          });
          this._inputModalityDetector.modalityDetected.pipe(takeUntil(this._stopInputModalityDetector)).subscribe((modality) => {
            this._setOrigin(
              modality,
              true
              /* isFromInteraction */
            );
          });
        }
      }
      _removeGlobalListeners(elementInfo) {
        const rootNode = elementInfo.rootNode;
        if (this._rootNodeFocusListenerCount.has(rootNode)) {
          const rootNodeFocusListeners = this._rootNodeFocusListenerCount.get(rootNode);
          if (rootNodeFocusListeners > 1) {
            this._rootNodeFocusListenerCount.set(rootNode, rootNodeFocusListeners - 1);
          } else {
            rootNode.removeEventListener("focus", this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
            rootNode.removeEventListener("blur", this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
            this._rootNodeFocusListenerCount.delete(rootNode);
          }
        }
        if (!--this._monitoredElementCount) {
          const window2 = this._getWindow();
          window2.removeEventListener("focus", this._windowFocusListener);
          this._stopInputModalityDetector.next();
          clearTimeout(this._windowFocusTimeoutId);
          clearTimeout(this._originTimeoutId);
        }
      }
      /** Updates all the state on an element once its focus origin has changed. */
      _originChanged(element, origin, elementInfo) {
        this._setClasses(element, origin);
        this._emitOrigin(elementInfo, origin);
        this._lastFocusOrigin = origin;
      }
      /**
       * Collects the `MonitoredElementInfo` of a particular element and
       * all of its ancestors that have enabled `checkChildren`.
       * @param element Element from which to start the search.
       */
      _getClosestElementsInfo(element) {
        const results = [];
        this._elementInfo.forEach((info, currentElement) => {
          if (currentElement === element || info.checkChildren && currentElement.contains(element)) {
            results.push([currentElement, info]);
          }
        });
        return results;
      }
      /**
       * Returns whether an interaction is likely to have come from the user clicking the `label` of
       * an `input` or `textarea` in order to focus it.
       * @param focusEventTarget Target currently receiving focus.
       */
      _isLastInteractionFromInputLabel(focusEventTarget) {
        const { _mostRecentTarget: mostRecentTarget, mostRecentModality } = this._inputModalityDetector;
        if (mostRecentModality !== "mouse" || !mostRecentTarget || mostRecentTarget === focusEventTarget || focusEventTarget.nodeName !== "INPUT" && focusEventTarget.nodeName !== "TEXTAREA" || focusEventTarget.disabled) {
          return false;
        }
        const labels = focusEventTarget.labels;
        if (labels) {
          for (let i = 0; i < labels.length; i++) {
            if (labels[i].contains(mostRecentTarget)) {
              return true;
            }
          }
        }
        return false;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _FocusMonitor, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _FocusMonitor, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: FocusMonitor, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
    CdkMonitorFocus = class _CdkMonitorFocus {
      _elementRef = inject(ElementRef);
      _focusMonitor = inject(FocusMonitor);
      _monitorSubscription;
      _focusOrigin = null;
      cdkFocusChange = new EventEmitter();
      constructor() {
      }
      get focusOrigin() {
        return this._focusOrigin;
      }
      ngAfterViewInit() {
        const element = this._elementRef.nativeElement;
        this._monitorSubscription = this._focusMonitor.monitor(element, element.nodeType === 1 && element.hasAttribute("cdkMonitorSubtreeFocus")).subscribe((origin) => {
          this._focusOrigin = origin;
          this.cdkFocusChange.emit(origin);
        });
      }
      ngOnDestroy() {
        this._focusMonitor.stopMonitoring(this._elementRef);
        if (this._monitorSubscription) {
          this._monitorSubscription.unsubscribe();
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _CdkMonitorFocus, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _CdkMonitorFocus, isStandalone: true, selector: "[cdkMonitorElementFocus], [cdkMonitorSubtreeFocus]", outputs: { cdkFocusChange: "cdkFocusChange" }, exportAs: ["cdkMonitorFocus"], ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: CdkMonitorFocus, decorators: [{
      type: Directive,
      args: [{
        selector: "[cdkMonitorElementFocus], [cdkMonitorSubtreeFocus]",
        exportAs: "cdkMonitorFocus"
      }]
    }], ctorParameters: () => [], propDecorators: { cdkFocusChange: [{
      type: Output
    }] } });
  }
});

// node_modules/@angular/cdk/fesm2022/style-loader-B2sGQXxD.mjs
var appsWithLoaders, _CdkPrivateStyleLoader;
var init_style_loader_B2sGQXxD = __esm({
  "node_modules/@angular/cdk/fesm2022/style-loader-B2sGQXxD.mjs"() {
    "use strict";
    init_core();
    init_core();
    appsWithLoaders = /* @__PURE__ */ new WeakMap();
    _CdkPrivateStyleLoader = class __CdkPrivateStyleLoader {
      _appRef;
      _injector = inject(Injector);
      _environmentInjector = inject(EnvironmentInjector);
      /**
       * Loads a set of styles.
       * @param loader Component which will be instantiated to load the styles.
       */
      load(loader) {
        const appRef = this._appRef = this._appRef || this._injector.get(ApplicationRef);
        let data = appsWithLoaders.get(appRef);
        if (!data) {
          data = { loaders: /* @__PURE__ */ new Set(), refs: [] };
          appsWithLoaders.set(appRef, data);
          appRef.onDestroy(() => {
            appsWithLoaders.get(appRef)?.refs.forEach((ref) => ref.destroy());
            appsWithLoaders.delete(appRef);
          });
        }
        if (!data.loaders.has(loader)) {
          data.loaders.add(loader);
          data.refs.push(createComponent(loader, { environmentInjector: this._environmentInjector }));
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: __CdkPrivateStyleLoader, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: __CdkPrivateStyleLoader, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _CdkPrivateStyleLoader, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }] });
  }
});

// node_modules/@angular/cdk/fesm2022/private.mjs
var _VisuallyHiddenLoader;
var init_private = __esm({
  "node_modules/@angular/cdk/fesm2022/private.mjs"() {
    "use strict";
    init_style_loader_B2sGQXxD();
    init_core();
    init_core();
    _VisuallyHiddenLoader = class __VisuallyHiddenLoader {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: __VisuallyHiddenLoader, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0", type: __VisuallyHiddenLoader, isStandalone: true, selector: "ng-component", exportAs: ["cdkVisuallyHidden"], ngImport: core_exports, template: "", isInline: true, styles: [".cdk-visually-hidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap;outline:0;-webkit-appearance:none;-moz-appearance:none;left:0}[dir=rtl] .cdk-visually-hidden{left:auto;right:0}\n"], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _VisuallyHiddenLoader, decorators: [{
      type: Component,
      args: [{ exportAs: "cdkVisuallyHidden", encapsulation: ViewEncapsulation.None, template: "", changeDetection: ChangeDetectionStrategy.OnPush, styles: [".cdk-visually-hidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;white-space:nowrap;outline:0;-webkit-appearance:none;-moz-appearance:none;left:0}[dir=rtl] .cdk-visually-hidden{left:auto;right:0}\n"] }]
    }] });
  }
});

// node_modules/@angular/cdk/fesm2022/array-I1yfCXUO.mjs
function coerceArray(value) {
  return Array.isArray(value) ? value : [value];
}
var init_array_I1yfCXUO = __esm({
  "node_modules/@angular/cdk/fesm2022/array-I1yfCXUO.mjs"() {
    "use strict";
  }
});

// node_modules/@angular/cdk/fesm2022/breakpoints-observer-QutrMj4x.mjs
function createEmptyStyleRule(query, nonce) {
  if (mediaQueriesForWebkitCompatibility.has(query)) {
    return;
  }
  try {
    if (!mediaQueryStyleNode) {
      mediaQueryStyleNode = document.createElement("style");
      if (nonce) {
        mediaQueryStyleNode.setAttribute("nonce", nonce);
      }
      mediaQueryStyleNode.setAttribute("type", "text/css");
      document.head.appendChild(mediaQueryStyleNode);
    }
    if (mediaQueryStyleNode.sheet) {
      mediaQueryStyleNode.sheet.insertRule(`@media ${query} {body{ }}`, 0);
      mediaQueriesForWebkitCompatibility.add(query);
    }
  } catch (e) {
    console.error(e);
  }
}
function noopMatchMedia(query) {
  return {
    matches: query === "all" || query === "",
    media: query,
    addListener: () => {
    },
    removeListener: () => {
    }
  };
}
function splitQueries(queries) {
  return queries.map((query) => query.split(",")).reduce((a1, a2) => a1.concat(a2)).map((query) => query.trim());
}
var mediaQueriesForWebkitCompatibility, mediaQueryStyleNode, MediaMatcher, BreakpointObserver;
var init_breakpoints_observer_QutrMj4x = __esm({
  "node_modules/@angular/cdk/fesm2022/breakpoints-observer-QutrMj4x.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_esm();
    init_operators();
    init_platform_DNDzkVcI();
    init_array_I1yfCXUO();
    mediaQueriesForWebkitCompatibility = /* @__PURE__ */ new Set();
    MediaMatcher = class _MediaMatcher {
      _platform = inject(Platform);
      _nonce = inject(CSP_NONCE, { optional: true });
      /** The internal matchMedia method to return back a MediaQueryList like object. */
      _matchMedia;
      constructor() {
        this._matchMedia = this._platform.isBrowser && window.matchMedia ? (
          // matchMedia is bound to the window scope intentionally as it is an illegal invocation to
          // call it from a different scope.
          window.matchMedia.bind(window)
        ) : noopMatchMedia;
      }
      /**
       * Evaluates the given media query and returns the native MediaQueryList from which results
       * can be retrieved.
       * Confirms the layout engine will trigger for the selector query provided and returns the
       * MediaQueryList for the query provided.
       */
      matchMedia(query) {
        if (this._platform.WEBKIT || this._platform.BLINK) {
          createEmptyStyleRule(query, this._nonce);
        }
        return this._matchMedia(query);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MediaMatcher, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MediaMatcher, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MediaMatcher, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
    BreakpointObserver = class _BreakpointObserver {
      _mediaMatcher = inject(MediaMatcher);
      _zone = inject(NgZone);
      /**  A map of all media queries currently being listened for. */
      _queries = /* @__PURE__ */ new Map();
      /** A subject for all other observables to takeUntil based on. */
      _destroySubject = new Subject();
      constructor() {
      }
      /** Completes the active subject, signalling to all other observables to complete. */
      ngOnDestroy() {
        this._destroySubject.next();
        this._destroySubject.complete();
      }
      /**
       * Whether one or more media queries match the current viewport size.
       * @param value One or more media queries to check.
       * @returns Whether any of the media queries match.
       */
      isMatched(value) {
        const queries = splitQueries(coerceArray(value));
        return queries.some((mediaQuery) => this._registerQuery(mediaQuery).mql.matches);
      }
      /**
       * Gets an observable of results for the given queries that will emit new results for any changes
       * in matching of the given queries.
       * @param value One or more media queries to check.
       * @returns A stream of matches for the given queries.
       */
      observe(value) {
        const queries = splitQueries(coerceArray(value));
        const observables = queries.map((query) => this._registerQuery(query).observable);
        let stateObservable = combineLatest(observables);
        stateObservable = concat(stateObservable.pipe(take(1)), stateObservable.pipe(skip(1), debounceTime(0)));
        return stateObservable.pipe(map((breakpointStates) => {
          const response = {
            matches: false,
            breakpoints: {}
          };
          breakpointStates.forEach(({ matches, query }) => {
            response.matches = response.matches || matches;
            response.breakpoints[query] = matches;
          });
          return response;
        }));
      }
      /** Registers a specific query to be listened for. */
      _registerQuery(query) {
        if (this._queries.has(query)) {
          return this._queries.get(query);
        }
        const mql = this._mediaMatcher.matchMedia(query);
        const queryObservable = new Observable((observer) => {
          const handler = (e) => this._zone.run(() => observer.next(e));
          mql.addListener(handler);
          return () => {
            mql.removeListener(handler);
          };
        }).pipe(startWith(mql), map(({ matches }) => ({ query, matches })), takeUntil(this._destroySubject));
        const output = { observable: queryObservable, mql };
        this._queries.set(query, output);
        return output;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _BreakpointObserver, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _BreakpointObserver, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: BreakpointObserver, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
  }
});

// node_modules/@angular/cdk/fesm2022/observers.mjs
function shouldIgnoreRecord(record) {
  if (record.type === "characterData" && record.target instanceof Comment) {
    return true;
  }
  if (record.type === "childList") {
    for (let i = 0; i < record.addedNodes.length; i++) {
      if (!(record.addedNodes[i] instanceof Comment)) {
        return false;
      }
    }
    for (let i = 0; i < record.removedNodes.length; i++) {
      if (!(record.removedNodes[i] instanceof Comment)) {
        return false;
      }
    }
    return true;
  }
  return false;
}
var MutationObserverFactory, ContentObserver, CdkObserveContent, ObserversModule;
var init_observers = __esm({
  "node_modules/@angular/cdk/fesm2022/observers.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_esm();
    init_operators();
    init_element_x4z00URv();
    MutationObserverFactory = class _MutationObserverFactory {
      create(callback) {
        return typeof MutationObserver === "undefined" ? null : new MutationObserver(callback);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MutationObserverFactory, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MutationObserverFactory, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MutationObserverFactory, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }] });
    ContentObserver = class _ContentObserver {
      _mutationObserverFactory = inject(MutationObserverFactory);
      /** Keeps track of the existing MutationObservers so they can be reused. */
      _observedElements = /* @__PURE__ */ new Map();
      _ngZone = inject(NgZone);
      constructor() {
      }
      ngOnDestroy() {
        this._observedElements.forEach((_, element) => this._cleanupObserver(element));
      }
      observe(elementOrRef) {
        const element = coerceElement(elementOrRef);
        return new Observable((observer) => {
          const stream = this._observeElement(element);
          const subscription = stream.pipe(map((records) => records.filter((record) => !shouldIgnoreRecord(record))), filter((records) => !!records.length)).subscribe((records) => {
            this._ngZone.run(() => {
              observer.next(records);
            });
          });
          return () => {
            subscription.unsubscribe();
            this._unobserveElement(element);
          };
        });
      }
      /**
       * Observes the given element by using the existing MutationObserver if available, or creating a
       * new one if not.
       */
      _observeElement(element) {
        return this._ngZone.runOutsideAngular(() => {
          if (!this._observedElements.has(element)) {
            const stream = new Subject();
            const observer = this._mutationObserverFactory.create((mutations) => stream.next(mutations));
            if (observer) {
              observer.observe(element, {
                characterData: true,
                childList: true,
                subtree: true
              });
            }
            this._observedElements.set(element, { observer, stream, count: 1 });
          } else {
            this._observedElements.get(element).count++;
          }
          return this._observedElements.get(element).stream;
        });
      }
      /**
       * Un-observes the given element and cleans up the underlying MutationObserver if nobody else is
       * observing this element.
       */
      _unobserveElement(element) {
        if (this._observedElements.has(element)) {
          this._observedElements.get(element).count--;
          if (!this._observedElements.get(element).count) {
            this._cleanupObserver(element);
          }
        }
      }
      /** Clean up the underlying MutationObserver for the specified element. */
      _cleanupObserver(element) {
        if (this._observedElements.has(element)) {
          const { observer, stream } = this._observedElements.get(element);
          if (observer) {
            observer.disconnect();
          }
          stream.complete();
          this._observedElements.delete(element);
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _ContentObserver, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _ContentObserver, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: ContentObserver, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
    CdkObserveContent = class _CdkObserveContent {
      _contentObserver = inject(ContentObserver);
      _elementRef = inject(ElementRef);
      /** Event emitted for each change in the element's content. */
      event = new EventEmitter();
      /**
       * Whether observing content is disabled. This option can be used
       * to disconnect the underlying MutationObserver until it is needed.
       */
      get disabled() {
        return this._disabled;
      }
      set disabled(value) {
        this._disabled = value;
        this._disabled ? this._unsubscribe() : this._subscribe();
      }
      _disabled = false;
      /** Debounce interval for emitting the changes. */
      get debounce() {
        return this._debounce;
      }
      set debounce(value) {
        this._debounce = coerceNumberProperty(value);
        this._subscribe();
      }
      _debounce;
      _currentSubscription = null;
      constructor() {
      }
      ngAfterContentInit() {
        if (!this._currentSubscription && !this.disabled) {
          this._subscribe();
        }
      }
      ngOnDestroy() {
        this._unsubscribe();
      }
      _subscribe() {
        this._unsubscribe();
        const stream = this._contentObserver.observe(this._elementRef);
        this._currentSubscription = (this.debounce ? stream.pipe(debounceTime(this.debounce)) : stream).subscribe(this.event);
      }
      _unsubscribe() {
        this._currentSubscription?.unsubscribe();
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _CdkObserveContent, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "16.1.0", version: "20.0.0", type: _CdkObserveContent, isStandalone: true, selector: "[cdkObserveContent]", inputs: { disabled: ["cdkObserveContentDisabled", "disabled", booleanAttribute], debounce: "debounce" }, outputs: { event: "cdkObserveContent" }, exportAs: ["cdkObserveContent"], ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: CdkObserveContent, decorators: [{
      type: Directive,
      args: [{
        selector: "[cdkObserveContent]",
        exportAs: "cdkObserveContent"
      }]
    }], ctorParameters: () => [], propDecorators: { event: [{
      type: Output,
      args: ["cdkObserveContent"]
    }], disabled: [{
      type: Input,
      args: [{ alias: "cdkObserveContentDisabled", transform: booleanAttribute }]
    }], debounce: [{
      type: Input
    }] } });
    ObserversModule = class _ObserversModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _ObserversModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.0", ngImport: core_exports, type: _ObserversModule, imports: [CdkObserveContent], exports: [CdkObserveContent] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _ObserversModule, providers: [MutationObserverFactory] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: ObserversModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [CdkObserveContent],
        exports: [CdkObserveContent],
        providers: [MutationObserverFactory]
      }]
    }] });
  }
});

// node_modules/@angular/cdk/fesm2022/a11y-module-BPzgKr79.mjs
function getFrameElement(window2) {
  try {
    return window2.frameElement;
  } catch {
    return null;
  }
}
function hasGeometry(element) {
  return !!(element.offsetWidth || element.offsetHeight || typeof element.getClientRects === "function" && element.getClientRects().length);
}
function isNativeFormElement(element) {
  let nodeName = element.nodeName.toLowerCase();
  return nodeName === "input" || nodeName === "select" || nodeName === "button" || nodeName === "textarea";
}
function isHiddenInput(element) {
  return isInputElement(element) && element.type == "hidden";
}
function isAnchorWithHref(element) {
  return isAnchorElement(element) && element.hasAttribute("href");
}
function isInputElement(element) {
  return element.nodeName.toLowerCase() == "input";
}
function isAnchorElement(element) {
  return element.nodeName.toLowerCase() == "a";
}
function hasValidTabIndex(element) {
  if (!element.hasAttribute("tabindex") || element.tabIndex === void 0) {
    return false;
  }
  let tabIndex = element.getAttribute("tabindex");
  return !!(tabIndex && !isNaN(parseInt(tabIndex, 10)));
}
function getTabIndexValue(element) {
  if (!hasValidTabIndex(element)) {
    return null;
  }
  const tabIndex = parseInt(element.getAttribute("tabindex") || "", 10);
  return isNaN(tabIndex) ? -1 : tabIndex;
}
function isPotentiallyTabbableIOS(element) {
  let nodeName = element.nodeName.toLowerCase();
  let inputType = nodeName === "input" && element.type;
  return inputType === "text" || inputType === "password" || nodeName === "select" || nodeName === "textarea";
}
function isPotentiallyFocusable(element) {
  if (isHiddenInput(element)) {
    return false;
  }
  return isNativeFormElement(element) || isAnchorWithHref(element) || element.hasAttribute("contenteditable") || hasValidTabIndex(element);
}
function getWindow(node) {
  return node.ownerDocument && node.ownerDocument.defaultView || window;
}
function LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY() {
  return null;
}
var InteractivityChecker, FocusTrap, FocusTrapFactory, CdkTrapFocus, LIVE_ANNOUNCER_ELEMENT_TOKEN, LIVE_ANNOUNCER_DEFAULT_OPTIONS, uniqueIds, LiveAnnouncer, CdkAriaLive, HighContrastMode, BLACK_ON_WHITE_CSS_CLASS, WHITE_ON_BLACK_CSS_CLASS, HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS, HighContrastModeDetector, A11yModule;
var init_a11y_module_BPzgKr79 = __esm({
  "node_modules/@angular/cdk/fesm2022/a11y-module-BPzgKr79.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_focus_monitor_DUe99AIS();
    init_platform_DNDzkVcI();
    init_shadow_dom_B0oHn41l();
    init_style_loader_B2sGQXxD();
    init_private();
    init_breakpoints_observer_QutrMj4x();
    init_observers();
    InteractivityChecker = class _InteractivityChecker {
      _platform = inject(Platform);
      constructor() {
      }
      /**
       * Gets whether an element is disabled.
       *
       * @param element Element to be checked.
       * @returns Whether the element is disabled.
       */
      isDisabled(element) {
        return element.hasAttribute("disabled");
      }
      /**
       * Gets whether an element is visible for the purposes of interactivity.
       *
       * This will capture states like `display: none` and `visibility: hidden`, but not things like
       * being clipped by an `overflow: hidden` parent or being outside the viewport.
       *
       * @returns Whether the element is visible.
       */
      isVisible(element) {
        return hasGeometry(element) && getComputedStyle(element).visibility === "visible";
      }
      /**
       * Gets whether an element can be reached via Tab key.
       * Assumes that the element has already been checked with isFocusable.
       *
       * @param element Element to be checked.
       * @returns Whether the element is tabbable.
       */
      isTabbable(element) {
        if (!this._platform.isBrowser) {
          return false;
        }
        const frameElement = getFrameElement(getWindow(element));
        if (frameElement) {
          if (getTabIndexValue(frameElement) === -1) {
            return false;
          }
          if (!this.isVisible(frameElement)) {
            return false;
          }
        }
        let nodeName = element.nodeName.toLowerCase();
        let tabIndexValue = getTabIndexValue(element);
        if (element.hasAttribute("contenteditable")) {
          return tabIndexValue !== -1;
        }
        if (nodeName === "iframe" || nodeName === "object") {
          return false;
        }
        if (this._platform.WEBKIT && this._platform.IOS && !isPotentiallyTabbableIOS(element)) {
          return false;
        }
        if (nodeName === "audio") {
          if (!element.hasAttribute("controls")) {
            return false;
          }
          return tabIndexValue !== -1;
        }
        if (nodeName === "video") {
          if (tabIndexValue === -1) {
            return false;
          }
          if (tabIndexValue !== null) {
            return true;
          }
          return this._platform.FIREFOX || element.hasAttribute("controls");
        }
        return element.tabIndex >= 0;
      }
      /**
       * Gets whether an element can be focused by the user.
       *
       * @param element Element to be checked.
       * @param config The config object with options to customize this method's behavior
       * @returns Whether the element is focusable.
       */
      isFocusable(element, config) {
        return isPotentiallyFocusable(element) && !this.isDisabled(element) && (config?.ignoreVisibility || this.isVisible(element));
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _InteractivityChecker, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _InteractivityChecker, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: InteractivityChecker, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
    FocusTrap = class {
      _element;
      _checker;
      _ngZone;
      _document;
      _injector;
      _startAnchor;
      _endAnchor;
      _hasAttached = false;
      // Event listeners for the anchors. Need to be regular functions so that we can unbind them later.
      startAnchorListener = () => this.focusLastTabbableElement();
      endAnchorListener = () => this.focusFirstTabbableElement();
      /** Whether the focus trap is active. */
      get enabled() {
        return this._enabled;
      }
      set enabled(value) {
        this._enabled = value;
        if (this._startAnchor && this._endAnchor) {
          this._toggleAnchorTabIndex(value, this._startAnchor);
          this._toggleAnchorTabIndex(value, this._endAnchor);
        }
      }
      _enabled = true;
      constructor(_element, _checker, _ngZone, _document, deferAnchors = false, _injector) {
        this._element = _element;
        this._checker = _checker;
        this._ngZone = _ngZone;
        this._document = _document;
        this._injector = _injector;
        if (!deferAnchors) {
          this.attachAnchors();
        }
      }
      /** Destroys the focus trap by cleaning up the anchors. */
      destroy() {
        const startAnchor = this._startAnchor;
        const endAnchor = this._endAnchor;
        if (startAnchor) {
          startAnchor.removeEventListener("focus", this.startAnchorListener);
          startAnchor.remove();
        }
        if (endAnchor) {
          endAnchor.removeEventListener("focus", this.endAnchorListener);
          endAnchor.remove();
        }
        this._startAnchor = this._endAnchor = null;
        this._hasAttached = false;
      }
      /**
       * Inserts the anchors into the DOM. This is usually done automatically
       * in the constructor, but can be deferred for cases like directives with `*ngIf`.
       * @returns Whether the focus trap managed to attach successfully. This may not be the case
       * if the target element isn't currently in the DOM.
       */
      attachAnchors() {
        if (this._hasAttached) {
          return true;
        }
        this._ngZone.runOutsideAngular(() => {
          if (!this._startAnchor) {
            this._startAnchor = this._createAnchor();
            this._startAnchor.addEventListener("focus", this.startAnchorListener);
          }
          if (!this._endAnchor) {
            this._endAnchor = this._createAnchor();
            this._endAnchor.addEventListener("focus", this.endAnchorListener);
          }
        });
        if (this._element.parentNode) {
          this._element.parentNode.insertBefore(this._startAnchor, this._element);
          this._element.parentNode.insertBefore(this._endAnchor, this._element.nextSibling);
          this._hasAttached = true;
        }
        return this._hasAttached;
      }
      /**
       * Waits for the zone to stabilize, then focuses the first tabbable element.
       * @returns Returns a promise that resolves with a boolean, depending
       * on whether focus was moved successfully.
       */
      focusInitialElementWhenReady(options) {
        return new Promise((resolve) => {
          this._executeOnStable(() => resolve(this.focusInitialElement(options)));
        });
      }
      /**
       * Waits for the zone to stabilize, then focuses
       * the first tabbable element within the focus trap region.
       * @returns Returns a promise that resolves with a boolean, depending
       * on whether focus was moved successfully.
       */
      focusFirstTabbableElementWhenReady(options) {
        return new Promise((resolve) => {
          this._executeOnStable(() => resolve(this.focusFirstTabbableElement(options)));
        });
      }
      /**
       * Waits for the zone to stabilize, then focuses
       * the last tabbable element within the focus trap region.
       * @returns Returns a promise that resolves with a boolean, depending
       * on whether focus was moved successfully.
       */
      focusLastTabbableElementWhenReady(options) {
        return new Promise((resolve) => {
          this._executeOnStable(() => resolve(this.focusLastTabbableElement(options)));
        });
      }
      /**
       * Get the specified boundary element of the trapped region.
       * @param bound The boundary to get (start or end of trapped region).
       * @returns The boundary element.
       */
      _getRegionBoundary(bound) {
        const markers = this._element.querySelectorAll(`[cdk-focus-region-${bound}], [cdkFocusRegion${bound}], [cdk-focus-${bound}]`);
        if (typeof ngDevMode === "undefined" || ngDevMode) {
          for (let i = 0; i < markers.length; i++) {
            if (markers[i].hasAttribute(`cdk-focus-${bound}`)) {
              console.warn(`Found use of deprecated attribute 'cdk-focus-${bound}', use 'cdkFocusRegion${bound}' instead. The deprecated attribute will be removed in 8.0.0.`, markers[i]);
            } else if (markers[i].hasAttribute(`cdk-focus-region-${bound}`)) {
              console.warn(`Found use of deprecated attribute 'cdk-focus-region-${bound}', use 'cdkFocusRegion${bound}' instead. The deprecated attribute will be removed in 8.0.0.`, markers[i]);
            }
          }
        }
        if (bound == "start") {
          return markers.length ? markers[0] : this._getFirstTabbableElement(this._element);
        }
        return markers.length ? markers[markers.length - 1] : this._getLastTabbableElement(this._element);
      }
      /**
       * Focuses the element that should be focused when the focus trap is initialized.
       * @returns Whether focus was moved successfully.
       */
      focusInitialElement(options) {
        const redirectToElement = this._element.querySelector(`[cdk-focus-initial], [cdkFocusInitial]`);
        if (redirectToElement) {
          if ((typeof ngDevMode === "undefined" || ngDevMode) && redirectToElement.hasAttribute(`cdk-focus-initial`)) {
            console.warn(`Found use of deprecated attribute 'cdk-focus-initial', use 'cdkFocusInitial' instead. The deprecated attribute will be removed in 8.0.0`, redirectToElement);
          }
          if ((typeof ngDevMode === "undefined" || ngDevMode) && !this._checker.isFocusable(redirectToElement)) {
            console.warn(`Element matching '[cdkFocusInitial]' is not focusable.`, redirectToElement);
          }
          if (!this._checker.isFocusable(redirectToElement)) {
            const focusableChild = this._getFirstTabbableElement(redirectToElement);
            focusableChild?.focus(options);
            return !!focusableChild;
          }
          redirectToElement.focus(options);
          return true;
        }
        return this.focusFirstTabbableElement(options);
      }
      /**
       * Focuses the first tabbable element within the focus trap region.
       * @returns Whether focus was moved successfully.
       */
      focusFirstTabbableElement(options) {
        const redirectToElement = this._getRegionBoundary("start");
        if (redirectToElement) {
          redirectToElement.focus(options);
        }
        return !!redirectToElement;
      }
      /**
       * Focuses the last tabbable element within the focus trap region.
       * @returns Whether focus was moved successfully.
       */
      focusLastTabbableElement(options) {
        const redirectToElement = this._getRegionBoundary("end");
        if (redirectToElement) {
          redirectToElement.focus(options);
        }
        return !!redirectToElement;
      }
      /**
       * Checks whether the focus trap has successfully been attached.
       */
      hasAttached() {
        return this._hasAttached;
      }
      /** Get the first tabbable element from a DOM subtree (inclusive). */
      _getFirstTabbableElement(root) {
        if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
          return root;
        }
        const children = root.children;
        for (let i = 0; i < children.length; i++) {
          const tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ? this._getFirstTabbableElement(children[i]) : null;
          if (tabbableChild) {
            return tabbableChild;
          }
        }
        return null;
      }
      /** Get the last tabbable element from a DOM subtree (inclusive). */
      _getLastTabbableElement(root) {
        if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
          return root;
        }
        const children = root.children;
        for (let i = children.length - 1; i >= 0; i--) {
          const tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ? this._getLastTabbableElement(children[i]) : null;
          if (tabbableChild) {
            return tabbableChild;
          }
        }
        return null;
      }
      /** Creates an anchor element. */
      _createAnchor() {
        const anchor = this._document.createElement("div");
        this._toggleAnchorTabIndex(this._enabled, anchor);
        anchor.classList.add("cdk-visually-hidden");
        anchor.classList.add("cdk-focus-trap-anchor");
        anchor.setAttribute("aria-hidden", "true");
        return anchor;
      }
      /**
       * Toggles the `tabindex` of an anchor, based on the enabled state of the focus trap.
       * @param isEnabled Whether the focus trap is enabled.
       * @param anchor Anchor on which to toggle the tabindex.
       */
      _toggleAnchorTabIndex(isEnabled, anchor) {
        isEnabled ? anchor.setAttribute("tabindex", "0") : anchor.removeAttribute("tabindex");
      }
      /**
       * Toggles the`tabindex` of both anchors to either trap Tab focus or allow it to escape.
       * @param enabled: Whether the anchors should trap Tab.
       */
      toggleAnchors(enabled) {
        if (this._startAnchor && this._endAnchor) {
          this._toggleAnchorTabIndex(enabled, this._startAnchor);
          this._toggleAnchorTabIndex(enabled, this._endAnchor);
        }
      }
      /** Executes a function when the zone is stable. */
      _executeOnStable(fn) {
        if (this._injector) {
          afterNextRender(fn, { injector: this._injector });
        } else {
          setTimeout(fn);
        }
      }
    };
    FocusTrapFactory = class _FocusTrapFactory {
      _checker = inject(InteractivityChecker);
      _ngZone = inject(NgZone);
      _document = inject(DOCUMENT);
      _injector = inject(Injector);
      constructor() {
        inject(_CdkPrivateStyleLoader).load(_VisuallyHiddenLoader);
      }
      /**
       * Creates a focus-trapped region around the given element.
       * @param element The element around which focus will be trapped.
       * @param deferCaptureElements Defers the creation of focus-capturing elements to be done
       *     manually by the user.
       * @returns The created focus trap instance.
       */
      create(element, deferCaptureElements = false) {
        return new FocusTrap(element, this._checker, this._ngZone, this._document, deferCaptureElements, this._injector);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _FocusTrapFactory, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _FocusTrapFactory, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: FocusTrapFactory, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
    CdkTrapFocus = class _CdkTrapFocus {
      _elementRef = inject(ElementRef);
      _focusTrapFactory = inject(FocusTrapFactory);
      /** Underlying FocusTrap instance. */
      focusTrap;
      /** Previously focused element to restore focus to upon destroy when using autoCapture. */
      _previouslyFocusedElement = null;
      /** Whether the focus trap is active. */
      get enabled() {
        return this.focusTrap?.enabled || false;
      }
      set enabled(value) {
        if (this.focusTrap) {
          this.focusTrap.enabled = value;
        }
      }
      /**
       * Whether the directive should automatically move focus into the trapped region upon
       * initialization and return focus to the previous activeElement upon destruction.
       */
      autoCapture;
      constructor() {
        const platform = inject(Platform);
        if (platform.isBrowser) {
          this.focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement, true);
        }
      }
      ngOnDestroy() {
        this.focusTrap?.destroy();
        if (this._previouslyFocusedElement) {
          this._previouslyFocusedElement.focus();
          this._previouslyFocusedElement = null;
        }
      }
      ngAfterContentInit() {
        this.focusTrap?.attachAnchors();
        if (this.autoCapture) {
          this._captureFocus();
        }
      }
      ngDoCheck() {
        if (this.focusTrap && !this.focusTrap.hasAttached()) {
          this.focusTrap.attachAnchors();
        }
      }
      ngOnChanges(changes) {
        const autoCaptureChange = changes["autoCapture"];
        if (autoCaptureChange && !autoCaptureChange.firstChange && this.autoCapture && this.focusTrap?.hasAttached()) {
          this._captureFocus();
        }
      }
      _captureFocus() {
        this._previouslyFocusedElement = _getFocusedElementPierceShadowDom();
        this.focusTrap?.focusInitialElementWhenReady();
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _CdkTrapFocus, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "16.1.0", version: "20.0.0", type: _CdkTrapFocus, isStandalone: true, selector: "[cdkTrapFocus]", inputs: { enabled: ["cdkTrapFocus", "enabled", booleanAttribute], autoCapture: ["cdkTrapFocusAutoCapture", "autoCapture", booleanAttribute] }, exportAs: ["cdkTrapFocus"], usesOnChanges: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: CdkTrapFocus, decorators: [{
      type: Directive,
      args: [{
        selector: "[cdkTrapFocus]",
        exportAs: "cdkTrapFocus"
      }]
    }], ctorParameters: () => [], propDecorators: { enabled: [{
      type: Input,
      args: [{ alias: "cdkTrapFocus", transform: booleanAttribute }]
    }], autoCapture: [{
      type: Input,
      args: [{ alias: "cdkTrapFocusAutoCapture", transform: booleanAttribute }]
    }] } });
    LIVE_ANNOUNCER_ELEMENT_TOKEN = new InjectionToken("liveAnnouncerElement", {
      providedIn: "root",
      factory: LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY
    });
    LIVE_ANNOUNCER_DEFAULT_OPTIONS = new InjectionToken("LIVE_ANNOUNCER_DEFAULT_OPTIONS");
    uniqueIds = 0;
    LiveAnnouncer = class _LiveAnnouncer {
      _ngZone = inject(NgZone);
      _defaultOptions = inject(LIVE_ANNOUNCER_DEFAULT_OPTIONS, {
        optional: true
      });
      _liveElement;
      _document = inject(DOCUMENT);
      _previousTimeout;
      _currentPromise;
      _currentResolve;
      constructor() {
        const elementToken = inject(LIVE_ANNOUNCER_ELEMENT_TOKEN, { optional: true });
        this._liveElement = elementToken || this._createLiveElement();
      }
      announce(message, ...args) {
        const defaultOptions = this._defaultOptions;
        let politeness;
        let duration;
        if (args.length === 1 && typeof args[0] === "number") {
          duration = args[0];
        } else {
          [politeness, duration] = args;
        }
        this.clear();
        clearTimeout(this._previousTimeout);
        if (!politeness) {
          politeness = defaultOptions && defaultOptions.politeness ? defaultOptions.politeness : "polite";
        }
        if (duration == null && defaultOptions) {
          duration = defaultOptions.duration;
        }
        this._liveElement.setAttribute("aria-live", politeness);
        if (this._liveElement.id) {
          this._exposeAnnouncerToModals(this._liveElement.id);
        }
        return this._ngZone.runOutsideAngular(() => {
          if (!this._currentPromise) {
            this._currentPromise = new Promise((resolve) => this._currentResolve = resolve);
          }
          clearTimeout(this._previousTimeout);
          this._previousTimeout = setTimeout(() => {
            this._liveElement.textContent = message;
            if (typeof duration === "number") {
              this._previousTimeout = setTimeout(() => this.clear(), duration);
            }
            this._currentResolve?.();
            this._currentPromise = this._currentResolve = void 0;
          }, 100);
          return this._currentPromise;
        });
      }
      /**
       * Clears the current text from the announcer element. Can be used to prevent
       * screen readers from reading the text out again while the user is going
       * through the page landmarks.
       */
      clear() {
        if (this._liveElement) {
          this._liveElement.textContent = "";
        }
      }
      ngOnDestroy() {
        clearTimeout(this._previousTimeout);
        this._liveElement?.remove();
        this._liveElement = null;
        this._currentResolve?.();
        this._currentPromise = this._currentResolve = void 0;
      }
      _createLiveElement() {
        const elementClass = "cdk-live-announcer-element";
        const previousElements = this._document.getElementsByClassName(elementClass);
        const liveEl = this._document.createElement("div");
        for (let i = 0; i < previousElements.length; i++) {
          previousElements[i].remove();
        }
        liveEl.classList.add(elementClass);
        liveEl.classList.add("cdk-visually-hidden");
        liveEl.setAttribute("aria-atomic", "true");
        liveEl.setAttribute("aria-live", "polite");
        liveEl.id = `cdk-live-announcer-${uniqueIds++}`;
        this._document.body.appendChild(liveEl);
        return liveEl;
      }
      /**
       * Some browsers won't expose the accessibility node of the live announcer element if there is an
       * `aria-modal` and the live announcer is outside of it. This method works around the issue by
       * pointing the `aria-owns` of all modals to the live announcer element.
       */
      _exposeAnnouncerToModals(id) {
        const modals = this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');
        for (let i = 0; i < modals.length; i++) {
          const modal = modals[i];
          const ariaOwns = modal.getAttribute("aria-owns");
          if (!ariaOwns) {
            modal.setAttribute("aria-owns", id);
          } else if (ariaOwns.indexOf(id) === -1) {
            modal.setAttribute("aria-owns", ariaOwns + " " + id);
          }
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _LiveAnnouncer, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _LiveAnnouncer, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: LiveAnnouncer, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
    CdkAriaLive = class _CdkAriaLive {
      _elementRef = inject(ElementRef);
      _liveAnnouncer = inject(LiveAnnouncer);
      _contentObserver = inject(ContentObserver);
      _ngZone = inject(NgZone);
      /** The aria-live politeness level to use when announcing messages. */
      get politeness() {
        return this._politeness;
      }
      set politeness(value) {
        this._politeness = value === "off" || value === "assertive" ? value : "polite";
        if (this._politeness === "off") {
          if (this._subscription) {
            this._subscription.unsubscribe();
            this._subscription = null;
          }
        } else if (!this._subscription) {
          this._subscription = this._ngZone.runOutsideAngular(() => {
            return this._contentObserver.observe(this._elementRef).subscribe(() => {
              const elementText = this._elementRef.nativeElement.textContent;
              if (elementText !== this._previousAnnouncedText) {
                this._liveAnnouncer.announce(elementText, this._politeness, this.duration);
                this._previousAnnouncedText = elementText;
              }
            });
          });
        }
      }
      _politeness = "polite";
      /** Time in milliseconds after which to clear out the announcer element. */
      duration;
      _previousAnnouncedText;
      _subscription;
      constructor() {
        inject(_CdkPrivateStyleLoader).load(_VisuallyHiddenLoader);
      }
      ngOnDestroy() {
        if (this._subscription) {
          this._subscription.unsubscribe();
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _CdkAriaLive, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _CdkAriaLive, isStandalone: true, selector: "[cdkAriaLive]", inputs: { politeness: ["cdkAriaLive", "politeness"], duration: ["cdkAriaLiveDuration", "duration"] }, exportAs: ["cdkAriaLive"], ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: CdkAriaLive, decorators: [{
      type: Directive,
      args: [{
        selector: "[cdkAriaLive]",
        exportAs: "cdkAriaLive"
      }]
    }], ctorParameters: () => [], propDecorators: { politeness: [{
      type: Input,
      args: ["cdkAriaLive"]
    }], duration: [{
      type: Input,
      args: ["cdkAriaLiveDuration"]
    }] } });
    (function(HighContrastMode2) {
      HighContrastMode2[HighContrastMode2["NONE"] = 0] = "NONE";
      HighContrastMode2[HighContrastMode2["BLACK_ON_WHITE"] = 1] = "BLACK_ON_WHITE";
      HighContrastMode2[HighContrastMode2["WHITE_ON_BLACK"] = 2] = "WHITE_ON_BLACK";
    })(HighContrastMode || (HighContrastMode = {}));
    BLACK_ON_WHITE_CSS_CLASS = "cdk-high-contrast-black-on-white";
    WHITE_ON_BLACK_CSS_CLASS = "cdk-high-contrast-white-on-black";
    HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS = "cdk-high-contrast-active";
    HighContrastModeDetector = class _HighContrastModeDetector {
      _platform = inject(Platform);
      /**
       * Figuring out the high contrast mode and adding the body classes can cause
       * some expensive layouts. This flag is used to ensure that we only do it once.
       */
      _hasCheckedHighContrastMode;
      _document = inject(DOCUMENT);
      _breakpointSubscription;
      constructor() {
        this._breakpointSubscription = inject(BreakpointObserver).observe("(forced-colors: active)").subscribe(() => {
          if (this._hasCheckedHighContrastMode) {
            this._hasCheckedHighContrastMode = false;
            this._applyBodyHighContrastModeCssClasses();
          }
        });
      }
      /** Gets the current high-contrast-mode for the page. */
      getHighContrastMode() {
        if (!this._platform.isBrowser) {
          return HighContrastMode.NONE;
        }
        const testElement = this._document.createElement("div");
        testElement.style.backgroundColor = "rgb(1,2,3)";
        testElement.style.position = "absolute";
        this._document.body.appendChild(testElement);
        const documentWindow = this._document.defaultView || window;
        const computedStyle = documentWindow && documentWindow.getComputedStyle ? documentWindow.getComputedStyle(testElement) : null;
        const computedColor = (computedStyle && computedStyle.backgroundColor || "").replace(/ /g, "");
        testElement.remove();
        switch (computedColor) {
          // Pre Windows 11 dark theme.
          case "rgb(0,0,0)":
          // Windows 11 dark themes.
          case "rgb(45,50,54)":
          case "rgb(32,32,32)":
            return HighContrastMode.WHITE_ON_BLACK;
          // Pre Windows 11 light theme.
          case "rgb(255,255,255)":
          // Windows 11 light theme.
          case "rgb(255,250,239)":
            return HighContrastMode.BLACK_ON_WHITE;
        }
        return HighContrastMode.NONE;
      }
      ngOnDestroy() {
        this._breakpointSubscription.unsubscribe();
      }
      /** Applies CSS classes indicating high-contrast mode to document body (browser-only). */
      _applyBodyHighContrastModeCssClasses() {
        if (!this._hasCheckedHighContrastMode && this._platform.isBrowser && this._document.body) {
          const bodyClasses = this._document.body.classList;
          bodyClasses.remove(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS, BLACK_ON_WHITE_CSS_CLASS, WHITE_ON_BLACK_CSS_CLASS);
          this._hasCheckedHighContrastMode = true;
          const mode = this.getHighContrastMode();
          if (mode === HighContrastMode.BLACK_ON_WHITE) {
            bodyClasses.add(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS, BLACK_ON_WHITE_CSS_CLASS);
          } else if (mode === HighContrastMode.WHITE_ON_BLACK) {
            bodyClasses.add(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS, WHITE_ON_BLACK_CSS_CLASS);
          }
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _HighContrastModeDetector, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _HighContrastModeDetector, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: HighContrastModeDetector, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
    A11yModule = class _A11yModule {
      constructor() {
        inject(HighContrastModeDetector)._applyBodyHighContrastModeCssClasses();
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _A11yModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.0", ngImport: core_exports, type: _A11yModule, imports: [ObserversModule, CdkAriaLive, CdkTrapFocus, CdkMonitorFocus], exports: [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _A11yModule, imports: [ObserversModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: A11yModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [ObserversModule, CdkAriaLive, CdkTrapFocus, CdkMonitorFocus],
        exports: [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus]
      }]
    }], ctorParameters: () => [] });
  }
});

// node_modules/@angular/cdk/fesm2022/typeahead-9ZW4Dtsf.mjs
var DEFAULT_TYPEAHEAD_DEBOUNCE_INTERVAL_MS, Typeahead;
var init_typeahead_9ZW4Dtsf = __esm({
  "node_modules/@angular/cdk/fesm2022/typeahead-9ZW4Dtsf.mjs"() {
    "use strict";
    init_esm();
    init_operators();
    init_keycodes_CpHkExLC();
    DEFAULT_TYPEAHEAD_DEBOUNCE_INTERVAL_MS = 200;
    Typeahead = class {
      _letterKeyStream = new Subject();
      _items = [];
      _selectedItemIndex = -1;
      /** Buffer for the letters that the user has pressed */
      _pressedLetters = [];
      _skipPredicateFn;
      _selectedItem = new Subject();
      selectedItem = this._selectedItem;
      constructor(initialItems, config) {
        const typeAheadInterval = typeof config?.debounceInterval === "number" ? config.debounceInterval : DEFAULT_TYPEAHEAD_DEBOUNCE_INTERVAL_MS;
        if (config?.skipPredicate) {
          this._skipPredicateFn = config.skipPredicate;
        }
        if ((typeof ngDevMode === "undefined" || ngDevMode) && initialItems.length && initialItems.some((item) => typeof item.getLabel !== "function")) {
          throw new Error("KeyManager items in typeahead mode must implement the `getLabel` method.");
        }
        this.setItems(initialItems);
        this._setupKeyHandler(typeAheadInterval);
      }
      destroy() {
        this._pressedLetters = [];
        this._letterKeyStream.complete();
        this._selectedItem.complete();
      }
      setCurrentSelectedItemIndex(index) {
        this._selectedItemIndex = index;
      }
      setItems(items) {
        this._items = items;
      }
      handleKey(event) {
        const keyCode = event.keyCode;
        if (event.key && event.key.length === 1) {
          this._letterKeyStream.next(event.key.toLocaleUpperCase());
        } else if (keyCode >= A && keyCode <= Z || keyCode >= ZERO && keyCode <= NINE) {
          this._letterKeyStream.next(String.fromCharCode(keyCode));
        }
      }
      /** Gets whether the user is currently typing into the manager using the typeahead feature. */
      isTyping() {
        return this._pressedLetters.length > 0;
      }
      /** Resets the currently stored sequence of typed letters. */
      reset() {
        this._pressedLetters = [];
      }
      _setupKeyHandler(typeAheadInterval) {
        this._letterKeyStream.pipe(tap((letter) => this._pressedLetters.push(letter)), debounceTime(typeAheadInterval), filter(() => this._pressedLetters.length > 0), map(() => this._pressedLetters.join("").toLocaleUpperCase())).subscribe((inputString) => {
          for (let i = 1; i < this._items.length + 1; i++) {
            const index = (this._selectedItemIndex + i) % this._items.length;
            const item = this._items[index];
            if (!this._skipPredicateFn?.(item) && item.getLabel?.().toLocaleUpperCase().trim().indexOf(inputString) === 0) {
              this._selectedItem.next(item);
              break;
            }
          }
          this._pressedLetters = [];
        });
      }
    };
  }
});

// node_modules/@angular/cdk/fesm2022/keycodes.mjs
function hasModifierKey(event, ...modifiers) {
  if (modifiers.length) {
    return modifiers.some((modifier) => event[modifier]);
  }
  return event.altKey || event.shiftKey || event.ctrlKey || event.metaKey;
}
var init_keycodes = __esm({
  "node_modules/@angular/cdk/fesm2022/keycodes.mjs"() {
    "use strict";
    init_keycodes_CpHkExLC();
  }
});

// node_modules/@angular/cdk/fesm2022/list-key-manager-C7tp3RbG.mjs
var ListKeyManager;
var init_list_key_manager_C7tp3RbG = __esm({
  "node_modules/@angular/cdk/fesm2022/list-key-manager-C7tp3RbG.mjs"() {
    "use strict";
    init_core();
    init_esm();
    init_typeahead_9ZW4Dtsf();
    init_keycodes();
    init_keycodes_CpHkExLC();
    ListKeyManager = class {
      _items;
      _activeItemIndex = signal(-1);
      _activeItem = signal(null);
      _wrap = false;
      _typeaheadSubscription = Subscription.EMPTY;
      _itemChangesSubscription;
      _vertical = true;
      _horizontal;
      _allowedModifierKeys = [];
      _homeAndEnd = false;
      _pageUpAndDown = { enabled: false, delta: 10 };
      _effectRef;
      _typeahead;
      /**
       * Predicate function that can be used to check whether an item should be skipped
       * by the key manager. By default, disabled items are skipped.
       */
      _skipPredicateFn = (item) => item.disabled;
      constructor(_items, injector) {
        this._items = _items;
        if (_items instanceof QueryList) {
          this._itemChangesSubscription = _items.changes.subscribe((newItems) => this._itemsChanged(newItems.toArray()));
        } else if (isSignal(_items)) {
          if (!injector && (typeof ngDevMode === "undefined" || ngDevMode)) {
            throw new Error("ListKeyManager constructed with a signal must receive an injector");
          }
          this._effectRef = effect(() => this._itemsChanged(_items()), { injector });
        }
      }
      /**
       * Stream that emits any time the TAB key is pressed, so components can react
       * when focus is shifted off of the list.
       */
      tabOut = new Subject();
      /** Stream that emits whenever the active item of the list manager changes. */
      change = new Subject();
      /**
       * Sets the predicate function that determines which items should be skipped by the
       * list key manager.
       * @param predicate Function that determines whether the given item should be skipped.
       */
      skipPredicate(predicate) {
        this._skipPredicateFn = predicate;
        return this;
      }
      /**
       * Configures wrapping mode, which determines whether the active item will wrap to
       * the other end of list when there are no more items in the given direction.
       * @param shouldWrap Whether the list should wrap when reaching the end.
       */
      withWrap(shouldWrap = true) {
        this._wrap = shouldWrap;
        return this;
      }
      /**
       * Configures whether the key manager should be able to move the selection vertically.
       * @param enabled Whether vertical selection should be enabled.
       */
      withVerticalOrientation(enabled = true) {
        this._vertical = enabled;
        return this;
      }
      /**
       * Configures the key manager to move the selection horizontally.
       * Passing in `null` will disable horizontal movement.
       * @param direction Direction in which the selection can be moved.
       */
      withHorizontalOrientation(direction) {
        this._horizontal = direction;
        return this;
      }
      /**
       * Modifier keys which are allowed to be held down and whose default actions will be prevented
       * as the user is pressing the arrow keys. Defaults to not allowing any modifier keys.
       */
      withAllowedModifierKeys(keys) {
        this._allowedModifierKeys = keys;
        return this;
      }
      /**
       * Turns on typeahead mode which allows users to set the active item by typing.
       * @param debounceInterval Time to wait after the last keystroke before setting the active item.
       */
      withTypeAhead(debounceInterval = 200) {
        if (typeof ngDevMode === "undefined" || ngDevMode) {
          const items2 = this._getItemsArray();
          if (items2.length > 0 && items2.some((item) => typeof item.getLabel !== "function")) {
            throw Error("ListKeyManager items in typeahead mode must implement the `getLabel` method.");
          }
        }
        this._typeaheadSubscription.unsubscribe();
        const items = this._getItemsArray();
        this._typeahead = new Typeahead(items, {
          debounceInterval: typeof debounceInterval === "number" ? debounceInterval : void 0,
          skipPredicate: (item) => this._skipPredicateFn(item)
        });
        this._typeaheadSubscription = this._typeahead.selectedItem.subscribe((item) => {
          this.setActiveItem(item);
        });
        return this;
      }
      /** Cancels the current typeahead sequence. */
      cancelTypeahead() {
        this._typeahead?.reset();
        return this;
      }
      /**
       * Configures the key manager to activate the first and last items
       * respectively when the Home or End key is pressed.
       * @param enabled Whether pressing the Home or End key activates the first/last item.
       */
      withHomeAndEnd(enabled = true) {
        this._homeAndEnd = enabled;
        return this;
      }
      /**
       * Configures the key manager to activate every 10th, configured or first/last element in up/down direction
       * respectively when the Page-Up or Page-Down key is pressed.
       * @param enabled Whether pressing the Page-Up or Page-Down key activates the first/last item.
       * @param delta Whether pressing the Home or End key activates the first/last item.
       */
      withPageUpDown(enabled = true, delta = 10) {
        this._pageUpAndDown = { enabled, delta };
        return this;
      }
      setActiveItem(item) {
        const previousActiveItem = this._activeItem();
        this.updateActiveItem(item);
        if (this._activeItem() !== previousActiveItem) {
          this.change.next(this._activeItemIndex());
        }
      }
      /**
       * Sets the active item depending on the key event passed in.
       * @param event Keyboard event to be used for determining which element should be active.
       */
      onKeydown(event) {
        const keyCode = event.keyCode;
        const modifiers = ["altKey", "ctrlKey", "metaKey", "shiftKey"];
        const isModifierAllowed = modifiers.every((modifier) => {
          return !event[modifier] || this._allowedModifierKeys.indexOf(modifier) > -1;
        });
        switch (keyCode) {
          case TAB:
            this.tabOut.next();
            return;
          case DOWN_ARROW:
            if (this._vertical && isModifierAllowed) {
              this.setNextItemActive();
              break;
            } else {
              return;
            }
          case UP_ARROW:
            if (this._vertical && isModifierAllowed) {
              this.setPreviousItemActive();
              break;
            } else {
              return;
            }
          case RIGHT_ARROW:
            if (this._horizontal && isModifierAllowed) {
              this._horizontal === "rtl" ? this.setPreviousItemActive() : this.setNextItemActive();
              break;
            } else {
              return;
            }
          case LEFT_ARROW:
            if (this._horizontal && isModifierAllowed) {
              this._horizontal === "rtl" ? this.setNextItemActive() : this.setPreviousItemActive();
              break;
            } else {
              return;
            }
          case HOME:
            if (this._homeAndEnd && isModifierAllowed) {
              this.setFirstItemActive();
              break;
            } else {
              return;
            }
          case END:
            if (this._homeAndEnd && isModifierAllowed) {
              this.setLastItemActive();
              break;
            } else {
              return;
            }
          case PAGE_UP:
            if (this._pageUpAndDown.enabled && isModifierAllowed) {
              const targetIndex = this._activeItemIndex() - this._pageUpAndDown.delta;
              this._setActiveItemByIndex(targetIndex > 0 ? targetIndex : 0, 1);
              break;
            } else {
              return;
            }
          case PAGE_DOWN:
            if (this._pageUpAndDown.enabled && isModifierAllowed) {
              const targetIndex = this._activeItemIndex() + this._pageUpAndDown.delta;
              const itemsLength = this._getItemsArray().length;
              this._setActiveItemByIndex(targetIndex < itemsLength ? targetIndex : itemsLength - 1, -1);
              break;
            } else {
              return;
            }
          default:
            if (isModifierAllowed || hasModifierKey(event, "shiftKey")) {
              this._typeahead?.handleKey(event);
            }
            return;
        }
        this._typeahead?.reset();
        event.preventDefault();
      }
      /** Index of the currently active item. */
      get activeItemIndex() {
        return this._activeItemIndex();
      }
      /** The active item. */
      get activeItem() {
        return this._activeItem();
      }
      /** Gets whether the user is currently typing into the manager using the typeahead feature. */
      isTyping() {
        return !!this._typeahead && this._typeahead.isTyping();
      }
      /** Sets the active item to the first enabled item in the list. */
      setFirstItemActive() {
        this._setActiveItemByIndex(0, 1);
      }
      /** Sets the active item to the last enabled item in the list. */
      setLastItemActive() {
        this._setActiveItemByIndex(this._getItemsArray().length - 1, -1);
      }
      /** Sets the active item to the next enabled item in the list. */
      setNextItemActive() {
        this._activeItemIndex() < 0 ? this.setFirstItemActive() : this._setActiveItemByDelta(1);
      }
      /** Sets the active item to a previous enabled item in the list. */
      setPreviousItemActive() {
        this._activeItemIndex() < 0 && this._wrap ? this.setLastItemActive() : this._setActiveItemByDelta(-1);
      }
      updateActiveItem(item) {
        const itemArray = this._getItemsArray();
        const index = typeof item === "number" ? item : itemArray.indexOf(item);
        const activeItem = itemArray[index];
        this._activeItem.set(activeItem == null ? null : activeItem);
        this._activeItemIndex.set(index);
        this._typeahead?.setCurrentSelectedItemIndex(index);
      }
      /** Cleans up the key manager. */
      destroy() {
        this._typeaheadSubscription.unsubscribe();
        this._itemChangesSubscription?.unsubscribe();
        this._effectRef?.destroy();
        this._typeahead?.destroy();
        this.tabOut.complete();
        this.change.complete();
      }
      /**
       * This method sets the active item, given a list of items and the delta between the
       * currently active item and the new active item. It will calculate differently
       * depending on whether wrap mode is turned on.
       */
      _setActiveItemByDelta(delta) {
        this._wrap ? this._setActiveInWrapMode(delta) : this._setActiveInDefaultMode(delta);
      }
      /**
       * Sets the active item properly given "wrap" mode. In other words, it will continue to move
       * down the list until it finds an item that is not disabled, and it will wrap if it
       * encounters either end of the list.
       */
      _setActiveInWrapMode(delta) {
        const items = this._getItemsArray();
        for (let i = 1; i <= items.length; i++) {
          const index = (this._activeItemIndex() + delta * i + items.length) % items.length;
          const item = items[index];
          if (!this._skipPredicateFn(item)) {
            this.setActiveItem(index);
            return;
          }
        }
      }
      /**
       * Sets the active item properly given the default mode. In other words, it will
       * continue to move down the list until it finds an item that is not disabled. If
       * it encounters either end of the list, it will stop and not wrap.
       */
      _setActiveInDefaultMode(delta) {
        this._setActiveItemByIndex(this._activeItemIndex() + delta, delta);
      }
      /**
       * Sets the active item to the first enabled item starting at the index specified. If the
       * item is disabled, it will move in the fallbackDelta direction until it either
       * finds an enabled item or encounters the end of the list.
       */
      _setActiveItemByIndex(index, fallbackDelta) {
        const items = this._getItemsArray();
        if (!items[index]) {
          return;
        }
        while (this._skipPredicateFn(items[index])) {
          index += fallbackDelta;
          if (!items[index]) {
            return;
          }
        }
        this.setActiveItem(index);
      }
      /** Returns the items as an array. */
      _getItemsArray() {
        if (isSignal(this._items)) {
          return this._items();
        }
        return this._items instanceof QueryList ? this._items.toArray() : this._items;
      }
      /** Callback for when the items have changed. */
      _itemsChanged(newItems) {
        this._typeahead?.setItems(newItems);
        const activeItem = this._activeItem();
        if (activeItem) {
          const newIndex = newItems.indexOf(activeItem);
          if (newIndex > -1 && newIndex !== this._activeItemIndex()) {
            this._activeItemIndex.set(newIndex);
            this._typeahead?.setCurrentSelectedItemIndex(newIndex);
          }
        }
      }
    };
  }
});

// node_modules/@angular/cdk/fesm2022/focus-key-manager-CPmlyB_c.mjs
var FocusKeyManager;
var init_focus_key_manager_CPmlyB_c = __esm({
  "node_modules/@angular/cdk/fesm2022/focus-key-manager-CPmlyB_c.mjs"() {
    "use strict";
    init_list_key_manager_C7tp3RbG();
    FocusKeyManager = class extends ListKeyManager {
      _origin = "program";
      /**
       * Sets the focus origin that will be passed in to the items for any subsequent `focus` calls.
       * @param origin Focus origin to be used when focusing items.
       */
      setFocusOrigin(origin) {
        this._origin = origin;
        return this;
      }
      setActiveItem(item) {
        super.setActiveItem(item);
        if (this.activeItem) {
          this.activeItem.focus(this._origin);
        }
      }
    };
  }
});

// node_modules/@angular/cdk/fesm2022/a11y.mjs
function addAriaReferencedId(el, attr, id) {
  const ids = getAriaReferenceIds(el, attr);
  id = id.trim();
  if (ids.some((existingId) => existingId.trim() === id)) {
    return;
  }
  ids.push(id);
  el.setAttribute(attr, ids.join(ID_DELIMITER));
}
function removeAriaReferencedId(el, attr, id) {
  const ids = getAriaReferenceIds(el, attr);
  id = id.trim();
  const filteredIds = ids.filter((val) => val !== id);
  if (filteredIds.length) {
    el.setAttribute(attr, filteredIds.join(ID_DELIMITER));
  } else {
    el.removeAttribute(attr);
  }
}
function getAriaReferenceIds(el, attr) {
  const attrValue = el.getAttribute(attr);
  return attrValue?.match(/\S+/g) ?? [];
}
function getKey(message, role) {
  return typeof message === "string" ? `${role || ""}/${message}` : message;
}
function setMessageId(element, serviceId) {
  if (!element.id) {
    element.id = `${CDK_DESCRIBEDBY_ID_PREFIX}-${serviceId}-${nextId++}`;
  }
}
var ID_DELIMITER, CDK_DESCRIBEDBY_ID_PREFIX, CDK_DESCRIBEDBY_HOST_ATTRIBUTE, nextId, AriaDescriber, ConfigurableFocusTrap, EventListenerFocusTrapInertStrategy, FOCUS_TRAP_INERT_STRATEGY, FocusTrapManager, ConfigurableFocusTrapFactory;
var init_a11y = __esm({
  "node_modules/@angular/cdk/fesm2022/a11y.mjs"() {
    "use strict";
    init_focus_monitor_DUe99AIS();
    init_a11y_module_BPzgKr79();
    init_a11y_module_BPzgKr79();
    init_core();
    init_core();
    init_platform_DNDzkVcI();
    init_style_loader_B2sGQXxD();
    init_private();
    init_focus_key_manager_CPmlyB_c();
    init_fake_event_detection_DWOdFTFz();
    ID_DELIMITER = " ";
    CDK_DESCRIBEDBY_ID_PREFIX = "cdk-describedby-message";
    CDK_DESCRIBEDBY_HOST_ATTRIBUTE = "cdk-describedby-host";
    nextId = 0;
    AriaDescriber = class _AriaDescriber {
      _platform = inject(Platform);
      _document = inject(DOCUMENT);
      /** Map of all registered message elements that have been placed into the document. */
      _messageRegistry = /* @__PURE__ */ new Map();
      /** Container for all registered messages. */
      _messagesContainer = null;
      /** Unique ID for the service. */
      _id = `${nextId++}`;
      constructor() {
        inject(_CdkPrivateStyleLoader).load(_VisuallyHiddenLoader);
        this._id = inject(APP_ID) + "-" + nextId++;
      }
      describe(hostElement, message, role) {
        if (!this._canBeDescribed(hostElement, message)) {
          return;
        }
        const key = getKey(message, role);
        if (typeof message !== "string") {
          setMessageId(message, this._id);
          this._messageRegistry.set(key, { messageElement: message, referenceCount: 0 });
        } else if (!this._messageRegistry.has(key)) {
          this._createMessageElement(message, role);
        }
        if (!this._isElementDescribedByMessage(hostElement, key)) {
          this._addMessageReference(hostElement, key);
        }
      }
      removeDescription(hostElement, message, role) {
        if (!message || !this._isElementNode(hostElement)) {
          return;
        }
        const key = getKey(message, role);
        if (this._isElementDescribedByMessage(hostElement, key)) {
          this._removeMessageReference(hostElement, key);
        }
        if (typeof message === "string") {
          const registeredMessage = this._messageRegistry.get(key);
          if (registeredMessage && registeredMessage.referenceCount === 0) {
            this._deleteMessageElement(key);
          }
        }
        if (this._messagesContainer?.childNodes.length === 0) {
          this._messagesContainer.remove();
          this._messagesContainer = null;
        }
      }
      /** Unregisters all created message elements and removes the message container. */
      ngOnDestroy() {
        const describedElements = this._document.querySelectorAll(`[${CDK_DESCRIBEDBY_HOST_ATTRIBUTE}="${this._id}"]`);
        for (let i = 0; i < describedElements.length; i++) {
          this._removeCdkDescribedByReferenceIds(describedElements[i]);
          describedElements[i].removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
        }
        this._messagesContainer?.remove();
        this._messagesContainer = null;
        this._messageRegistry.clear();
      }
      /**
       * Creates a new element in the visually hidden message container element with the message
       * as its content and adds it to the message registry.
       */
      _createMessageElement(message, role) {
        const messageElement = this._document.createElement("div");
        setMessageId(messageElement, this._id);
        messageElement.textContent = message;
        if (role) {
          messageElement.setAttribute("role", role);
        }
        this._createMessagesContainer();
        this._messagesContainer.appendChild(messageElement);
        this._messageRegistry.set(getKey(message, role), { messageElement, referenceCount: 0 });
      }
      /** Deletes the message element from the global messages container. */
      _deleteMessageElement(key) {
        this._messageRegistry.get(key)?.messageElement?.remove();
        this._messageRegistry.delete(key);
      }
      /** Creates the global container for all aria-describedby messages. */
      _createMessagesContainer() {
        if (this._messagesContainer) {
          return;
        }
        const containerClassName = "cdk-describedby-message-container";
        const serverContainers = this._document.querySelectorAll(`.${containerClassName}[platform="server"]`);
        for (let i = 0; i < serverContainers.length; i++) {
          serverContainers[i].remove();
        }
        const messagesContainer = this._document.createElement("div");
        messagesContainer.style.visibility = "hidden";
        messagesContainer.classList.add(containerClassName);
        messagesContainer.classList.add("cdk-visually-hidden");
        if (!this._platform.isBrowser) {
          messagesContainer.setAttribute("platform", "server");
        }
        this._document.body.appendChild(messagesContainer);
        this._messagesContainer = messagesContainer;
      }
      /** Removes all cdk-describedby messages that are hosted through the element. */
      _removeCdkDescribedByReferenceIds(element) {
        const originalReferenceIds = getAriaReferenceIds(element, "aria-describedby").filter((id) => id.indexOf(CDK_DESCRIBEDBY_ID_PREFIX) != 0);
        element.setAttribute("aria-describedby", originalReferenceIds.join(" "));
      }
      /**
       * Adds a message reference to the element using aria-describedby and increments the registered
       * message's reference count.
       */
      _addMessageReference(element, key) {
        const registeredMessage = this._messageRegistry.get(key);
        addAriaReferencedId(element, "aria-describedby", registeredMessage.messageElement.id);
        element.setAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE, this._id);
        registeredMessage.referenceCount++;
      }
      /**
       * Removes a message reference from the element using aria-describedby
       * and decrements the registered message's reference count.
       */
      _removeMessageReference(element, key) {
        const registeredMessage = this._messageRegistry.get(key);
        registeredMessage.referenceCount--;
        removeAriaReferencedId(element, "aria-describedby", registeredMessage.messageElement.id);
        element.removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
      }
      /** Returns true if the element has been described by the provided message ID. */
      _isElementDescribedByMessage(element, key) {
        const referenceIds = getAriaReferenceIds(element, "aria-describedby");
        const registeredMessage = this._messageRegistry.get(key);
        const messageId = registeredMessage && registeredMessage.messageElement.id;
        return !!messageId && referenceIds.indexOf(messageId) != -1;
      }
      /** Determines whether a message can be described on a particular element. */
      _canBeDescribed(element, message) {
        if (!this._isElementNode(element)) {
          return false;
        }
        if (message && typeof message === "object") {
          return true;
        }
        const trimmedMessage = message == null ? "" : `${message}`.trim();
        const ariaLabel = element.getAttribute("aria-label");
        return trimmedMessage ? !ariaLabel || ariaLabel.trim() !== trimmedMessage : false;
      }
      /** Checks whether a node is an Element node. */
      _isElementNode(element) {
        return element.nodeType === this._document.ELEMENT_NODE;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _AriaDescriber, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _AriaDescriber, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: AriaDescriber, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
    ConfigurableFocusTrap = class extends FocusTrap {
      _focusTrapManager;
      _inertStrategy;
      /** Whether the FocusTrap is enabled. */
      get enabled() {
        return this._enabled;
      }
      set enabled(value) {
        this._enabled = value;
        if (this._enabled) {
          this._focusTrapManager.register(this);
        } else {
          this._focusTrapManager.deregister(this);
        }
      }
      constructor(_element, _checker, _ngZone, _document, _focusTrapManager, _inertStrategy, config, injector) {
        super(_element, _checker, _ngZone, _document, config.defer, injector);
        this._focusTrapManager = _focusTrapManager;
        this._inertStrategy = _inertStrategy;
        this._focusTrapManager.register(this);
      }
      /** Notifies the FocusTrapManager that this FocusTrap will be destroyed. */
      destroy() {
        this._focusTrapManager.deregister(this);
        super.destroy();
      }
      /** @docs-private Implemented as part of ManagedFocusTrap. */
      _enable() {
        this._inertStrategy.preventFocus(this);
        this.toggleAnchors(true);
      }
      /** @docs-private Implemented as part of ManagedFocusTrap. */
      _disable() {
        this._inertStrategy.allowFocus(this);
        this.toggleAnchors(false);
      }
    };
    EventListenerFocusTrapInertStrategy = class {
      /** Focus event handler. */
      _listener = null;
      /** Adds a document event listener that keeps focus inside the FocusTrap. */
      preventFocus(focusTrap) {
        if (this._listener) {
          focusTrap._document.removeEventListener("focus", this._listener, true);
        }
        this._listener = (e) => this._trapFocus(focusTrap, e);
        focusTrap._ngZone.runOutsideAngular(() => {
          focusTrap._document.addEventListener("focus", this._listener, true);
        });
      }
      /** Removes the event listener added in preventFocus. */
      allowFocus(focusTrap) {
        if (!this._listener) {
          return;
        }
        focusTrap._document.removeEventListener("focus", this._listener, true);
        this._listener = null;
      }
      /**
       * Refocuses the first element in the FocusTrap if the focus event target was outside
       * the FocusTrap.
       *
       * This is an event listener callback. The event listener is added in runOutsideAngular,
       * so all this code runs outside Angular as well.
       */
      _trapFocus(focusTrap, event) {
        const target = event.target;
        const focusTrapRoot = focusTrap._element;
        if (target && !focusTrapRoot.contains(target) && !target.closest?.("div.cdk-overlay-pane")) {
          setTimeout(() => {
            if (focusTrap.enabled && !focusTrapRoot.contains(focusTrap._document.activeElement)) {
              focusTrap.focusFirstTabbableElement();
            }
          });
        }
      }
    };
    FOCUS_TRAP_INERT_STRATEGY = new InjectionToken("FOCUS_TRAP_INERT_STRATEGY");
    FocusTrapManager = class _FocusTrapManager {
      // A stack of the FocusTraps on the page. Only the FocusTrap at the
      // top of the stack is active.
      _focusTrapStack = [];
      /**
       * Disables the FocusTrap at the top of the stack, and then pushes
       * the new FocusTrap onto the stack.
       */
      register(focusTrap) {
        this._focusTrapStack = this._focusTrapStack.filter((ft) => ft !== focusTrap);
        let stack = this._focusTrapStack;
        if (stack.length) {
          stack[stack.length - 1]._disable();
        }
        stack.push(focusTrap);
        focusTrap._enable();
      }
      /**
       * Removes the FocusTrap from the stack, and activates the
       * FocusTrap that is the new top of the stack.
       */
      deregister(focusTrap) {
        focusTrap._disable();
        const stack = this._focusTrapStack;
        const i = stack.indexOf(focusTrap);
        if (i !== -1) {
          stack.splice(i, 1);
          if (stack.length) {
            stack[stack.length - 1]._enable();
          }
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _FocusTrapManager, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _FocusTrapManager, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: FocusTrapManager, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }] });
    ConfigurableFocusTrapFactory = class _ConfigurableFocusTrapFactory {
      _checker = inject(InteractivityChecker);
      _ngZone = inject(NgZone);
      _focusTrapManager = inject(FocusTrapManager);
      _document = inject(DOCUMENT);
      _inertStrategy;
      _injector = inject(Injector);
      constructor() {
        const inertStrategy = inject(FOCUS_TRAP_INERT_STRATEGY, { optional: true });
        this._inertStrategy = inertStrategy || new EventListenerFocusTrapInertStrategy();
      }
      create(element, config = { defer: false }) {
        let configObject;
        if (typeof config === "boolean") {
          configObject = { defer: config };
        } else {
          configObject = config;
        }
        return new ConfigurableFocusTrap(element, this._checker, this._ngZone, this._document, this._focusTrapManager, this._inertStrategy, configObject, this._injector);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _ConfigurableFocusTrapFactory, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _ConfigurableFocusTrapFactory, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: ConfigurableFocusTrapFactory, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
  }
});

// node_modules/@angular/cdk/fesm2022/directionality-CChdj3az.mjs
function DIR_DOCUMENT_FACTORY() {
  return inject(DOCUMENT);
}
function _resolveDirectionality(rawValue) {
  const value = rawValue?.toLowerCase() || "";
  if (value === "auto" && typeof navigator !== "undefined" && navigator?.language) {
    return RTL_LOCALE_PATTERN.test(navigator.language) ? "rtl" : "ltr";
  }
  return value === "rtl" ? "rtl" : "ltr";
}
var DIR_DOCUMENT, RTL_LOCALE_PATTERN, Directionality;
var init_directionality_CChdj3az = __esm({
  "node_modules/@angular/cdk/fesm2022/directionality-CChdj3az.mjs"() {
    "use strict";
    init_core();
    init_core();
    DIR_DOCUMENT = new InjectionToken("cdk-dir-doc", {
      providedIn: "root",
      factory: DIR_DOCUMENT_FACTORY
    });
    RTL_LOCALE_PATTERN = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
    Directionality = class _Directionality {
      /** The current 'ltr' or 'rtl' value. */
      get value() {
        return this.valueSignal();
      }
      /**
       * The current 'ltr' or 'rtl' value.
       */
      valueSignal = signal("ltr");
      /** Stream that emits whenever the 'ltr' / 'rtl' state changes. */
      change = new EventEmitter();
      constructor() {
        const _document = inject(DIR_DOCUMENT, { optional: true });
        if (_document) {
          const bodyDir = _document.body ? _document.body.dir : null;
          const htmlDir = _document.documentElement ? _document.documentElement.dir : null;
          this.valueSignal.set(_resolveDirectionality(bodyDir || htmlDir || "ltr"));
        }
      }
      ngOnDestroy() {
        this.change.complete();
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _Directionality, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _Directionality, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: Directionality, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
  }
});

// node_modules/@angular/cdk/fesm2022/bidi.mjs
var Dir, BidiModule;
var init_bidi = __esm({
  "node_modules/@angular/cdk/fesm2022/bidi.mjs"() {
    "use strict";
    init_directionality_CChdj3az();
    init_core();
    init_core();
    Dir = class _Dir {
      /** Whether the `value` has been set to its initial value. */
      _isInitialized = false;
      /** Direction as passed in by the consumer. */
      _rawDir;
      /** Event emitted when the direction changes. */
      change = new EventEmitter();
      /** @docs-private */
      get dir() {
        return this.valueSignal();
      }
      set dir(value) {
        const previousValue = this.valueSignal();
        this.valueSignal.set(_resolveDirectionality(value));
        this._rawDir = value;
        if (previousValue !== this.valueSignal() && this._isInitialized) {
          this.change.emit(this.valueSignal());
        }
      }
      /** Current layout direction of the element. */
      get value() {
        return this.dir;
      }
      valueSignal = signal("ltr");
      /** Initialize once default value has been set. */
      ngAfterContentInit() {
        this._isInitialized = true;
      }
      ngOnDestroy() {
        this.change.complete();
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _Dir, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _Dir, isStandalone: true, selector: "[dir]", inputs: { dir: "dir" }, outputs: { change: "dirChange" }, host: { properties: { "attr.dir": "_rawDir" } }, providers: [{ provide: Directionality, useExisting: _Dir }], exportAs: ["dir"], ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: Dir, decorators: [{
      type: Directive,
      args: [{
        selector: "[dir]",
        providers: [{ provide: Directionality, useExisting: Dir }],
        host: { "[attr.dir]": "_rawDir" },
        exportAs: "dir"
      }]
    }], propDecorators: { change: [{
      type: Output,
      args: ["dirChange"]
    }], dir: [{
      type: Input
    }] } });
    BidiModule = class _BidiModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _BidiModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.0", ngImport: core_exports, type: _BidiModule, imports: [Dir], exports: [Dir] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _BidiModule });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: BidiModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [Dir],
        exports: [Dir]
      }]
    }] });
  }
});

// node_modules/@angular/cdk/fesm2022/coercion.mjs
function coerceBooleanProperty(value) {
  return value != null && `${value}` !== "false";
}
var init_coercion = __esm({
  "node_modules/@angular/cdk/fesm2022/coercion.mjs"() {
    "use strict";
    init_element_x4z00URv();
  }
});

// node_modules/@angular/cdk/fesm2022/scrolling-BkvA05C8.mjs
function supportsScrollBehavior() {
  if (scrollBehaviorSupported == null) {
    if (typeof document !== "object" || !document || typeof Element !== "function" || !Element) {
      scrollBehaviorSupported = false;
      return scrollBehaviorSupported;
    }
    if ("scrollBehavior" in document.documentElement.style) {
      scrollBehaviorSupported = true;
    } else {
      const scrollToFunction = Element.prototype.scrollTo;
      if (scrollToFunction) {
        scrollBehaviorSupported = !/\{\s*\[native code\]\s*\}/.test(scrollToFunction.toString());
      } else {
        scrollBehaviorSupported = false;
      }
    }
  }
  return scrollBehaviorSupported;
}
function getRtlScrollAxisType() {
  if (typeof document !== "object" || !document) {
    return RtlScrollAxisType.NORMAL;
  }
  if (rtlScrollAxisType == null) {
    const scrollContainer = document.createElement("div");
    const containerStyle = scrollContainer.style;
    scrollContainer.dir = "rtl";
    containerStyle.width = "1px";
    containerStyle.overflow = "auto";
    containerStyle.visibility = "hidden";
    containerStyle.pointerEvents = "none";
    containerStyle.position = "absolute";
    const content = document.createElement("div");
    const contentStyle = content.style;
    contentStyle.width = "2px";
    contentStyle.height = "1px";
    scrollContainer.appendChild(content);
    document.body.appendChild(scrollContainer);
    rtlScrollAxisType = RtlScrollAxisType.NORMAL;
    if (scrollContainer.scrollLeft === 0) {
      scrollContainer.scrollLeft = 1;
      rtlScrollAxisType = scrollContainer.scrollLeft === 0 ? RtlScrollAxisType.NEGATED : RtlScrollAxisType.INVERTED;
    }
    scrollContainer.remove();
  }
  return rtlScrollAxisType;
}
var RtlScrollAxisType, rtlScrollAxisType, scrollBehaviorSupported;
var init_scrolling_BkvA05C8 = __esm({
  "node_modules/@angular/cdk/fesm2022/scrolling-BkvA05C8.mjs"() {
    "use strict";
    (function(RtlScrollAxisType2) {
      RtlScrollAxisType2[RtlScrollAxisType2["NORMAL"] = 0] = "NORMAL";
      RtlScrollAxisType2[RtlScrollAxisType2["NEGATED"] = 1] = "NEGATED";
      RtlScrollAxisType2[RtlScrollAxisType2["INVERTED"] = 2] = "INVERTED";
    })(RtlScrollAxisType || (RtlScrollAxisType = {}));
  }
});

// node_modules/@angular/cdk/fesm2022/platform.mjs
var PlatformModule;
var init_platform = __esm({
  "node_modules/@angular/cdk/fesm2022/platform.mjs"() {
    "use strict";
    init_platform_DNDzkVcI();
    init_core();
    init_core();
    init_passive_listeners_esHZRgIN();
    init_shadow_dom_B0oHn41l();
    PlatformModule = class _PlatformModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _PlatformModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.0", ngImport: core_exports, type: _PlatformModule });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _PlatformModule });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: PlatformModule, decorators: [{
      type: NgModule,
      args: [{}]
    }] });
  }
});

// node_modules/@angular/cdk/fesm2022/data-source-D34wiQZj.mjs
function isDataSource(value) {
  return value && typeof value.connect === "function" && !(value instanceof ConnectableObservable);
}
var DataSource;
var init_data_source_D34wiQZj = __esm({
  "node_modules/@angular/cdk/fesm2022/data-source-D34wiQZj.mjs"() {
    "use strict";
    init_esm();
    DataSource = class {
    };
  }
});

// node_modules/@angular/cdk/fesm2022/recycle-view-repeater-strategy-SfuyU210.mjs
var ArrayDataSource, _ViewRepeaterOperation, _VIEW_REPEATER_STRATEGY, _RecycleViewRepeaterStrategy;
var init_recycle_view_repeater_strategy_SfuyU210 = __esm({
  "node_modules/@angular/cdk/fesm2022/recycle-view-repeater-strategy-SfuyU210.mjs"() {
    "use strict";
    init_esm();
    init_data_source_D34wiQZj();
    init_core();
    ArrayDataSource = class extends DataSource {
      _data;
      constructor(_data) {
        super();
        this._data = _data;
      }
      connect() {
        return isObservable(this._data) ? this._data : of(this._data);
      }
      disconnect() {
      }
    };
    (function(_ViewRepeaterOperation2) {
      _ViewRepeaterOperation2[_ViewRepeaterOperation2["REPLACED"] = 0] = "REPLACED";
      _ViewRepeaterOperation2[_ViewRepeaterOperation2["INSERTED"] = 1] = "INSERTED";
      _ViewRepeaterOperation2[_ViewRepeaterOperation2["MOVED"] = 2] = "MOVED";
      _ViewRepeaterOperation2[_ViewRepeaterOperation2["REMOVED"] = 3] = "REMOVED";
    })(_ViewRepeaterOperation || (_ViewRepeaterOperation = {}));
    _VIEW_REPEATER_STRATEGY = new InjectionToken("_ViewRepeater");
    _RecycleViewRepeaterStrategy = class {
      /**
       * The size of the cache used to store unused views.
       * Setting the cache size to `0` will disable caching. Defaults to 20 views.
       */
      viewCacheSize = 20;
      /**
       * View cache that stores embedded view instances that have been previously stamped out,
       * but don't are not currently rendered. The view repeater will reuse these views rather than
       * creating brand new ones.
       *
       * TODO(michaeljamesparsons) Investigate whether using a linked list would improve performance.
       */
      _viewCache = [];
      /** Apply changes to the DOM. */
      applyChanges(changes, viewContainerRef, itemContextFactory, itemValueResolver, itemViewChanged) {
        changes.forEachOperation((record, adjustedPreviousIndex, currentIndex) => {
          let view;
          let operation;
          if (record.previousIndex == null) {
            const viewArgsFactory = () => itemContextFactory(record, adjustedPreviousIndex, currentIndex);
            view = this._insertView(viewArgsFactory, currentIndex, viewContainerRef, itemValueResolver(record));
            operation = view ? _ViewRepeaterOperation.INSERTED : _ViewRepeaterOperation.REPLACED;
          } else if (currentIndex == null) {
            this._detachAndCacheView(adjustedPreviousIndex, viewContainerRef);
            operation = _ViewRepeaterOperation.REMOVED;
          } else {
            view = this._moveView(adjustedPreviousIndex, currentIndex, viewContainerRef, itemValueResolver(record));
            operation = _ViewRepeaterOperation.MOVED;
          }
          if (itemViewChanged) {
            itemViewChanged({
              context: view?.context,
              operation,
              record
            });
          }
        });
      }
      detach() {
        for (const view of this._viewCache) {
          view.destroy();
        }
        this._viewCache = [];
      }
      /**
       * Inserts a view for a new item, either from the cache or by creating a new
       * one. Returns `undefined` if the item was inserted into a cached view.
       */
      _insertView(viewArgsFactory, currentIndex, viewContainerRef, value) {
        const cachedView = this._insertViewFromCache(currentIndex, viewContainerRef);
        if (cachedView) {
          cachedView.context.$implicit = value;
          return void 0;
        }
        const viewArgs = viewArgsFactory();
        return viewContainerRef.createEmbeddedView(viewArgs.templateRef, viewArgs.context, viewArgs.index);
      }
      /** Detaches the view at the given index and inserts into the view cache. */
      _detachAndCacheView(index, viewContainerRef) {
        const detachedView = viewContainerRef.detach(index);
        this._maybeCacheView(detachedView, viewContainerRef);
      }
      /** Moves view at the previous index to the current index. */
      _moveView(adjustedPreviousIndex, currentIndex, viewContainerRef, value) {
        const view = viewContainerRef.get(adjustedPreviousIndex);
        viewContainerRef.move(view, currentIndex);
        view.context.$implicit = value;
        return view;
      }
      /**
       * Cache the given detached view. If the cache is full, the view will be
       * destroyed.
       */
      _maybeCacheView(view, viewContainerRef) {
        if (this._viewCache.length < this.viewCacheSize) {
          this._viewCache.push(view);
        } else {
          const index = viewContainerRef.indexOf(view);
          if (index === -1) {
            view.destroy();
          } else {
            viewContainerRef.remove(index);
          }
        }
      }
      /** Inserts a recycled view from the cache at the given index. */
      _insertViewFromCache(index, viewContainerRef) {
        const cachedView = this._viewCache.pop();
        if (cachedView) {
          viewContainerRef.insert(cachedView, index);
        }
        return cachedView || null;
      }
    };
  }
});

// node_modules/@angular/cdk/fesm2022/scrolling.mjs
function _fixedSizeVirtualScrollStrategyFactory(fixedSizeDir) {
  return fixedSizeDir._scrollStrategy;
}
function rangesEqual(r1, r2) {
  return r1.start == r2.start && r1.end == r2.end;
}
function getOffset(orientation, direction, node) {
  const el = node;
  if (!el.getBoundingClientRect) {
    return 0;
  }
  const rect = el.getBoundingClientRect();
  if (orientation === "horizontal") {
    return direction === "start" ? rect.left : rect.right;
  }
  return direction === "start" ? rect.top : rect.bottom;
}
var VIRTUAL_SCROLL_STRATEGY, FixedSizeVirtualScrollStrategy, CdkFixedSizeVirtualScroll, DEFAULT_SCROLL_TIME, ScrollDispatcher, CdkScrollable, DEFAULT_RESIZE_TIME, ViewportRuler, VIRTUAL_SCROLLABLE, CdkVirtualScrollable, SCROLL_SCHEDULER, CdkVirtualScrollViewport, CdkVirtualForOf, CdkVirtualScrollableElement, CdkVirtualScrollableWindow, CdkScrollableModule, ScrollingModule;
var init_scrolling = __esm({
  "node_modules/@angular/cdk/fesm2022/scrolling.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_esm();
    init_operators();
    init_element_x4z00URv();
    init_platform_DNDzkVcI();
    init_directionality_CChdj3az();
    init_scrolling_BkvA05C8();
    init_bidi();
    init_recycle_view_repeater_strategy_SfuyU210();
    init_data_source_D34wiQZj();
    VIRTUAL_SCROLL_STRATEGY = new InjectionToken("VIRTUAL_SCROLL_STRATEGY");
    FixedSizeVirtualScrollStrategy = class {
      _scrolledIndexChange = new Subject();
      /** @docs-private Implemented as part of VirtualScrollStrategy. */
      scrolledIndexChange = this._scrolledIndexChange.pipe(distinctUntilChanged());
      /** The attached viewport. */
      _viewport = null;
      /** The size of the items in the virtually scrolling list. */
      _itemSize;
      /** The minimum amount of buffer rendered beyond the viewport (in pixels). */
      _minBufferPx;
      /** The number of buffer items to render beyond the edge of the viewport (in pixels). */
      _maxBufferPx;
      /**
       * @param itemSize The size of the items in the virtually scrolling list.
       * @param minBufferPx The minimum amount of buffer (in pixels) before needing to render more
       * @param maxBufferPx The amount of buffer (in pixels) to render when rendering more.
       */
      constructor(itemSize, minBufferPx, maxBufferPx) {
        this._itemSize = itemSize;
        this._minBufferPx = minBufferPx;
        this._maxBufferPx = maxBufferPx;
      }
      /**
       * Attaches this scroll strategy to a viewport.
       * @param viewport The viewport to attach this strategy to.
       */
      attach(viewport) {
        this._viewport = viewport;
        this._updateTotalContentSize();
        this._updateRenderedRange();
      }
      /** Detaches this scroll strategy from the currently attached viewport. */
      detach() {
        this._scrolledIndexChange.complete();
        this._viewport = null;
      }
      /**
       * Update the item size and buffer size.
       * @param itemSize The size of the items in the virtually scrolling list.
       * @param minBufferPx The minimum amount of buffer (in pixels) before needing to render more
       * @param maxBufferPx The amount of buffer (in pixels) to render when rendering more.
       */
      updateItemAndBufferSize(itemSize, minBufferPx, maxBufferPx) {
        if (maxBufferPx < minBufferPx && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw Error("CDK virtual scroll: maxBufferPx must be greater than or equal to minBufferPx");
        }
        this._itemSize = itemSize;
        this._minBufferPx = minBufferPx;
        this._maxBufferPx = maxBufferPx;
        this._updateTotalContentSize();
        this._updateRenderedRange();
      }
      /** @docs-private Implemented as part of VirtualScrollStrategy. */
      onContentScrolled() {
        this._updateRenderedRange();
      }
      /** @docs-private Implemented as part of VirtualScrollStrategy. */
      onDataLengthChanged() {
        this._updateTotalContentSize();
        this._updateRenderedRange();
      }
      /** @docs-private Implemented as part of VirtualScrollStrategy. */
      onContentRendered() {
      }
      /** @docs-private Implemented as part of VirtualScrollStrategy. */
      onRenderedOffsetChanged() {
      }
      /**
       * Scroll to the offset for the given index.
       * @param index The index of the element to scroll to.
       * @param behavior The ScrollBehavior to use when scrolling.
       */
      scrollToIndex(index, behavior) {
        if (this._viewport) {
          this._viewport.scrollToOffset(index * this._itemSize, behavior);
        }
      }
      /** Update the viewport's total content size. */
      _updateTotalContentSize() {
        if (!this._viewport) {
          return;
        }
        this._viewport.setTotalContentSize(this._viewport.getDataLength() * this._itemSize);
      }
      /** Update the viewport's rendered range. */
      _updateRenderedRange() {
        if (!this._viewport) {
          return;
        }
        const renderedRange = this._viewport.getRenderedRange();
        const newRange = { start: renderedRange.start, end: renderedRange.end };
        const viewportSize = this._viewport.getViewportSize();
        const dataLength = this._viewport.getDataLength();
        let scrollOffset = this._viewport.measureScrollOffset();
        let firstVisibleIndex = this._itemSize > 0 ? scrollOffset / this._itemSize : 0;
        if (newRange.end > dataLength) {
          const maxVisibleItems = Math.ceil(viewportSize / this._itemSize);
          const newVisibleIndex = Math.max(0, Math.min(firstVisibleIndex, dataLength - maxVisibleItems));
          if (firstVisibleIndex != newVisibleIndex) {
            firstVisibleIndex = newVisibleIndex;
            scrollOffset = newVisibleIndex * this._itemSize;
            newRange.start = Math.floor(firstVisibleIndex);
          }
          newRange.end = Math.max(0, Math.min(dataLength, newRange.start + maxVisibleItems));
        }
        const startBuffer = scrollOffset - newRange.start * this._itemSize;
        if (startBuffer < this._minBufferPx && newRange.start != 0) {
          const expandStart = Math.ceil((this._maxBufferPx - startBuffer) / this._itemSize);
          newRange.start = Math.max(0, newRange.start - expandStart);
          newRange.end = Math.min(dataLength, Math.ceil(firstVisibleIndex + (viewportSize + this._minBufferPx) / this._itemSize));
        } else {
          const endBuffer = newRange.end * this._itemSize - (scrollOffset + viewportSize);
          if (endBuffer < this._minBufferPx && newRange.end != dataLength) {
            const expandEnd = Math.ceil((this._maxBufferPx - endBuffer) / this._itemSize);
            if (expandEnd > 0) {
              newRange.end = Math.min(dataLength, newRange.end + expandEnd);
              newRange.start = Math.max(0, Math.floor(firstVisibleIndex - this._minBufferPx / this._itemSize));
            }
          }
        }
        this._viewport.setRenderedRange(newRange);
        this._viewport.setRenderedContentOffset(this._itemSize * newRange.start);
        this._scrolledIndexChange.next(Math.floor(firstVisibleIndex));
      }
    };
    CdkFixedSizeVirtualScroll = class _CdkFixedSizeVirtualScroll {
      /** The size of the items in the list (in pixels). */
      get itemSize() {
        return this._itemSize;
      }
      set itemSize(value) {
        this._itemSize = coerceNumberProperty(value);
      }
      _itemSize = 20;
      /**
       * The minimum amount of buffer rendered beyond the viewport (in pixels).
       * If the amount of buffer dips below this number, more items will be rendered. Defaults to 100px.
       */
      get minBufferPx() {
        return this._minBufferPx;
      }
      set minBufferPx(value) {
        this._minBufferPx = coerceNumberProperty(value);
      }
      _minBufferPx = 100;
      /**
       * The number of pixels worth of buffer to render for when rendering new items. Defaults to 200px.
       */
      get maxBufferPx() {
        return this._maxBufferPx;
      }
      set maxBufferPx(value) {
        this._maxBufferPx = coerceNumberProperty(value);
      }
      _maxBufferPx = 200;
      /** The scroll strategy used by this directive. */
      _scrollStrategy = new FixedSizeVirtualScrollStrategy(this.itemSize, this.minBufferPx, this.maxBufferPx);
      ngOnChanges() {
        this._scrollStrategy.updateItemAndBufferSize(this.itemSize, this.minBufferPx, this.maxBufferPx);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _CdkFixedSizeVirtualScroll, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _CdkFixedSizeVirtualScroll, isStandalone: true, selector: "cdk-virtual-scroll-viewport[itemSize]", inputs: { itemSize: "itemSize", minBufferPx: "minBufferPx", maxBufferPx: "maxBufferPx" }, providers: [
        {
          provide: VIRTUAL_SCROLL_STRATEGY,
          useFactory: _fixedSizeVirtualScrollStrategyFactory,
          deps: [forwardRef(() => _CdkFixedSizeVirtualScroll)]
        }
      ], usesOnChanges: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: CdkFixedSizeVirtualScroll, decorators: [{
      type: Directive,
      args: [{
        selector: "cdk-virtual-scroll-viewport[itemSize]",
        providers: [
          {
            provide: VIRTUAL_SCROLL_STRATEGY,
            useFactory: _fixedSizeVirtualScrollStrategyFactory,
            deps: [forwardRef(() => CdkFixedSizeVirtualScroll)]
          }
        ]
      }]
    }], propDecorators: { itemSize: [{
      type: Input
    }], minBufferPx: [{
      type: Input
    }], maxBufferPx: [{
      type: Input
    }] } });
    DEFAULT_SCROLL_TIME = 20;
    ScrollDispatcher = class _ScrollDispatcher {
      _ngZone = inject(NgZone);
      _platform = inject(Platform);
      _renderer = inject(RendererFactory2).createRenderer(null, null);
      _cleanupGlobalListener;
      constructor() {
      }
      /** Subject for notifying that a registered scrollable reference element has been scrolled. */
      _scrolled = new Subject();
      /** Keeps track of the amount of subscriptions to `scrolled`. Used for cleaning up afterwards. */
      _scrolledCount = 0;
      /**
       * Map of all the scrollable references that are registered with the service and their
       * scroll event subscriptions.
       */
      scrollContainers = /* @__PURE__ */ new Map();
      /**
       * Registers a scrollable instance with the service and listens for its scrolled events. When the
       * scrollable is scrolled, the service emits the event to its scrolled observable.
       * @param scrollable Scrollable instance to be registered.
       */
      register(scrollable) {
        if (!this.scrollContainers.has(scrollable)) {
          this.scrollContainers.set(scrollable, scrollable.elementScrolled().subscribe(() => this._scrolled.next(scrollable)));
        }
      }
      /**
       * De-registers a Scrollable reference and unsubscribes from its scroll event observable.
       * @param scrollable Scrollable instance to be deregistered.
       */
      deregister(scrollable) {
        const scrollableReference = this.scrollContainers.get(scrollable);
        if (scrollableReference) {
          scrollableReference.unsubscribe();
          this.scrollContainers.delete(scrollable);
        }
      }
      /**
       * Returns an observable that emits an event whenever any of the registered Scrollable
       * references (or window, document, or body) fire a scrolled event. Can provide a time in ms
       * to override the default "throttle" time.
       *
       * **Note:** in order to avoid hitting change detection for every scroll event,
       * all of the events emitted from this stream will be run outside the Angular zone.
       * If you need to update any data bindings as a result of a scroll event, you have
       * to run the callback using `NgZone.run`.
       */
      scrolled(auditTimeInMs = DEFAULT_SCROLL_TIME) {
        if (!this._platform.isBrowser) {
          return of();
        }
        return new Observable((observer) => {
          if (!this._cleanupGlobalListener) {
            this._cleanupGlobalListener = this._ngZone.runOutsideAngular(() => this._renderer.listen("document", "scroll", () => this._scrolled.next()));
          }
          const subscription = auditTimeInMs > 0 ? this._scrolled.pipe(auditTime(auditTimeInMs)).subscribe(observer) : this._scrolled.subscribe(observer);
          this._scrolledCount++;
          return () => {
            subscription.unsubscribe();
            this._scrolledCount--;
            if (!this._scrolledCount) {
              this._cleanupGlobalListener?.();
              this._cleanupGlobalListener = void 0;
            }
          };
        });
      }
      ngOnDestroy() {
        this._cleanupGlobalListener?.();
        this._cleanupGlobalListener = void 0;
        this.scrollContainers.forEach((_, container) => this.deregister(container));
        this._scrolled.complete();
      }
      /**
       * Returns an observable that emits whenever any of the
       * scrollable ancestors of an element are scrolled.
       * @param elementOrElementRef Element whose ancestors to listen for.
       * @param auditTimeInMs Time to throttle the scroll events.
       */
      ancestorScrolled(elementOrElementRef, auditTimeInMs) {
        const ancestors = this.getAncestorScrollContainers(elementOrElementRef);
        return this.scrolled(auditTimeInMs).pipe(filter((target) => !target || ancestors.indexOf(target) > -1));
      }
      /** Returns all registered Scrollables that contain the provided element. */
      getAncestorScrollContainers(elementOrElementRef) {
        const scrollingContainers = [];
        this.scrollContainers.forEach((_subscription, scrollable) => {
          if (this._scrollableContainsElement(scrollable, elementOrElementRef)) {
            scrollingContainers.push(scrollable);
          }
        });
        return scrollingContainers;
      }
      /** Returns true if the element is contained within the provided Scrollable. */
      _scrollableContainsElement(scrollable, elementOrElementRef) {
        let element = coerceElement(elementOrElementRef);
        let scrollableElement = scrollable.getElementRef().nativeElement;
        do {
          if (element == scrollableElement) {
            return true;
          }
        } while (element = element.parentElement);
        return false;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _ScrollDispatcher, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _ScrollDispatcher, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: ScrollDispatcher, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
    CdkScrollable = class _CdkScrollable {
      elementRef = inject(ElementRef);
      scrollDispatcher = inject(ScrollDispatcher);
      ngZone = inject(NgZone);
      dir = inject(Directionality, { optional: true });
      _scrollElement = this.elementRef.nativeElement;
      _destroyed = new Subject();
      _renderer = inject(Renderer2);
      _cleanupScroll;
      _elementScrolled = new Subject();
      constructor() {
      }
      ngOnInit() {
        this._cleanupScroll = this.ngZone.runOutsideAngular(() => this._renderer.listen(this._scrollElement, "scroll", (event) => this._elementScrolled.next(event)));
        this.scrollDispatcher.register(this);
      }
      ngOnDestroy() {
        this._cleanupScroll?.();
        this._elementScrolled.complete();
        this.scrollDispatcher.deregister(this);
        this._destroyed.next();
        this._destroyed.complete();
      }
      /** Returns observable that emits when a scroll event is fired on the host element. */
      elementScrolled() {
        return this._elementScrolled;
      }
      /** Gets the ElementRef for the viewport. */
      getElementRef() {
        return this.elementRef;
      }
      /**
       * Scrolls to the specified offsets. This is a normalized version of the browser's native scrollTo
       * method, since browsers are not consistent about what scrollLeft means in RTL. For this method
       * left and right always refer to the left and right side of the scrolling container irrespective
       * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
       * in an RTL context.
       * @param options specified the offsets to scroll to.
       */
      scrollTo(options) {
        const el = this.elementRef.nativeElement;
        const isRtl = this.dir && this.dir.value == "rtl";
        if (options.left == null) {
          options.left = isRtl ? options.end : options.start;
        }
        if (options.right == null) {
          options.right = isRtl ? options.start : options.end;
        }
        if (options.bottom != null) {
          options.top = el.scrollHeight - el.clientHeight - options.bottom;
        }
        if (isRtl && getRtlScrollAxisType() != RtlScrollAxisType.NORMAL) {
          if (options.left != null) {
            options.right = el.scrollWidth - el.clientWidth - options.left;
          }
          if (getRtlScrollAxisType() == RtlScrollAxisType.INVERTED) {
            options.left = options.right;
          } else if (getRtlScrollAxisType() == RtlScrollAxisType.NEGATED) {
            options.left = options.right ? -options.right : options.right;
          }
        } else {
          if (options.right != null) {
            options.left = el.scrollWidth - el.clientWidth - options.right;
          }
        }
        this._applyScrollToOptions(options);
      }
      _applyScrollToOptions(options) {
        const el = this.elementRef.nativeElement;
        if (supportsScrollBehavior()) {
          el.scrollTo(options);
        } else {
          if (options.top != null) {
            el.scrollTop = options.top;
          }
          if (options.left != null) {
            el.scrollLeft = options.left;
          }
        }
      }
      /**
       * Measures the scroll offset relative to the specified edge of the viewport. This method can be
       * used instead of directly checking scrollLeft or scrollTop, since browsers are not consistent
       * about what scrollLeft means in RTL. The values returned by this method are normalized such that
       * left and right always refer to the left and right side of the scrolling container irrespective
       * of the layout direction. start and end refer to left and right in an LTR context and vice-versa
       * in an RTL context.
       * @param from The edge to measure from.
       */
      measureScrollOffset(from) {
        const LEFT = "left";
        const RIGHT = "right";
        const el = this.elementRef.nativeElement;
        if (from == "top") {
          return el.scrollTop;
        }
        if (from == "bottom") {
          return el.scrollHeight - el.clientHeight - el.scrollTop;
        }
        const isRtl = this.dir && this.dir.value == "rtl";
        if (from == "start") {
          from = isRtl ? RIGHT : LEFT;
        } else if (from == "end") {
          from = isRtl ? LEFT : RIGHT;
        }
        if (isRtl && getRtlScrollAxisType() == RtlScrollAxisType.INVERTED) {
          if (from == LEFT) {
            return el.scrollWidth - el.clientWidth - el.scrollLeft;
          } else {
            return el.scrollLeft;
          }
        } else if (isRtl && getRtlScrollAxisType() == RtlScrollAxisType.NEGATED) {
          if (from == LEFT) {
            return el.scrollLeft + el.scrollWidth - el.clientWidth;
          } else {
            return -el.scrollLeft;
          }
        } else {
          if (from == LEFT) {
            return el.scrollLeft;
          } else {
            return el.scrollWidth - el.clientWidth - el.scrollLeft;
          }
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _CdkScrollable, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _CdkScrollable, isStandalone: true, selector: "[cdk-scrollable], [cdkScrollable]", ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: CdkScrollable, decorators: [{
      type: Directive,
      args: [{
        selector: "[cdk-scrollable], [cdkScrollable]"
      }]
    }], ctorParameters: () => [] });
    DEFAULT_RESIZE_TIME = 20;
    ViewportRuler = class _ViewportRuler {
      _platform = inject(Platform);
      _listeners;
      /** Cached viewport dimensions. */
      _viewportSize;
      /** Stream of viewport change events. */
      _change = new Subject();
      /** Used to reference correct document/window */
      _document = inject(DOCUMENT);
      constructor() {
        const ngZone = inject(NgZone);
        const renderer = inject(RendererFactory2).createRenderer(null, null);
        ngZone.runOutsideAngular(() => {
          if (this._platform.isBrowser) {
            const changeListener = (event) => this._change.next(event);
            this._listeners = [
              renderer.listen("window", "resize", changeListener),
              renderer.listen("window", "orientationchange", changeListener)
            ];
          }
          this.change().subscribe(() => this._viewportSize = null);
        });
      }
      ngOnDestroy() {
        this._listeners?.forEach((cleanup) => cleanup());
        this._change.complete();
      }
      /** Returns the viewport's width and height. */
      getViewportSize() {
        if (!this._viewportSize) {
          this._updateViewportSize();
        }
        const output = { width: this._viewportSize.width, height: this._viewportSize.height };
        if (!this._platform.isBrowser) {
          this._viewportSize = null;
        }
        return output;
      }
      /** Gets a DOMRect for the viewport's bounds. */
      getViewportRect() {
        const scrollPosition = this.getViewportScrollPosition();
        const { width, height } = this.getViewportSize();
        return {
          top: scrollPosition.top,
          left: scrollPosition.left,
          bottom: scrollPosition.top + height,
          right: scrollPosition.left + width,
          height,
          width
        };
      }
      /** Gets the (top, left) scroll position of the viewport. */
      getViewportScrollPosition() {
        if (!this._platform.isBrowser) {
          return { top: 0, left: 0 };
        }
        const document2 = this._document;
        const window2 = this._getWindow();
        const documentElement = document2.documentElement;
        const documentRect = documentElement.getBoundingClientRect();
        const top = -documentRect.top || document2.body.scrollTop || window2.scrollY || documentElement.scrollTop || 0;
        const left = -documentRect.left || document2.body.scrollLeft || window2.scrollX || documentElement.scrollLeft || 0;
        return { top, left };
      }
      /**
       * Returns a stream that emits whenever the size of the viewport changes.
       * This stream emits outside of the Angular zone.
       * @param throttleTime Time in milliseconds to throttle the stream.
       */
      change(throttleTime = DEFAULT_RESIZE_TIME) {
        return throttleTime > 0 ? this._change.pipe(auditTime(throttleTime)) : this._change;
      }
      /** Use defaultView of injected document if available or fallback to global window reference */
      _getWindow() {
        return this._document.defaultView || window;
      }
      /** Updates the cached viewport size. */
      _updateViewportSize() {
        const window2 = this._getWindow();
        this._viewportSize = this._platform.isBrowser ? { width: window2.innerWidth, height: window2.innerHeight } : { width: 0, height: 0 };
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _ViewportRuler, deps: [], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _ViewportRuler, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: ViewportRuler, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [] });
    VIRTUAL_SCROLLABLE = new InjectionToken("VIRTUAL_SCROLLABLE");
    CdkVirtualScrollable = class _CdkVirtualScrollable extends CdkScrollable {
      constructor() {
        super();
      }
      /**
       * Measure the viewport size for the provided orientation.
       *
       * @param orientation The orientation to measure the size from.
       */
      measureViewportSize(orientation) {
        const viewportEl = this.elementRef.nativeElement;
        return orientation === "horizontal" ? viewportEl.clientWidth : viewportEl.clientHeight;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _CdkVirtualScrollable, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _CdkVirtualScrollable, isStandalone: true, usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: CdkVirtualScrollable, decorators: [{
      type: Directive
    }], ctorParameters: () => [] });
    SCROLL_SCHEDULER = typeof requestAnimationFrame !== "undefined" ? animationFrameScheduler : asapScheduler;
    CdkVirtualScrollViewport = class _CdkVirtualScrollViewport extends CdkVirtualScrollable {
      elementRef = inject(ElementRef);
      _changeDetectorRef = inject(ChangeDetectorRef);
      _scrollStrategy = inject(VIRTUAL_SCROLL_STRATEGY, {
        optional: true
      });
      scrollable = inject(VIRTUAL_SCROLLABLE, { optional: true });
      _platform = inject(Platform);
      /** Emits when the viewport is detached from a CdkVirtualForOf. */
      _detachedSubject = new Subject();
      /** Emits when the rendered range changes. */
      _renderedRangeSubject = new Subject();
      /** The direction the viewport scrolls. */
      get orientation() {
        return this._orientation;
      }
      set orientation(orientation) {
        if (this._orientation !== orientation) {
          this._orientation = orientation;
          this._calculateSpacerSize();
        }
      }
      _orientation = "vertical";
      /**
       * Whether rendered items should persist in the DOM after scrolling out of view. By default, items
       * will be removed.
       */
      appendOnly = false;
      // Note: we don't use the typical EventEmitter here because we need to subscribe to the scroll
      // strategy lazily (i.e. only if the user is actually listening to the events). We do this because
      // depending on how the strategy calculates the scrolled index, it may come at a cost to
      // performance.
      /** Emits when the index of the first element visible in the viewport changes. */
      scrolledIndexChange = new Observable((observer) => this._scrollStrategy.scrolledIndexChange.subscribe((index) => Promise.resolve().then(() => this.ngZone.run(() => observer.next(index)))));
      /** The element that wraps the rendered content. */
      _contentWrapper;
      /** A stream that emits whenever the rendered range changes. */
      renderedRangeStream = this._renderedRangeSubject;
      /**
       * The total size of all content (in pixels), including content that is not currently rendered.
       */
      _totalContentSize = 0;
      /** A string representing the `style.width` property value to be used for the spacer element. */
      _totalContentWidth = signal("");
      /** A string representing the `style.height` property value to be used for the spacer element. */
      _totalContentHeight = signal("");
      /**
       * The CSS transform applied to the rendered subset of items so that they appear within the bounds
       * of the visible viewport.
       */
      _renderedContentTransform;
      /** The currently rendered range of indices. */
      _renderedRange = { start: 0, end: 0 };
      /** The length of the data bound to this viewport (in number of items). */
      _dataLength = 0;
      /** The size of the viewport (in pixels). */
      _viewportSize = 0;
      /** the currently attached CdkVirtualScrollRepeater. */
      _forOf;
      /** The last rendered content offset that was set. */
      _renderedContentOffset = 0;
      /**
       * Whether the last rendered content offset was to the end of the content (and therefore needs to
       * be rewritten as an offset to the start of the content).
       */
      _renderedContentOffsetNeedsRewrite = false;
      _changeDetectionNeeded = signal(false);
      /** A list of functions to run after the next change detection cycle. */
      _runAfterChangeDetection = [];
      /** Subscription to changes in the viewport size. */
      _viewportChanges = Subscription.EMPTY;
      _injector = inject(Injector);
      _isDestroyed = false;
      constructor() {
        super();
        const viewportRuler = inject(ViewportRuler);
        if (!this._scrollStrategy && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw Error('Error: cdk-virtual-scroll-viewport requires the "itemSize" property to be set.');
        }
        this._viewportChanges = viewportRuler.change().subscribe(() => {
          this.checkViewportSize();
        });
        if (!this.scrollable) {
          this.elementRef.nativeElement.classList.add("cdk-virtual-scrollable");
          this.scrollable = this;
        }
        const ref = effect(
          () => {
            if (this._changeDetectionNeeded()) {
              this._doChangeDetection();
            }
          },
          // Using ApplicationRef injector is important here because we want this to be a root
          // effect that runs before change detection of any application views (since we're depending on markForCheck marking parents dirty)
          { injector: inject(ApplicationRef).injector }
        );
        inject(DestroyRef).onDestroy(() => void ref.destroy());
      }
      ngOnInit() {
        if (!this._platform.isBrowser) {
          return;
        }
        if (this.scrollable === this) {
          super.ngOnInit();
        }
        this.ngZone.runOutsideAngular(() => Promise.resolve().then(() => {
          this._measureViewportSize();
          this._scrollStrategy.attach(this);
          this.scrollable.elementScrolled().pipe(
            // Start off with a fake scroll event so we properly detect our initial position.
            startWith(null),
            // Collect multiple events into one until the next animation frame. This way if
            // there are multiple scroll events in the same frame we only need to recheck
            // our layout once.
            auditTime(0, SCROLL_SCHEDULER),
            // Usually `elementScrolled` is completed when the scrollable is destroyed, but
            // that may not be the case if a `CdkVirtualScrollableElement` is used so we have
            // to unsubscribe here just in case.
            takeUntil(this._destroyed)
          ).subscribe(() => this._scrollStrategy.onContentScrolled());
          this._markChangeDetectionNeeded();
        }));
      }
      ngOnDestroy() {
        this.detach();
        this._scrollStrategy.detach();
        this._renderedRangeSubject.complete();
        this._detachedSubject.complete();
        this._viewportChanges.unsubscribe();
        this._isDestroyed = true;
        super.ngOnDestroy();
      }
      /** Attaches a `CdkVirtualScrollRepeater` to this viewport. */
      attach(forOf) {
        if (this._forOf && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw Error("CdkVirtualScrollViewport is already attached.");
        }
        this.ngZone.runOutsideAngular(() => {
          this._forOf = forOf;
          this._forOf.dataStream.pipe(takeUntil(this._detachedSubject)).subscribe((data) => {
            const newLength = data.length;
            if (newLength !== this._dataLength) {
              this._dataLength = newLength;
              this._scrollStrategy.onDataLengthChanged();
            }
            this._doChangeDetection();
          });
        });
      }
      /** Detaches the current `CdkVirtualForOf`. */
      detach() {
        this._forOf = null;
        this._detachedSubject.next();
      }
      /** Gets the length of the data bound to this viewport (in number of items). */
      getDataLength() {
        return this._dataLength;
      }
      /** Gets the size of the viewport (in pixels). */
      getViewportSize() {
        return this._viewportSize;
      }
      // TODO(mmalerba): This is technically out of sync with what's really rendered until a render
      // cycle happens. I'm being careful to only call it after the render cycle is complete and before
      // setting it to something else, but its error prone and should probably be split into
      // `pendingRange` and `renderedRange`, the latter reflecting whats actually in the DOM.
      /** Get the current rendered range of items. */
      getRenderedRange() {
        return this._renderedRange;
      }
      measureBoundingClientRectWithScrollOffset(from) {
        return this.getElementRef().nativeElement.getBoundingClientRect()[from];
      }
      /**
       * Sets the total size of all content (in pixels), including content that is not currently
       * rendered.
       */
      setTotalContentSize(size) {
        if (this._totalContentSize !== size) {
          this._totalContentSize = size;
          this._calculateSpacerSize();
          this._markChangeDetectionNeeded();
        }
      }
      /** Sets the currently rendered range of indices. */
      setRenderedRange(range) {
        if (!rangesEqual(this._renderedRange, range)) {
          if (this.appendOnly) {
            range = { start: 0, end: Math.max(this._renderedRange.end, range.end) };
          }
          this._renderedRangeSubject.next(this._renderedRange = range);
          this._markChangeDetectionNeeded(() => this._scrollStrategy.onContentRendered());
        }
      }
      /**
       * Gets the offset from the start of the viewport to the start of the rendered data (in pixels).
       */
      getOffsetToRenderedContentStart() {
        return this._renderedContentOffsetNeedsRewrite ? null : this._renderedContentOffset;
      }
      /**
       * Sets the offset from the start of the viewport to either the start or end of the rendered data
       * (in pixels).
       */
      setRenderedContentOffset(offset, to = "to-start") {
        offset = this.appendOnly && to === "to-start" ? 0 : offset;
        const isRtl = this.dir && this.dir.value == "rtl";
        const isHorizontal = this.orientation == "horizontal";
        const axis = isHorizontal ? "X" : "Y";
        const axisDirection = isHorizontal && isRtl ? -1 : 1;
        let transform = `translate${axis}(${Number(axisDirection * offset)}px)`;
        this._renderedContentOffset = offset;
        if (to === "to-end") {
          transform += ` translate${axis}(-100%)`;
          this._renderedContentOffsetNeedsRewrite = true;
        }
        if (this._renderedContentTransform != transform) {
          this._renderedContentTransform = transform;
          this._markChangeDetectionNeeded(() => {
            if (this._renderedContentOffsetNeedsRewrite) {
              this._renderedContentOffset -= this.measureRenderedContentSize();
              this._renderedContentOffsetNeedsRewrite = false;
              this.setRenderedContentOffset(this._renderedContentOffset);
            } else {
              this._scrollStrategy.onRenderedOffsetChanged();
            }
          });
        }
      }
      /**
       * Scrolls to the given offset from the start of the viewport. Please note that this is not always
       * the same as setting `scrollTop` or `scrollLeft`. In a horizontal viewport with right-to-left
       * direction, this would be the equivalent of setting a fictional `scrollRight` property.
       * @param offset The offset to scroll to.
       * @param behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
       */
      scrollToOffset(offset, behavior = "auto") {
        const options = { behavior };
        if (this.orientation === "horizontal") {
          options.start = offset;
        } else {
          options.top = offset;
        }
        this.scrollable.scrollTo(options);
      }
      /**
       * Scrolls to the offset for the given index.
       * @param index The index of the element to scroll to.
       * @param behavior The ScrollBehavior to use when scrolling. Default is behavior is `auto`.
       */
      scrollToIndex(index, behavior = "auto") {
        this._scrollStrategy.scrollToIndex(index, behavior);
      }
      /**
       * Gets the current scroll offset from the start of the scrollable (in pixels).
       * @param from The edge to measure the offset from. Defaults to 'top' in vertical mode and 'start'
       *     in horizontal mode.
       */
      measureScrollOffset(from) {
        let measureScrollOffset;
        if (this.scrollable == this) {
          measureScrollOffset = (_from) => super.measureScrollOffset(_from);
        } else {
          measureScrollOffset = (_from) => this.scrollable.measureScrollOffset(_from);
        }
        return Math.max(0, measureScrollOffset(from ?? (this.orientation === "horizontal" ? "start" : "top")) - this.measureViewportOffset());
      }
      /**
       * Measures the offset of the viewport from the scrolling container
       * @param from The edge to measure from.
       */
      measureViewportOffset(from) {
        let fromRect;
        const LEFT = "left";
        const RIGHT = "right";
        const isRtl = this.dir?.value == "rtl";
        if (from == "start") {
          fromRect = isRtl ? RIGHT : LEFT;
        } else if (from == "end") {
          fromRect = isRtl ? LEFT : RIGHT;
        } else if (from) {
          fromRect = from;
        } else {
          fromRect = this.orientation === "horizontal" ? "left" : "top";
        }
        const scrollerClientRect = this.scrollable.measureBoundingClientRectWithScrollOffset(fromRect);
        const viewportClientRect = this.elementRef.nativeElement.getBoundingClientRect()[fromRect];
        return viewportClientRect - scrollerClientRect;
      }
      /** Measure the combined size of all of the rendered items. */
      measureRenderedContentSize() {
        const contentEl = this._contentWrapper.nativeElement;
        return this.orientation === "horizontal" ? contentEl.offsetWidth : contentEl.offsetHeight;
      }
      /**
       * Measure the total combined size of the given range. Throws if the range includes items that are
       * not rendered.
       */
      measureRangeSize(range) {
        if (!this._forOf) {
          return 0;
        }
        return this._forOf.measureRangeSize(range, this.orientation);
      }
      /** Update the viewport dimensions and re-render. */
      checkViewportSize() {
        this._measureViewportSize();
        this._scrollStrategy.onDataLengthChanged();
      }
      /** Measure the viewport size. */
      _measureViewportSize() {
        this._viewportSize = this.scrollable.measureViewportSize(this.orientation);
      }
      /** Queue up change detection to run. */
      _markChangeDetectionNeeded(runAfter) {
        if (runAfter) {
          this._runAfterChangeDetection.push(runAfter);
        }
        if (untracked(this._changeDetectionNeeded)) {
          return;
        }
        this.ngZone.runOutsideAngular(() => {
          Promise.resolve().then(() => {
            this.ngZone.run(() => {
              this._changeDetectionNeeded.set(true);
            });
          });
        });
      }
      /** Run change detection. */
      _doChangeDetection() {
        if (this._isDestroyed) {
          return;
        }
        this.ngZone.run(() => {
          this._changeDetectorRef.markForCheck();
          this._contentWrapper.nativeElement.style.transform = this._renderedContentTransform;
          afterNextRender(() => {
            this._changeDetectionNeeded.set(false);
            const runAfterChangeDetection = this._runAfterChangeDetection;
            this._runAfterChangeDetection = [];
            for (const fn of runAfterChangeDetection) {
              fn();
            }
          }, { injector: this._injector });
        });
      }
      /** Calculates the `style.width` and `style.height` for the spacer element. */
      _calculateSpacerSize() {
        this._totalContentHeight.set(this.orientation === "horizontal" ? "" : `${this._totalContentSize}px`);
        this._totalContentWidth.set(this.orientation === "horizontal" ? `${this._totalContentSize}px` : "");
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _CdkVirtualScrollViewport, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "16.1.0", version: "20.0.0", type: _CdkVirtualScrollViewport, isStandalone: true, selector: "cdk-virtual-scroll-viewport", inputs: { orientation: "orientation", appendOnly: ["appendOnly", "appendOnly", booleanAttribute] }, outputs: { scrolledIndexChange: "scrolledIndexChange" }, host: { properties: { "class.cdk-virtual-scroll-orientation-horizontal": 'orientation === "horizontal"', "class.cdk-virtual-scroll-orientation-vertical": 'orientation !== "horizontal"' }, classAttribute: "cdk-virtual-scroll-viewport" }, providers: [
        {
          provide: CdkScrollable,
          useFactory: (virtualScrollable, viewport) => virtualScrollable || viewport,
          deps: [[new Optional(), new Inject(VIRTUAL_SCROLLABLE)], _CdkVirtualScrollViewport]
        }
      ], viewQueries: [{ propertyName: "_contentWrapper", first: true, predicate: ["contentWrapper"], descendants: true, static: true }], usesInheritance: true, ngImport: core_exports, template: '<!--\n  Wrap the rendered content in an element that will be used to offset it based on the scroll\n  position.\n-->\n<div #contentWrapper class="cdk-virtual-scroll-content-wrapper">\n  <ng-content></ng-content>\n</div>\n<!--\n  Spacer used to force the scrolling container to the correct size for the *total* number of items\n  so that the scrollbar captures the size of the entire data set.\n-->\n<div class="cdk-virtual-scroll-spacer"\n     [style.width]="_totalContentWidth()" [style.height]="_totalContentHeight()"></div>\n', styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;transform:translateZ(0)}.cdk-virtual-scrollable{overflow:auto;will-change:scroll-position;contain:strict}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{height:1px;transform-origin:0 0;flex:0 0 auto}[dir=rtl] .cdk-virtual-scroll-spacer{transform-origin:100% 0}\n"], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: CdkVirtualScrollViewport, decorators: [{
      type: Component,
      args: [{ selector: "cdk-virtual-scroll-viewport", host: {
        "class": "cdk-virtual-scroll-viewport",
        "[class.cdk-virtual-scroll-orientation-horizontal]": 'orientation === "horizontal"',
        "[class.cdk-virtual-scroll-orientation-vertical]": 'orientation !== "horizontal"'
      }, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, providers: [
        {
          provide: CdkScrollable,
          useFactory: (virtualScrollable, viewport) => virtualScrollable || viewport,
          deps: [[new Optional(), new Inject(VIRTUAL_SCROLLABLE)], CdkVirtualScrollViewport]
        }
      ], template: '<!--\n  Wrap the rendered content in an element that will be used to offset it based on the scroll\n  position.\n-->\n<div #contentWrapper class="cdk-virtual-scroll-content-wrapper">\n  <ng-content></ng-content>\n</div>\n<!--\n  Spacer used to force the scrolling container to the correct size for the *total* number of items\n  so that the scrollbar captures the size of the entire data set.\n-->\n<div class="cdk-virtual-scroll-spacer"\n     [style.width]="_totalContentWidth()" [style.height]="_totalContentHeight()"></div>\n', styles: ["cdk-virtual-scroll-viewport{display:block;position:relative;transform:translateZ(0)}.cdk-virtual-scrollable{overflow:auto;will-change:scroll-position;contain:strict}.cdk-virtual-scroll-content-wrapper{position:absolute;top:0;left:0;contain:content}[dir=rtl] .cdk-virtual-scroll-content-wrapper{right:0;left:auto}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper{min-height:100%}.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-horizontal .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-left:0;padding-right:0;margin-left:0;margin-right:0;border-left-width:0;border-right-width:0;outline:none}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper{min-width:100%}.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>dl:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ol:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>table:not([cdkVirtualFor]),.cdk-virtual-scroll-orientation-vertical .cdk-virtual-scroll-content-wrapper>ul:not([cdkVirtualFor]){padding-top:0;padding-bottom:0;margin-top:0;margin-bottom:0;border-top-width:0;border-bottom-width:0;outline:none}.cdk-virtual-scroll-spacer{height:1px;transform-origin:0 0;flex:0 0 auto}[dir=rtl] .cdk-virtual-scroll-spacer{transform-origin:100% 0}\n"] }]
    }], ctorParameters: () => [], propDecorators: { orientation: [{
      type: Input
    }], appendOnly: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], scrolledIndexChange: [{
      type: Output
    }], _contentWrapper: [{
      type: ViewChild,
      args: ["contentWrapper", { static: true }]
    }] } });
    CdkVirtualForOf = class _CdkVirtualForOf {
      _viewContainerRef = inject(ViewContainerRef);
      _template = inject(TemplateRef);
      _differs = inject(IterableDiffers);
      _viewRepeater = inject(_VIEW_REPEATER_STRATEGY);
      _viewport = inject(CdkVirtualScrollViewport, { skipSelf: true });
      /** Emits when the rendered view of the data changes. */
      viewChange = new Subject();
      /** Subject that emits when a new DataSource instance is given. */
      _dataSourceChanges = new Subject();
      /** The DataSource to display. */
      get cdkVirtualForOf() {
        return this._cdkVirtualForOf;
      }
      set cdkVirtualForOf(value) {
        this._cdkVirtualForOf = value;
        if (isDataSource(value)) {
          this._dataSourceChanges.next(value);
        } else {
          this._dataSourceChanges.next(new ArrayDataSource(isObservable(value) ? value : Array.from(value || [])));
        }
      }
      _cdkVirtualForOf;
      /**
       * The `TrackByFunction` to use for tracking changes. The `TrackByFunction` takes the index and
       * the item and produces a value to be used as the item's identity when tracking changes.
       */
      get cdkVirtualForTrackBy() {
        return this._cdkVirtualForTrackBy;
      }
      set cdkVirtualForTrackBy(fn) {
        this._needsUpdate = true;
        this._cdkVirtualForTrackBy = fn ? (index, item) => fn(index + (this._renderedRange ? this._renderedRange.start : 0), item) : void 0;
      }
      _cdkVirtualForTrackBy;
      /** The template used to stamp out new elements. */
      set cdkVirtualForTemplate(value) {
        if (value) {
          this._needsUpdate = true;
          this._template = value;
        }
      }
      /**
       * The size of the cache used to store templates that are not being used for re-use later.
       * Setting the cache size to `0` will disable caching. Defaults to 20 templates.
       */
      get cdkVirtualForTemplateCacheSize() {
        return this._viewRepeater.viewCacheSize;
      }
      set cdkVirtualForTemplateCacheSize(size) {
        this._viewRepeater.viewCacheSize = coerceNumberProperty(size);
      }
      /** Emits whenever the data in the current DataSource changes. */
      dataStream = this._dataSourceChanges.pipe(
        // Start off with null `DataSource`.
        startWith(null),
        // Bundle up the previous and current data sources so we can work with both.
        pairwise(),
        // Use `_changeDataSource` to disconnect from the previous data source and connect to the
        // new one, passing back a stream of data changes which we run through `switchMap` to give
        // us a data stream that emits the latest data from whatever the current `DataSource` is.
        switchMap(([prev, cur]) => this._changeDataSource(prev, cur)),
        // Replay the last emitted data when someone subscribes.
        shareReplay(1)
      );
      /** The differ used to calculate changes to the data. */
      _differ = null;
      /** The most recent data emitted from the DataSource. */
      _data;
      /** The currently rendered items. */
      _renderedItems;
      /** The currently rendered range of indices. */
      _renderedRange;
      /** Whether the rendered data should be updated during the next ngDoCheck cycle. */
      _needsUpdate = false;
      _destroyed = new Subject();
      constructor() {
        const ngZone = inject(NgZone);
        this.dataStream.subscribe((data) => {
          this._data = data;
          this._onRenderedDataChange();
        });
        this._viewport.renderedRangeStream.pipe(takeUntil(this._destroyed)).subscribe((range) => {
          this._renderedRange = range;
          if (this.viewChange.observers.length) {
            ngZone.run(() => this.viewChange.next(this._renderedRange));
          }
          this._onRenderedDataChange();
        });
        this._viewport.attach(this);
      }
      /**
       * Measures the combined size (width for horizontal orientation, height for vertical) of all items
       * in the specified range. Throws an error if the range includes items that are not currently
       * rendered.
       */
      measureRangeSize(range, orientation) {
        if (range.start >= range.end) {
          return 0;
        }
        if ((range.start < this._renderedRange.start || range.end > this._renderedRange.end) && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw Error(`Error: attempted to measure an item that isn't rendered.`);
        }
        const renderedStartIndex = range.start - this._renderedRange.start;
        const rangeLen = range.end - range.start;
        let firstNode;
        let lastNode;
        for (let i = 0; i < rangeLen; i++) {
          const view = this._viewContainerRef.get(i + renderedStartIndex);
          if (view && view.rootNodes.length) {
            firstNode = lastNode = view.rootNodes[0];
            break;
          }
        }
        for (let i = rangeLen - 1; i > -1; i--) {
          const view = this._viewContainerRef.get(i + renderedStartIndex);
          if (view && view.rootNodes.length) {
            lastNode = view.rootNodes[view.rootNodes.length - 1];
            break;
          }
        }
        return firstNode && lastNode ? getOffset(orientation, "end", lastNode) - getOffset(orientation, "start", firstNode) : 0;
      }
      ngDoCheck() {
        if (this._differ && this._needsUpdate) {
          const changes = this._differ.diff(this._renderedItems);
          if (!changes) {
            this._updateContext();
          } else {
            this._applyChanges(changes);
          }
          this._needsUpdate = false;
        }
      }
      ngOnDestroy() {
        this._viewport.detach();
        this._dataSourceChanges.next(void 0);
        this._dataSourceChanges.complete();
        this.viewChange.complete();
        this._destroyed.next();
        this._destroyed.complete();
        this._viewRepeater.detach();
      }
      /** React to scroll state changes in the viewport. */
      _onRenderedDataChange() {
        if (!this._renderedRange) {
          return;
        }
        this._renderedItems = this._data.slice(this._renderedRange.start, this._renderedRange.end);
        if (!this._differ) {
          this._differ = this._differs.find(this._renderedItems).create((index, item) => {
            return this.cdkVirtualForTrackBy ? this.cdkVirtualForTrackBy(index, item) : item;
          });
        }
        this._needsUpdate = true;
      }
      /** Swap out one `DataSource` for another. */
      _changeDataSource(oldDs, newDs) {
        if (oldDs) {
          oldDs.disconnect(this);
        }
        this._needsUpdate = true;
        return newDs ? newDs.connect(this) : of();
      }
      /** Update the `CdkVirtualForOfContext` for all views. */
      _updateContext() {
        const count = this._data.length;
        let i = this._viewContainerRef.length;
        while (i--) {
          const view = this._viewContainerRef.get(i);
          view.context.index = this._renderedRange.start + i;
          view.context.count = count;
          this._updateComputedContextProperties(view.context);
          view.detectChanges();
        }
      }
      /** Apply changes to the DOM. */
      _applyChanges(changes) {
        this._viewRepeater.applyChanges(changes, this._viewContainerRef, (record, _adjustedPreviousIndex, currentIndex) => this._getEmbeddedViewArgs(record, currentIndex), (record) => record.item);
        changes.forEachIdentityChange((record) => {
          const view = this._viewContainerRef.get(record.currentIndex);
          view.context.$implicit = record.item;
        });
        const count = this._data.length;
        let i = this._viewContainerRef.length;
        while (i--) {
          const view = this._viewContainerRef.get(i);
          view.context.index = this._renderedRange.start + i;
          view.context.count = count;
          this._updateComputedContextProperties(view.context);
        }
      }
      /** Update the computed properties on the `CdkVirtualForOfContext`. */
      _updateComputedContextProperties(context) {
        context.first = context.index === 0;
        context.last = context.index === context.count - 1;
        context.even = context.index % 2 === 0;
        context.odd = !context.even;
      }
      _getEmbeddedViewArgs(record, index) {
        return {
          templateRef: this._template,
          context: {
            $implicit: record.item,
            // It's guaranteed that the iterable is not "undefined" or "null" because we only
            // generate views for elements if the "cdkVirtualForOf" iterable has elements.
            cdkVirtualForOf: this._cdkVirtualForOf,
            index: -1,
            count: -1,
            first: false,
            last: false,
            odd: false,
            even: false
          },
          index
        };
      }
      static ngTemplateContextGuard(directive, context) {
        return true;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _CdkVirtualForOf, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _CdkVirtualForOf, isStandalone: true, selector: "[cdkVirtualFor][cdkVirtualForOf]", inputs: { cdkVirtualForOf: "cdkVirtualForOf", cdkVirtualForTrackBy: "cdkVirtualForTrackBy", cdkVirtualForTemplate: "cdkVirtualForTemplate", cdkVirtualForTemplateCacheSize: "cdkVirtualForTemplateCacheSize" }, providers: [{ provide: _VIEW_REPEATER_STRATEGY, useClass: _RecycleViewRepeaterStrategy }], ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: CdkVirtualForOf, decorators: [{
      type: Directive,
      args: [{
        selector: "[cdkVirtualFor][cdkVirtualForOf]",
        providers: [{ provide: _VIEW_REPEATER_STRATEGY, useClass: _RecycleViewRepeaterStrategy }]
      }]
    }], ctorParameters: () => [], propDecorators: { cdkVirtualForOf: [{
      type: Input
    }], cdkVirtualForTrackBy: [{
      type: Input
    }], cdkVirtualForTemplate: [{
      type: Input
    }], cdkVirtualForTemplateCacheSize: [{
      type: Input
    }] } });
    CdkVirtualScrollableElement = class _CdkVirtualScrollableElement extends CdkVirtualScrollable {
      constructor() {
        super();
      }
      measureBoundingClientRectWithScrollOffset(from) {
        return this.getElementRef().nativeElement.getBoundingClientRect()[from] - this.measureScrollOffset(from);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _CdkVirtualScrollableElement, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _CdkVirtualScrollableElement, isStandalone: true, selector: "[cdkVirtualScrollingElement]", host: { classAttribute: "cdk-virtual-scrollable" }, providers: [{ provide: VIRTUAL_SCROLLABLE, useExisting: _CdkVirtualScrollableElement }], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: CdkVirtualScrollableElement, decorators: [{
      type: Directive,
      args: [{
        selector: "[cdkVirtualScrollingElement]",
        providers: [{ provide: VIRTUAL_SCROLLABLE, useExisting: CdkVirtualScrollableElement }],
        host: {
          "class": "cdk-virtual-scrollable"
        }
      }]
    }], ctorParameters: () => [] });
    CdkVirtualScrollableWindow = class _CdkVirtualScrollableWindow extends CdkVirtualScrollable {
      constructor() {
        super();
        const document2 = inject(DOCUMENT);
        this.elementRef = new ElementRef(document2.documentElement);
        this._scrollElement = document2;
      }
      measureBoundingClientRectWithScrollOffset(from) {
        return this.getElementRef().nativeElement.getBoundingClientRect()[from];
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _CdkVirtualScrollableWindow, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _CdkVirtualScrollableWindow, isStandalone: true, selector: "cdk-virtual-scroll-viewport[scrollWindow]", providers: [{ provide: VIRTUAL_SCROLLABLE, useExisting: _CdkVirtualScrollableWindow }], usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: CdkVirtualScrollableWindow, decorators: [{
      type: Directive,
      args: [{
        selector: "cdk-virtual-scroll-viewport[scrollWindow]",
        providers: [{ provide: VIRTUAL_SCROLLABLE, useExisting: CdkVirtualScrollableWindow }]
      }]
    }], ctorParameters: () => [] });
    CdkScrollableModule = class _CdkScrollableModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _CdkScrollableModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.0", ngImport: core_exports, type: _CdkScrollableModule, imports: [CdkScrollable], exports: [CdkScrollable] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _CdkScrollableModule });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: CdkScrollableModule, decorators: [{
      type: NgModule,
      args: [{
        exports: [CdkScrollable],
        imports: [CdkScrollable]
      }]
    }] });
    ScrollingModule = class _ScrollingModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _ScrollingModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.0", ngImport: core_exports, type: _ScrollingModule, imports: [
        BidiModule,
        CdkScrollableModule,
        CdkVirtualScrollViewport,
        CdkFixedSizeVirtualScroll,
        CdkVirtualForOf,
        CdkVirtualScrollableWindow,
        CdkVirtualScrollableElement
      ], exports: [
        BidiModule,
        CdkScrollableModule,
        CdkFixedSizeVirtualScroll,
        CdkVirtualForOf,
        CdkVirtualScrollViewport,
        CdkVirtualScrollableWindow,
        CdkVirtualScrollableElement
      ] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _ScrollingModule, imports: [
        BidiModule,
        CdkScrollableModule,
        BidiModule,
        CdkScrollableModule
      ] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: ScrollingModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [
          BidiModule,
          CdkScrollableModule,
          CdkVirtualScrollViewport,
          CdkFixedSizeVirtualScroll,
          CdkVirtualForOf,
          CdkVirtualScrollableWindow,
          CdkVirtualScrollableElement
        ],
        exports: [
          BidiModule,
          CdkScrollableModule,
          CdkFixedSizeVirtualScroll,
          CdkVirtualForOf,
          CdkVirtualScrollViewport,
          CdkVirtualScrollableWindow,
          CdkVirtualScrollableElement
        ]
      }]
    }] });
  }
});

// node_modules/@angular/cdk/fesm2022/layout.mjs
var LayoutModule;
var init_layout = __esm({
  "node_modules/@angular/cdk/fesm2022/layout.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_breakpoints_observer_QutrMj4x();
    LayoutModule = class _LayoutModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _LayoutModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.0", ngImport: core_exports, type: _LayoutModule });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _LayoutModule });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: LayoutModule, decorators: [{
      type: NgModule,
      args: [{}]
    }] });
  }
});

// node_modules/@angular/material/fesm2022/animation-ChQ1vjiF.mjs
function _getAnimationsState() {
  if (inject(MATERIAL_ANIMATIONS, { optional: true })?.animationsDisabled || inject(ANIMATION_MODULE_TYPE, { optional: true }) === "NoopAnimations") {
    return "di-disabled";
  }
  reducedMotion ??= inject(MediaMatcher).matchMedia("(prefers-reduced-motion)").matches;
  return reducedMotion ? "reduced-motion" : "enabled";
}
function _animationsDisabled() {
  return _getAnimationsState() !== "enabled";
}
var MATERIAL_ANIMATIONS, reducedMotion;
var init_animation_ChQ1vjiF = __esm({
  "node_modules/@angular/material/fesm2022/animation-ChQ1vjiF.mjs"() {
    "use strict";
    init_layout();
    init_core();
    MATERIAL_ANIMATIONS = new InjectionToken("MATERIAL_ANIMATIONS");
    reducedMotion = null;
  }
});

// node_modules/@angular/material/fesm2022/common-module-cKSwHniA.mjs
var MATERIAL_SANITY_CHECKS, MatCommonModule;
var init_common_module_cKSwHniA = __esm({
  "node_modules/@angular/material/fesm2022/common-module-cKSwHniA.mjs"() {
    "use strict";
    init_a11y();
    init_bidi();
    init_core();
    init_core();
    MATERIAL_SANITY_CHECKS = new InjectionToken("mat-sanity-checks", {
      providedIn: "root",
      factory: () => true
    });
    MatCommonModule = class _MatCommonModule {
      constructor() {
        inject(HighContrastModeDetector)._applyBodyHighContrastModeCssClasses();
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatCommonModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.0", ngImport: core_exports, type: _MatCommonModule, imports: [BidiModule], exports: [BidiModule] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatCommonModule, imports: [BidiModule, BidiModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatCommonModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [BidiModule],
        exports: [BidiModule]
      }]
    }], ctorParameters: () => [] });
  }
});

// node_modules/@angular/material/fesm2022/sidenav.mjs
function throwMatDuplicatedDrawerError(position) {
  throw Error(`A drawer was already declared for 'position="${position}"'`);
}
function MAT_DRAWER_DEFAULT_AUTOSIZE_FACTORY() {
  return false;
}
var MAT_DRAWER_DEFAULT_AUTOSIZE, MAT_DRAWER_CONTAINER, MatDrawerContent, MatDrawer, MatDrawerContainer, MatSidenavContent, MatSidenav, MatSidenavContainer, MatSidenavModule;
var init_sidenav = __esm({
  "node_modules/@angular/material/fesm2022/sidenav.mjs"() {
    "use strict";
    init_a11y();
    init_bidi();
    init_coercion();
    init_keycodes();
    init_platform();
    init_scrolling();
    init_core();
    init_core();
    init_esm();
    init_operators();
    init_animation_ChQ1vjiF();
    init_common_module_cKSwHniA();
    MAT_DRAWER_DEFAULT_AUTOSIZE = new InjectionToken("MAT_DRAWER_DEFAULT_AUTOSIZE", {
      providedIn: "root",
      factory: MAT_DRAWER_DEFAULT_AUTOSIZE_FACTORY
    });
    MAT_DRAWER_CONTAINER = new InjectionToken("MAT_DRAWER_CONTAINER");
    MatDrawerContent = class _MatDrawerContent extends CdkScrollable {
      _platform = inject(Platform);
      _changeDetectorRef = inject(ChangeDetectorRef);
      _container = inject(MatDrawerContainer);
      constructor() {
        const elementRef = inject(ElementRef);
        const scrollDispatcher = inject(ScrollDispatcher);
        const ngZone = inject(NgZone);
        super(elementRef, scrollDispatcher, ngZone);
      }
      ngAfterContentInit() {
        this._container._contentMarginChanges.subscribe(() => {
          this._changeDetectorRef.markForCheck();
        });
      }
      /** Determines whether the content element should be hidden from the user. */
      _shouldBeHidden() {
        if (this._platform.isBrowser) {
          return false;
        }
        const { start, end } = this._container;
        return start != null && start.mode !== "over" && start.opened || end != null && end.mode !== "over" && end.opened;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatDrawerContent, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0", type: _MatDrawerContent, isStandalone: true, selector: "mat-drawer-content", host: { properties: { "style.margin-left.px": "_container._contentMargins.left", "style.margin-right.px": "_container._contentMargins.right", "class.mat-drawer-content-hidden": "_shouldBeHidden()" }, classAttribute: "mat-drawer-content" }, providers: [
        {
          provide: CdkScrollable,
          useExisting: _MatDrawerContent
        }
      ], usesInheritance: true, ngImport: core_exports, template: "<ng-content></ng-content>", isInline: true, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatDrawerContent, decorators: [{
      type: Component,
      args: [{
        selector: "mat-drawer-content",
        template: "<ng-content></ng-content>",
        host: {
          "class": "mat-drawer-content",
          "[style.margin-left.px]": "_container._contentMargins.left",
          "[style.margin-right.px]": "_container._contentMargins.right",
          "[class.mat-drawer-content-hidden]": "_shouldBeHidden()"
        },
        changeDetection: ChangeDetectionStrategy.OnPush,
        encapsulation: ViewEncapsulation.None,
        providers: [
          {
            provide: CdkScrollable,
            useExisting: MatDrawerContent
          }
        ]
      }]
    }], ctorParameters: () => [] });
    MatDrawer = class _MatDrawer {
      _elementRef = inject(ElementRef);
      _focusTrapFactory = inject(FocusTrapFactory);
      _focusMonitor = inject(FocusMonitor);
      _platform = inject(Platform);
      _ngZone = inject(NgZone);
      _renderer = inject(Renderer2);
      _interactivityChecker = inject(InteractivityChecker);
      _doc = inject(DOCUMENT);
      _container = inject(MAT_DRAWER_CONTAINER, { optional: true });
      _focusTrap = null;
      _elementFocusedBeforeDrawerWasOpened = null;
      _eventCleanups;
      /** Whether the view of the component has been attached. */
      _isAttached;
      /** Anchor node used to restore the drawer to its initial position. */
      _anchor;
      /** The side that the drawer is attached to. */
      get position() {
        return this._position;
      }
      set position(value) {
        value = value === "end" ? "end" : "start";
        if (value !== this._position) {
          if (this._isAttached) {
            this._updatePositionInParent(value);
          }
          this._position = value;
          this.onPositionChanged.emit();
        }
      }
      _position = "start";
      /** Mode of the drawer; one of 'over', 'push' or 'side'. */
      get mode() {
        return this._mode;
      }
      set mode(value) {
        this._mode = value;
        this._updateFocusTrapState();
        this._modeChanged.next();
      }
      _mode = "over";
      /** Whether the drawer can be closed with the escape key or by clicking on the backdrop. */
      get disableClose() {
        return this._disableClose;
      }
      set disableClose(value) {
        this._disableClose = coerceBooleanProperty(value);
      }
      _disableClose = false;
      /**
       * Whether the drawer should focus the first focusable element automatically when opened.
       * Defaults to false in when `mode` is set to `side`, otherwise defaults to `true`. If explicitly
       * enabled, focus will be moved into the sidenav in `side` mode as well.
       * @breaking-change 14.0.0 Remove boolean option from autoFocus. Use string or AutoFocusTarget
       * instead.
       */
      get autoFocus() {
        const value = this._autoFocus;
        if (value == null) {
          if (this.mode === "side") {
            return "dialog";
          } else {
            return "first-tabbable";
          }
        }
        return value;
      }
      set autoFocus(value) {
        if (value === "true" || value === "false" || value == null) {
          value = coerceBooleanProperty(value);
        }
        this._autoFocus = value;
      }
      _autoFocus;
      /**
       * Whether the drawer is opened. We overload this because we trigger an event when it
       * starts or end.
       */
      get opened() {
        return this._opened();
      }
      set opened(value) {
        this.toggle(coerceBooleanProperty(value));
      }
      _opened = signal(false);
      /** How the sidenav was opened (keypress, mouse click etc.) */
      _openedVia;
      /** Emits whenever the drawer has started animating. */
      _animationStarted = new Subject();
      /** Emits whenever the drawer is done animating. */
      _animationEnd = new Subject();
      /** Event emitted when the drawer open state is changed. */
      openedChange = (
        // Note this has to be async in order to avoid some issues with two-bindings (see #8872).
        new EventEmitter(
          /* isAsync */
          true
        )
      );
      /** Event emitted when the drawer has been opened. */
      _openedStream = this.openedChange.pipe(filter((o) => o), map(() => {
      }));
      /** Event emitted when the drawer has started opening. */
      openedStart = this._animationStarted.pipe(filter(() => this.opened), mapTo(void 0));
      /** Event emitted when the drawer has been closed. */
      _closedStream = this.openedChange.pipe(filter((o) => !o), map(() => {
      }));
      /** Event emitted when the drawer has started closing. */
      closedStart = this._animationStarted.pipe(filter(() => !this.opened), mapTo(void 0));
      /** Emits when the component is destroyed. */
      _destroyed = new Subject();
      /** Event emitted when the drawer's position changes. */
      // tslint:disable-next-line:no-output-on-prefix
      onPositionChanged = new EventEmitter();
      /** Reference to the inner element that contains all the content. */
      _content;
      /**
       * An observable that emits when the drawer mode changes. This is used by the drawer container to
       * to know when to when the mode changes so it can adapt the margins on the content.
       */
      _modeChanged = new Subject();
      _injector = inject(Injector);
      _changeDetectorRef = inject(ChangeDetectorRef);
      constructor() {
        this.openedChange.pipe(takeUntil(this._destroyed)).subscribe((opened) => {
          if (opened) {
            this._elementFocusedBeforeDrawerWasOpened = this._doc.activeElement;
            this._takeFocus();
          } else if (this._isFocusWithinDrawer()) {
            this._restoreFocus(this._openedVia || "program");
          }
        });
        this._ngZone.runOutsideAngular(() => {
          const element = this._elementRef.nativeElement;
          fromEvent(element, "keydown").pipe(filter((event) => {
            return event.keyCode === ESCAPE && !this.disableClose && !hasModifierKey(event);
          }), takeUntil(this._destroyed)).subscribe((event) => this._ngZone.run(() => {
            this.close();
            event.stopPropagation();
            event.preventDefault();
          }));
          this._eventCleanups = [
            this._renderer.listen(element, "transitionrun", this._handleTransitionEvent),
            this._renderer.listen(element, "transitionend", this._handleTransitionEvent),
            this._renderer.listen(element, "transitioncancel", this._handleTransitionEvent)
          ];
        });
        this._animationEnd.subscribe(() => {
          this.openedChange.emit(this.opened);
        });
      }
      /**
       * Focuses the provided element. If the element is not focusable, it will add a tabIndex
       * attribute to forcefully focus it. The attribute is removed after focus is moved.
       * @param element The element to focus.
       */
      _forceFocus(element, options) {
        if (!this._interactivityChecker.isFocusable(element)) {
          element.tabIndex = -1;
          this._ngZone.runOutsideAngular(() => {
            const callback = () => {
              cleanupBlur();
              cleanupMousedown();
              element.removeAttribute("tabindex");
            };
            const cleanupBlur = this._renderer.listen(element, "blur", callback);
            const cleanupMousedown = this._renderer.listen(element, "mousedown", callback);
          });
        }
        element.focus(options);
      }
      /**
       * Focuses the first element that matches the given selector within the focus trap.
       * @param selector The CSS selector for the element to set focus to.
       */
      _focusByCssSelector(selector, options) {
        let elementToFocus = this._elementRef.nativeElement.querySelector(selector);
        if (elementToFocus) {
          this._forceFocus(elementToFocus, options);
        }
      }
      /**
       * Moves focus into the drawer. Note that this works even if
       * the focus trap is disabled in `side` mode.
       */
      _takeFocus() {
        if (!this._focusTrap) {
          return;
        }
        const element = this._elementRef.nativeElement;
        switch (this.autoFocus) {
          case false:
          case "dialog":
            return;
          case true:
          case "first-tabbable":
            afterNextRender(() => {
              const hasMovedFocus = this._focusTrap.focusInitialElement();
              if (!hasMovedFocus && typeof element.focus === "function") {
                element.focus();
              }
            }, { injector: this._injector });
            break;
          case "first-heading":
            this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');
            break;
          default:
            this._focusByCssSelector(this.autoFocus);
            break;
        }
      }
      /**
       * Restores focus to the element that was originally focused when the drawer opened.
       * If no element was focused at that time, the focus will be restored to the drawer.
       */
      _restoreFocus(focusOrigin) {
        if (this.autoFocus === "dialog") {
          return;
        }
        if (this._elementFocusedBeforeDrawerWasOpened) {
          this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened, focusOrigin);
        } else {
          this._elementRef.nativeElement.blur();
        }
        this._elementFocusedBeforeDrawerWasOpened = null;
      }
      /** Whether focus is currently within the drawer. */
      _isFocusWithinDrawer() {
        const activeEl = this._doc.activeElement;
        return !!activeEl && this._elementRef.nativeElement.contains(activeEl);
      }
      ngAfterViewInit() {
        this._isAttached = true;
        if (this._position === "end") {
          this._updatePositionInParent("end");
        }
        if (this._platform.isBrowser) {
          this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement);
          this._updateFocusTrapState();
        }
      }
      ngOnDestroy() {
        this._eventCleanups.forEach((cleanup) => cleanup());
        this._focusTrap?.destroy();
        this._anchor?.remove();
        this._anchor = null;
        this._animationStarted.complete();
        this._animationEnd.complete();
        this._modeChanged.complete();
        this._destroyed.next();
        this._destroyed.complete();
      }
      /**
       * Open the drawer.
       * @param openedVia Whether the drawer was opened by a key press, mouse click or programmatically.
       * Used for focus management after the sidenav is closed.
       */
      open(openedVia) {
        return this.toggle(true, openedVia);
      }
      /** Close the drawer. */
      close() {
        return this.toggle(false);
      }
      /** Closes the drawer with context that the backdrop was clicked. */
      _closeViaBackdropClick() {
        return this._setOpen(
          /* isOpen */
          false,
          /* restoreFocus */
          true,
          "mouse"
        );
      }
      /**
       * Toggle this drawer.
       * @param isOpen Whether the drawer should be open.
       * @param openedVia Whether the drawer was opened by a key press, mouse click or programmatically.
       * Used for focus management after the sidenav is closed.
       */
      toggle(isOpen = !this.opened, openedVia) {
        if (isOpen && openedVia) {
          this._openedVia = openedVia;
        }
        const result = this._setOpen(
          isOpen,
          /* restoreFocus */
          !isOpen && this._isFocusWithinDrawer(),
          this._openedVia || "program"
        );
        if (!isOpen) {
          this._openedVia = null;
        }
        return result;
      }
      /**
       * Toggles the opened state of the drawer.
       * @param isOpen Whether the drawer should open or close.
       * @param restoreFocus Whether focus should be restored on close.
       * @param focusOrigin Origin to use when restoring focus.
       */
      _setOpen(isOpen, restoreFocus, focusOrigin) {
        if (isOpen === this.opened) {
          return Promise.resolve(isOpen ? "open" : "close");
        }
        this._opened.set(isOpen);
        if (this._container?._transitionsEnabled) {
          this._setIsAnimating(true);
        } else {
          setTimeout(() => {
            this._animationStarted.next();
            this._animationEnd.next();
          });
        }
        this._elementRef.nativeElement.classList.toggle("mat-drawer-opened", isOpen);
        if (!isOpen && restoreFocus) {
          this._restoreFocus(focusOrigin);
        }
        this._changeDetectorRef.markForCheck();
        this._updateFocusTrapState();
        return new Promise((resolve) => {
          this.openedChange.pipe(take(1)).subscribe((open) => resolve(open ? "open" : "close"));
        });
      }
      /** Toggles whether the drawer is currently animating. */
      _setIsAnimating(isAnimating) {
        this._elementRef.nativeElement.classList.toggle("mat-drawer-animating", isAnimating);
      }
      _getWidth() {
        return this._elementRef.nativeElement.offsetWidth || 0;
      }
      /** Updates the enabled state of the focus trap. */
      _updateFocusTrapState() {
        if (this._focusTrap) {
          this._focusTrap.enabled = !!this._container?.hasBackdrop && this.opened;
        }
      }
      /**
       * Updates the position of the drawer in the DOM. We need to move the element around ourselves
       * when it's in the `end` position so that it comes after the content and the visual order
       * matches the tab order. We also need to be able to move it back to `start` if the sidenav
       * started off as `end` and was changed to `start`.
       */
      _updatePositionInParent(newPosition) {
        if (!this._platform.isBrowser) {
          return;
        }
        const element = this._elementRef.nativeElement;
        const parent = element.parentNode;
        if (newPosition === "end") {
          if (!this._anchor) {
            this._anchor = this._doc.createComment("mat-drawer-anchor");
            parent.insertBefore(this._anchor, element);
          }
          parent.appendChild(element);
        } else if (this._anchor) {
          this._anchor.parentNode.insertBefore(element, this._anchor);
        }
      }
      /** Event handler for animation events. */
      _handleTransitionEvent = (event) => {
        const element = this._elementRef.nativeElement;
        if (event.target === element) {
          this._ngZone.run(() => {
            if (event.type === "transitionrun") {
              this._animationStarted.next(event);
            } else {
              if (event.type === "transitionend") {
                this._setIsAnimating(false);
              }
              this._animationEnd.next(event);
            }
          });
        }
      };
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatDrawer, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0", type: _MatDrawer, isStandalone: true, selector: "mat-drawer", inputs: { position: "position", mode: "mode", disableClose: "disableClose", autoFocus: "autoFocus", opened: "opened" }, outputs: { openedChange: "openedChange", _openedStream: "opened", openedStart: "openedStart", _closedStream: "closed", closedStart: "closedStart", onPositionChanged: "positionChanged" }, host: { properties: { "attr.align": "null", "class.mat-drawer-end": 'position === "end"', "class.mat-drawer-over": 'mode === "over"', "class.mat-drawer-push": 'mode === "push"', "class.mat-drawer-side": 'mode === "side"', "style.visibility": '(!_container && !opened) ? "hidden" : null', "attr.tabIndex": '(mode !== "side") ? "-1" : null' }, classAttribute: "mat-drawer" }, viewQueries: [{ propertyName: "_content", first: true, predicate: ["content"], descendants: true }], exportAs: ["matDrawer"], ngImport: core_exports, template: '<div class="mat-drawer-inner-container" cdkScrollable #content>\r\n  <ng-content></ng-content>\r\n</div>\r\n', dependencies: [{ kind: "directive", type: CdkScrollable, selector: "[cdk-scrollable], [cdkScrollable]" }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatDrawer, decorators: [{
      type: Component,
      args: [{ selector: "mat-drawer", exportAs: "matDrawer", host: {
        "class": "mat-drawer",
        // must prevent the browser from aligning text based on value
        "[attr.align]": "null",
        "[class.mat-drawer-end]": 'position === "end"',
        "[class.mat-drawer-over]": 'mode === "over"',
        "[class.mat-drawer-push]": 'mode === "push"',
        "[class.mat-drawer-side]": 'mode === "side"',
        // The styles that render the sidenav off-screen come from the drawer container. Prior to #30235
        // this was also done by the animations module which some internal tests seem to depend on.
        // Simulate it by toggling the `hidden` attribute instead.
        "[style.visibility]": '(!_container && !opened) ? "hidden" : null',
        // The sidenav container should not be focused on when used in side mode. See b/286459024 for
        // reference. Updates tabIndex of drawer/container to default to null if in side mode.
        "[attr.tabIndex]": '(mode !== "side") ? "-1" : null'
      }, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, imports: [CdkScrollable], template: '<div class="mat-drawer-inner-container" cdkScrollable #content>\r\n  <ng-content></ng-content>\r\n</div>\r\n' }]
    }], ctorParameters: () => [], propDecorators: { position: [{
      type: Input
    }], mode: [{
      type: Input
    }], disableClose: [{
      type: Input
    }], autoFocus: [{
      type: Input
    }], opened: [{
      type: Input
    }], openedChange: [{
      type: Output
    }], _openedStream: [{
      type: Output,
      args: ["opened"]
    }], openedStart: [{
      type: Output
    }], _closedStream: [{
      type: Output,
      args: ["closed"]
    }], closedStart: [{
      type: Output
    }], onPositionChanged: [{
      type: Output,
      args: ["positionChanged"]
    }], _content: [{
      type: ViewChild,
      args: ["content"]
    }] } });
    MatDrawerContainer = class _MatDrawerContainer {
      _dir = inject(Directionality, { optional: true });
      _element = inject(ElementRef);
      _ngZone = inject(NgZone);
      _changeDetectorRef = inject(ChangeDetectorRef);
      _animationDisabled = _animationsDisabled();
      _transitionsEnabled = false;
      /** All drawers in the container. Includes drawers from inside nested containers. */
      _allDrawers;
      /** Drawers that belong to this container. */
      _drawers = new QueryList();
      _content;
      _userContent;
      /** The drawer child with the `start` position. */
      get start() {
        return this._start;
      }
      /** The drawer child with the `end` position. */
      get end() {
        return this._end;
      }
      /**
       * Whether to automatically resize the container whenever
       * the size of any of its drawers changes.
       *
       * **Use at your own risk!** Enabling this option can cause layout thrashing by measuring
       * the drawers on every change detection cycle. Can be configured globally via the
       * `MAT_DRAWER_DEFAULT_AUTOSIZE` token.
       */
      get autosize() {
        return this._autosize;
      }
      set autosize(value) {
        this._autosize = coerceBooleanProperty(value);
      }
      _autosize = inject(MAT_DRAWER_DEFAULT_AUTOSIZE);
      /**
       * Whether the drawer container should have a backdrop while one of the sidenavs is open.
       * If explicitly set to `true`, the backdrop will be enabled for drawers in the `side`
       * mode as well.
       */
      get hasBackdrop() {
        return this._drawerHasBackdrop(this._start) || this._drawerHasBackdrop(this._end);
      }
      set hasBackdrop(value) {
        this._backdropOverride = value == null ? null : coerceBooleanProperty(value);
      }
      _backdropOverride;
      /** Event emitted when the drawer backdrop is clicked. */
      backdropClick = new EventEmitter();
      /** The drawer at the start/end position, independent of direction. */
      _start;
      _end;
      /**
       * The drawer at the left/right. When direction changes, these will change as well.
       * They're used as aliases for the above to set the left/right style properly.
       * In LTR, _left == _start and _right == _end.
       * In RTL, _left == _end and _right == _start.
       */
      _left;
      _right;
      /** Emits when the component is destroyed. */
      _destroyed = new Subject();
      /** Emits on every ngDoCheck. Used for debouncing reflows. */
      _doCheckSubject = new Subject();
      /**
       * Margins to be applied to the content. These are used to push / shrink the drawer content when a
       * drawer is open. We use margin rather than transform even for push mode because transform breaks
       * fixed position elements inside of the transformed element.
       */
      _contentMargins = { left: null, right: null };
      _contentMarginChanges = new Subject();
      /** Reference to the CdkScrollable instance that wraps the scrollable content. */
      get scrollable() {
        return this._userContent || this._content;
      }
      _injector = inject(Injector);
      constructor() {
        const platform = inject(Platform);
        const viewportRuler = inject(ViewportRuler);
        this._dir?.change.pipe(takeUntil(this._destroyed)).subscribe(() => {
          this._validateDrawers();
          this.updateContentMargins();
        });
        viewportRuler.change().pipe(takeUntil(this._destroyed)).subscribe(() => this.updateContentMargins());
        if (!this._animationDisabled && platform.isBrowser) {
          this._ngZone.runOutsideAngular(() => {
            setTimeout(() => {
              this._element.nativeElement.classList.add("mat-drawer-transition");
              this._transitionsEnabled = true;
            }, 200);
          });
        }
      }
      ngAfterContentInit() {
        this._allDrawers.changes.pipe(startWith(this._allDrawers), takeUntil(this._destroyed)).subscribe((drawer) => {
          this._drawers.reset(drawer.filter((item) => !item._container || item._container === this));
          this._drawers.notifyOnChanges();
        });
        this._drawers.changes.pipe(startWith(null)).subscribe(() => {
          this._validateDrawers();
          this._drawers.forEach((drawer) => {
            this._watchDrawerToggle(drawer);
            this._watchDrawerPosition(drawer);
            this._watchDrawerMode(drawer);
          });
          if (!this._drawers.length || this._isDrawerOpen(this._start) || this._isDrawerOpen(this._end)) {
            this.updateContentMargins();
          }
          this._changeDetectorRef.markForCheck();
        });
        this._ngZone.runOutsideAngular(() => {
          this._doCheckSubject.pipe(
            debounceTime(10),
            // Arbitrary debounce time, less than a frame at 60fps
            takeUntil(this._destroyed)
          ).subscribe(() => this.updateContentMargins());
        });
      }
      ngOnDestroy() {
        this._contentMarginChanges.complete();
        this._doCheckSubject.complete();
        this._drawers.destroy();
        this._destroyed.next();
        this._destroyed.complete();
      }
      /** Calls `open` of both start and end drawers */
      open() {
        this._drawers.forEach((drawer) => drawer.open());
      }
      /** Calls `close` of both start and end drawers */
      close() {
        this._drawers.forEach((drawer) => drawer.close());
      }
      /**
       * Recalculates and updates the inline styles for the content. Note that this should be used
       * sparingly, because it causes a reflow.
       */
      updateContentMargins() {
        let left = 0;
        let right = 0;
        if (this._left && this._left.opened) {
          if (this._left.mode == "side") {
            left += this._left._getWidth();
          } else if (this._left.mode == "push") {
            const width = this._left._getWidth();
            left += width;
            right -= width;
          }
        }
        if (this._right && this._right.opened) {
          if (this._right.mode == "side") {
            right += this._right._getWidth();
          } else if (this._right.mode == "push") {
            const width = this._right._getWidth();
            right += width;
            left -= width;
          }
        }
        left = left || null;
        right = right || null;
        if (left !== this._contentMargins.left || right !== this._contentMargins.right) {
          this._contentMargins = { left, right };
          this._ngZone.run(() => this._contentMarginChanges.next(this._contentMargins));
        }
      }
      ngDoCheck() {
        if (this._autosize && this._isPushed()) {
          this._ngZone.runOutsideAngular(() => this._doCheckSubject.next());
        }
      }
      /**
       * Subscribes to drawer events in order to set a class on the main container element when the
       * drawer is open and the backdrop is visible. This ensures any overflow on the container element
       * is properly hidden.
       */
      _watchDrawerToggle(drawer) {
        drawer._animationStarted.pipe(takeUntil(this._drawers.changes)).subscribe(() => {
          this.updateContentMargins();
          this._changeDetectorRef.markForCheck();
        });
        if (drawer.mode !== "side") {
          drawer.openedChange.pipe(takeUntil(this._drawers.changes)).subscribe(() => this._setContainerClass(drawer.opened));
        }
      }
      /**
       * Subscribes to drawer onPositionChanged event in order to
       * re-validate drawers when the position changes.
       */
      _watchDrawerPosition(drawer) {
        drawer.onPositionChanged.pipe(takeUntil(this._drawers.changes)).subscribe(() => {
          afterNextRender({ read: () => this._validateDrawers() }, { injector: this._injector });
        });
      }
      /** Subscribes to changes in drawer mode so we can run change detection. */
      _watchDrawerMode(drawer) {
        drawer._modeChanged.pipe(takeUntil(merge(this._drawers.changes, this._destroyed))).subscribe(() => {
          this.updateContentMargins();
          this._changeDetectorRef.markForCheck();
        });
      }
      /** Toggles the 'mat-drawer-opened' class on the main 'mat-drawer-container' element. */
      _setContainerClass(isAdd) {
        const classList = this._element.nativeElement.classList;
        const className = "mat-drawer-container-has-open";
        if (isAdd) {
          classList.add(className);
        } else {
          classList.remove(className);
        }
      }
      /** Validate the state of the drawer children components. */
      _validateDrawers() {
        this._start = this._end = null;
        this._drawers.forEach((drawer) => {
          if (drawer.position == "end") {
            if (this._end != null && (typeof ngDevMode === "undefined" || ngDevMode)) {
              throwMatDuplicatedDrawerError("end");
            }
            this._end = drawer;
          } else {
            if (this._start != null && (typeof ngDevMode === "undefined" || ngDevMode)) {
              throwMatDuplicatedDrawerError("start");
            }
            this._start = drawer;
          }
        });
        this._right = this._left = null;
        if (this._dir && this._dir.value === "rtl") {
          this._left = this._end;
          this._right = this._start;
        } else {
          this._left = this._start;
          this._right = this._end;
        }
      }
      /** Whether the container is being pushed to the side by one of the drawers. */
      _isPushed() {
        return this._isDrawerOpen(this._start) && this._start.mode != "over" || this._isDrawerOpen(this._end) && this._end.mode != "over";
      }
      _onBackdropClicked() {
        this.backdropClick.emit();
        this._closeModalDrawersViaBackdrop();
      }
      _closeModalDrawersViaBackdrop() {
        [this._start, this._end].filter((drawer) => drawer && !drawer.disableClose && this._drawerHasBackdrop(drawer)).forEach((drawer) => drawer._closeViaBackdropClick());
      }
      _isShowingBackdrop() {
        return this._isDrawerOpen(this._start) && this._drawerHasBackdrop(this._start) || this._isDrawerOpen(this._end) && this._drawerHasBackdrop(this._end);
      }
      _isDrawerOpen(drawer) {
        return drawer != null && drawer.opened;
      }
      // Whether argument drawer should have a backdrop when it opens
      _drawerHasBackdrop(drawer) {
        if (this._backdropOverride == null) {
          return !!drawer && drawer.mode !== "side";
        }
        return this._backdropOverride;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatDrawerContainer, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "17.0.0", version: "20.0.0", type: _MatDrawerContainer, isStandalone: true, selector: "mat-drawer-container", inputs: { autosize: "autosize", hasBackdrop: "hasBackdrop" }, outputs: { backdropClick: "backdropClick" }, host: { properties: { "class.mat-drawer-container-explicit-backdrop": "_backdropOverride" }, classAttribute: "mat-drawer-container" }, providers: [
        {
          provide: MAT_DRAWER_CONTAINER,
          useExisting: _MatDrawerContainer
        }
      ], queries: [{ propertyName: "_content", first: true, predicate: MatDrawerContent, descendants: true }, { propertyName: "_allDrawers", predicate: MatDrawer, descendants: true }], viewQueries: [{ propertyName: "_userContent", first: true, predicate: MatDrawerContent, descendants: true }], exportAs: ["matDrawerContainer"], ngImport: core_exports, template: '@if (hasBackdrop) {\n  <div class="mat-drawer-backdrop" (click)="_onBackdropClicked()"\n       [class.mat-drawer-shown]="_isShowingBackdrop()"></div>\n}\n\n<ng-content select="mat-drawer"></ng-content>\n\n<ng-content select="mat-drawer-content">\n</ng-content>\n\n@if (!_content) {\n  <mat-drawer-content>\n    <ng-content></ng-content>\n  </mat-drawer-content>\n}\n', styles: [".mat-drawer-container{position:relative;z-index:1;color:var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));background-color:var(--mat-sidenav-content-background-color, var(--mat-sys-background));box-sizing:border-box;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible;background-color:var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent))}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}@media(forced-colors: active){.mat-drawer-backdrop{opacity:.5}}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-content.mat-drawer-content-hidden{opacity:0}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;color:var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));box-shadow:var(--mat-sidenav-container-elevation-shadow, none);background-color:var(--mat-sidenav-container-background-color, var(--mat-sys-surface));border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));width:var(--mat-sidenav-container-width, 360px);display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}@media(forced-colors: active){.mat-drawer,[dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}}@media(forced-colors: active){[dir=rtl] .mat-drawer,.mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0);border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-right-radius:0;border-bottom-right-radius:0}[dir=rtl] .mat-drawer{border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-right-radius:0;border-bottom-right-radius:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-left-radius:0;border-bottom-left-radius:0;left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer-transition .mat-drawer{transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating){visibility:hidden;box-shadow:none}.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container{display:none}.mat-drawer.mat-drawer-opened.mat-drawer-opened{transform:none}.mat-drawer-side{box-shadow:none;border-right-color:var(--mat-sidenav-container-divider-color, transparent);border-right-width:1px;border-right-style:solid}.mat-drawer-side.mat-drawer-end{border-left-color:var(--mat-sidenav-container-divider-color, transparent);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side{border-left-color:var(--mat-sidenav-container-divider-color, transparent);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side.mat-drawer-end{border-right-color:var(--mat-sidenav-container-divider-color, transparent);border-right-width:1px;border-right-style:solid;border-left:none}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto}.mat-sidenav-fixed{position:fixed}\n"], dependencies: [{ kind: "component", type: MatDrawerContent, selector: "mat-drawer-content" }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatDrawerContainer, decorators: [{
      type: Component,
      args: [{ selector: "mat-drawer-container", exportAs: "matDrawerContainer", host: {
        "class": "mat-drawer-container",
        "[class.mat-drawer-container-explicit-backdrop]": "_backdropOverride"
      }, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, providers: [
        {
          provide: MAT_DRAWER_CONTAINER,
          useExisting: MatDrawerContainer
        }
      ], imports: [MatDrawerContent], template: '@if (hasBackdrop) {\n  <div class="mat-drawer-backdrop" (click)="_onBackdropClicked()"\n       [class.mat-drawer-shown]="_isShowingBackdrop()"></div>\n}\n\n<ng-content select="mat-drawer"></ng-content>\n\n<ng-content select="mat-drawer-content">\n</ng-content>\n\n@if (!_content) {\n  <mat-drawer-content>\n    <ng-content></ng-content>\n  </mat-drawer-content>\n}\n', styles: [".mat-drawer-container{position:relative;z-index:1;color:var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));background-color:var(--mat-sidenav-content-background-color, var(--mat-sys-background));box-sizing:border-box;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible;background-color:var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent))}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}@media(forced-colors: active){.mat-drawer-backdrop{opacity:.5}}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-content.mat-drawer-content-hidden{opacity:0}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;color:var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));box-shadow:var(--mat-sidenav-container-elevation-shadow, none);background-color:var(--mat-sidenav-container-background-color, var(--mat-sys-surface));border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));width:var(--mat-sidenav-container-width, 360px);display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}@media(forced-colors: active){.mat-drawer,[dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}}@media(forced-colors: active){[dir=rtl] .mat-drawer,.mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0);border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-right-radius:0;border-bottom-right-radius:0}[dir=rtl] .mat-drawer{border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-right-radius:0;border-bottom-right-radius:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-left-radius:0;border-bottom-left-radius:0;left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer-transition .mat-drawer{transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating){visibility:hidden;box-shadow:none}.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container{display:none}.mat-drawer.mat-drawer-opened.mat-drawer-opened{transform:none}.mat-drawer-side{box-shadow:none;border-right-color:var(--mat-sidenav-container-divider-color, transparent);border-right-width:1px;border-right-style:solid}.mat-drawer-side.mat-drawer-end{border-left-color:var(--mat-sidenav-container-divider-color, transparent);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side{border-left-color:var(--mat-sidenav-container-divider-color, transparent);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side.mat-drawer-end{border-right-color:var(--mat-sidenav-container-divider-color, transparent);border-right-width:1px;border-right-style:solid;border-left:none}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto}.mat-sidenav-fixed{position:fixed}\n"] }]
    }], ctorParameters: () => [], propDecorators: { _allDrawers: [{
      type: ContentChildren,
      args: [MatDrawer, {
        // We need to use `descendants: true`, because Ivy will no longer match
        // indirect descendants if it's left as false.
        descendants: true
      }]
    }], _content: [{
      type: ContentChild,
      args: [MatDrawerContent]
    }], _userContent: [{
      type: ViewChild,
      args: [MatDrawerContent]
    }], autosize: [{
      type: Input
    }], hasBackdrop: [{
      type: Input
    }], backdropClick: [{
      type: Output
    }] } });
    MatSidenavContent = class _MatSidenavContent extends MatDrawerContent {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatSidenavContent, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0", type: _MatSidenavContent, isStandalone: true, selector: "mat-sidenav-content", host: { classAttribute: "mat-drawer-content mat-sidenav-content" }, providers: [
        {
          provide: CdkScrollable,
          useExisting: _MatSidenavContent
        }
      ], usesInheritance: true, ngImport: core_exports, template: "<ng-content></ng-content>", isInline: true, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatSidenavContent, decorators: [{
      type: Component,
      args: [{
        selector: "mat-sidenav-content",
        template: "<ng-content></ng-content>",
        host: {
          "class": "mat-drawer-content mat-sidenav-content"
        },
        changeDetection: ChangeDetectionStrategy.OnPush,
        encapsulation: ViewEncapsulation.None,
        providers: [
          {
            provide: CdkScrollable,
            useExisting: MatSidenavContent
          }
        ]
      }]
    }] });
    MatSidenav = class _MatSidenav extends MatDrawer {
      /** Whether the sidenav is fixed in the viewport. */
      get fixedInViewport() {
        return this._fixedInViewport;
      }
      set fixedInViewport(value) {
        this._fixedInViewport = coerceBooleanProperty(value);
      }
      _fixedInViewport = false;
      /**
       * The gap between the top of the sidenav and the top of the viewport when the sidenav is in fixed
       * mode.
       */
      get fixedTopGap() {
        return this._fixedTopGap;
      }
      set fixedTopGap(value) {
        this._fixedTopGap = coerceNumberProperty(value);
      }
      _fixedTopGap = 0;
      /**
       * The gap between the bottom of the sidenav and the bottom of the viewport when the sidenav is in
       * fixed mode.
       */
      get fixedBottomGap() {
        return this._fixedBottomGap;
      }
      set fixedBottomGap(value) {
        this._fixedBottomGap = coerceNumberProperty(value);
      }
      _fixedBottomGap = 0;
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatSidenav, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0", type: _MatSidenav, isStandalone: true, selector: "mat-sidenav", inputs: { fixedInViewport: "fixedInViewport", fixedTopGap: "fixedTopGap", fixedBottomGap: "fixedBottomGap" }, host: { properties: { "attr.tabIndex": '(mode !== "side") ? "-1" : null', "attr.align": "null", "class.mat-drawer-end": 'position === "end"', "class.mat-drawer-over": 'mode === "over"', "class.mat-drawer-push": 'mode === "push"', "class.mat-drawer-side": 'mode === "side"', "class.mat-sidenav-fixed": "fixedInViewport", "style.top.px": "fixedInViewport ? fixedTopGap : null", "style.bottom.px": "fixedInViewport ? fixedBottomGap : null" }, classAttribute: "mat-drawer mat-sidenav" }, providers: [{ provide: MatDrawer, useExisting: _MatSidenav }], exportAs: ["matSidenav"], usesInheritance: true, ngImport: core_exports, template: '<div class="mat-drawer-inner-container" cdkScrollable #content>\r\n  <ng-content></ng-content>\r\n</div>\r\n', dependencies: [{ kind: "directive", type: CdkScrollable, selector: "[cdk-scrollable], [cdkScrollable]" }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatSidenav, decorators: [{
      type: Component,
      args: [{ selector: "mat-sidenav", exportAs: "matSidenav", host: {
        "class": "mat-drawer mat-sidenav",
        // The sidenav container should not be focused on when used in side mode. See b/286459024 for
        // reference. Updates tabIndex of drawer/container to default to null if in side mode.
        "[attr.tabIndex]": '(mode !== "side") ? "-1" : null',
        // must prevent the browser from aligning text based on value
        "[attr.align]": "null",
        "[class.mat-drawer-end]": 'position === "end"',
        "[class.mat-drawer-over]": 'mode === "over"',
        "[class.mat-drawer-push]": 'mode === "push"',
        "[class.mat-drawer-side]": 'mode === "side"',
        "[class.mat-sidenav-fixed]": "fixedInViewport",
        "[style.top.px]": "fixedInViewport ? fixedTopGap : null",
        "[style.bottom.px]": "fixedInViewport ? fixedBottomGap : null"
      }, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, imports: [CdkScrollable], providers: [{ provide: MatDrawer, useExisting: MatSidenav }], template: '<div class="mat-drawer-inner-container" cdkScrollable #content>\r\n  <ng-content></ng-content>\r\n</div>\r\n' }]
    }], propDecorators: { fixedInViewport: [{
      type: Input
    }], fixedTopGap: [{
      type: Input
    }], fixedBottomGap: [{
      type: Input
    }] } });
    MatSidenavContainer = class _MatSidenavContainer extends MatDrawerContainer {
      _allDrawers = void 0;
      // We need an initializer here to avoid a TS error.
      _content = void 0;
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatSidenavContainer, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "17.0.0", version: "20.0.0", type: _MatSidenavContainer, isStandalone: true, selector: "mat-sidenav-container", host: { properties: { "class.mat-drawer-container-explicit-backdrop": "_backdropOverride" }, classAttribute: "mat-drawer-container mat-sidenav-container" }, providers: [
        {
          provide: MAT_DRAWER_CONTAINER,
          useExisting: _MatSidenavContainer
        },
        {
          provide: MatDrawerContainer,
          useExisting: _MatSidenavContainer
        }
      ], queries: [{ propertyName: "_content", first: true, predicate: MatSidenavContent, descendants: true }, { propertyName: "_allDrawers", predicate: MatSidenav, descendants: true }], exportAs: ["matSidenavContainer"], usesInheritance: true, ngImport: core_exports, template: '@if (hasBackdrop) {\n  <div class="mat-drawer-backdrop" (click)="_onBackdropClicked()"\n       [class.mat-drawer-shown]="_isShowingBackdrop()"></div>\n}\n\n<ng-content select="mat-sidenav"></ng-content>\n\n<ng-content select="mat-sidenav-content">\n</ng-content>\n\n@if (!_content) {\n  <mat-sidenav-content>\n    <ng-content></ng-content>\n  </mat-sidenav-content>\n}\n', styles: [".mat-drawer-container{position:relative;z-index:1;color:var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));background-color:var(--mat-sidenav-content-background-color, var(--mat-sys-background));box-sizing:border-box;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible;background-color:var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent))}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}@media(forced-colors: active){.mat-drawer-backdrop{opacity:.5}}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-content.mat-drawer-content-hidden{opacity:0}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;color:var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));box-shadow:var(--mat-sidenav-container-elevation-shadow, none);background-color:var(--mat-sidenav-container-background-color, var(--mat-sys-surface));border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));width:var(--mat-sidenav-container-width, 360px);display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}@media(forced-colors: active){.mat-drawer,[dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}}@media(forced-colors: active){[dir=rtl] .mat-drawer,.mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0);border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-right-radius:0;border-bottom-right-radius:0}[dir=rtl] .mat-drawer{border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-right-radius:0;border-bottom-right-radius:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-left-radius:0;border-bottom-left-radius:0;left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer-transition .mat-drawer{transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating){visibility:hidden;box-shadow:none}.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container{display:none}.mat-drawer.mat-drawer-opened.mat-drawer-opened{transform:none}.mat-drawer-side{box-shadow:none;border-right-color:var(--mat-sidenav-container-divider-color, transparent);border-right-width:1px;border-right-style:solid}.mat-drawer-side.mat-drawer-end{border-left-color:var(--mat-sidenav-container-divider-color, transparent);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side{border-left-color:var(--mat-sidenav-container-divider-color, transparent);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side.mat-drawer-end{border-right-color:var(--mat-sidenav-container-divider-color, transparent);border-right-width:1px;border-right-style:solid;border-left:none}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto}.mat-sidenav-fixed{position:fixed}\n"], dependencies: [{ kind: "component", type: MatSidenavContent, selector: "mat-sidenav-content" }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatSidenavContainer, decorators: [{
      type: Component,
      args: [{ selector: "mat-sidenav-container", exportAs: "matSidenavContainer", host: {
        "class": "mat-drawer-container mat-sidenav-container",
        "[class.mat-drawer-container-explicit-backdrop]": "_backdropOverride"
      }, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, providers: [
        {
          provide: MAT_DRAWER_CONTAINER,
          useExisting: MatSidenavContainer
        },
        {
          provide: MatDrawerContainer,
          useExisting: MatSidenavContainer
        }
      ], imports: [MatSidenavContent], template: '@if (hasBackdrop) {\n  <div class="mat-drawer-backdrop" (click)="_onBackdropClicked()"\n       [class.mat-drawer-shown]="_isShowingBackdrop()"></div>\n}\n\n<ng-content select="mat-sidenav"></ng-content>\n\n<ng-content select="mat-sidenav-content">\n</ng-content>\n\n@if (!_content) {\n  <mat-sidenav-content>\n    <ng-content></ng-content>\n  </mat-sidenav-content>\n}\n', styles: [".mat-drawer-container{position:relative;z-index:1;color:var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));background-color:var(--mat-sidenav-content-background-color, var(--mat-sys-background));box-sizing:border-box;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible;background-color:var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent))}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}@media(forced-colors: active){.mat-drawer-backdrop{opacity:.5}}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-content.mat-drawer-content-hidden{opacity:0}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;color:var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));box-shadow:var(--mat-sidenav-container-elevation-shadow, none);background-color:var(--mat-sidenav-container-background-color, var(--mat-sys-surface));border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));width:var(--mat-sidenav-container-width, 360px);display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}@media(forced-colors: active){.mat-drawer,[dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}}@media(forced-colors: active){[dir=rtl] .mat-drawer,.mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0);border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-right-radius:0;border-bottom-right-radius:0}[dir=rtl] .mat-drawer{border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-right-radius:0;border-bottom-right-radius:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));border-top-left-radius:0;border-bottom-left-radius:0;left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer-transition .mat-drawer{transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating){visibility:hidden;box-shadow:none}.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container{display:none}.mat-drawer.mat-drawer-opened.mat-drawer-opened{transform:none}.mat-drawer-side{box-shadow:none;border-right-color:var(--mat-sidenav-container-divider-color, transparent);border-right-width:1px;border-right-style:solid}.mat-drawer-side.mat-drawer-end{border-left-color:var(--mat-sidenav-container-divider-color, transparent);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side{border-left-color:var(--mat-sidenav-container-divider-color, transparent);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side.mat-drawer-end{border-right-color:var(--mat-sidenav-container-divider-color, transparent);border-right-width:1px;border-right-style:solid;border-left:none}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto}.mat-sidenav-fixed{position:fixed}\n"] }]
    }], propDecorators: { _allDrawers: [{
      type: ContentChildren,
      args: [MatSidenav, {
        // We need to use `descendants: true`, because Ivy will no longer match
        // indirect descendants if it's left as false.
        descendants: true
      }]
    }], _content: [{
      type: ContentChild,
      args: [MatSidenavContent]
    }] } });
    MatSidenavModule = class _MatSidenavModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatSidenavModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.0", ngImport: core_exports, type: _MatSidenavModule, imports: [
        MatCommonModule,
        CdkScrollableModule,
        MatDrawer,
        MatDrawerContainer,
        MatDrawerContent,
        MatSidenav,
        MatSidenavContainer,
        MatSidenavContent
      ], exports: [
        CdkScrollableModule,
        MatCommonModule,
        MatDrawer,
        MatDrawerContainer,
        MatDrawerContent,
        MatSidenav,
        MatSidenavContainer,
        MatSidenavContent
      ] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatSidenavModule, imports: [
        MatCommonModule,
        CdkScrollableModule,
        CdkScrollableModule,
        MatCommonModule
      ] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatSidenavModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [
          MatCommonModule,
          CdkScrollableModule,
          MatDrawer,
          MatDrawerContainer,
          MatDrawerContent,
          MatSidenav,
          MatSidenavContainer,
          MatSidenavContent
        ],
        exports: [
          CdkScrollableModule,
          MatCommonModule,
          MatDrawer,
          MatDrawerContainer,
          MatDrawerContent,
          MatSidenav,
          MatSidenavContainer,
          MatSidenavContent
        ]
      }]
    }] });
  }
});

// node_modules/@angular/material/fesm2022/toolbar.mjs
function throwToolbarMixedModesError() {
  throw Error("MatToolbar: Attempting to combine different toolbar modes. Either specify multiple `<mat-toolbar-row>` elements explicitly or just place content inside of a `<mat-toolbar>` for a single row.");
}
var MatToolbarRow, MatToolbar, MatToolbarModule;
var init_toolbar = __esm({
  "node_modules/@angular/material/fesm2022/toolbar.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_platform();
    init_common_module_cKSwHniA();
    MatToolbarRow = class _MatToolbarRow {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatToolbarRow, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatToolbarRow, isStandalone: true, selector: "mat-toolbar-row", host: { classAttribute: "mat-toolbar-row" }, exportAs: ["matToolbarRow"], ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatToolbarRow, decorators: [{
      type: Directive,
      args: [{
        selector: "mat-toolbar-row",
        exportAs: "matToolbarRow",
        host: { "class": "mat-toolbar-row" }
      }]
    }] });
    MatToolbar = class _MatToolbar {
      _elementRef = inject(ElementRef);
      _platform = inject(Platform);
      _document = inject(DOCUMENT);
      // TODO: should be typed as `ThemePalette` but internal apps pass in arbitrary strings.
      /**
       * Theme color of the toolbar. This API is supported in M2 themes only, it has
       * no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/toolbar/styling.
       *
       * For information on applying color variants in M3, see
       * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
       */
      color;
      /** Reference to all toolbar row elements that have been projected. */
      _toolbarRows;
      constructor() {
      }
      ngAfterViewInit() {
        if (this._platform.isBrowser) {
          this._checkToolbarMixedModes();
          this._toolbarRows.changes.subscribe(() => this._checkToolbarMixedModes());
        }
      }
      /**
       * Throws an exception when developers are attempting to combine the different toolbar row modes.
       */
      _checkToolbarMixedModes() {
        if (this._toolbarRows.length && (typeof ngDevMode === "undefined" || ngDevMode)) {
          const isCombinedUsage = Array.from(this._elementRef.nativeElement.childNodes).filter((node) => !(node.classList && node.classList.contains("mat-toolbar-row"))).filter((node) => node.nodeType !== (this._document ? this._document.COMMENT_NODE : 8)).some((node) => !!(node.textContent && node.textContent.trim()));
          if (isCombinedUsage) {
            throwToolbarMixedModesError();
          }
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatToolbar, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0", type: _MatToolbar, isStandalone: true, selector: "mat-toolbar", inputs: { color: "color" }, host: { properties: { "class": 'color ? "mat-" + color : ""', "class.mat-toolbar-multiple-rows": "_toolbarRows.length > 0", "class.mat-toolbar-single-row": "_toolbarRows.length === 0" }, classAttribute: "mat-toolbar" }, queries: [{ propertyName: "_toolbarRows", predicate: MatToolbarRow, descendants: true }], exportAs: ["matToolbar"], ngImport: core_exports, template: '<ng-content></ng-content>\n<ng-content select="mat-toolbar-row"></ng-content>\n', styles: [".mat-toolbar{background:var(--mat-toolbar-container-background-color, var(--mat-sys-surface));color:var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface))}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font-family:var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));font-size:var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));line-height:var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));font-weight:var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));letter-spacing:var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));margin:0}@media(forced-colors: active){.mat-toolbar{outline:solid 1px}}.mat-toolbar .mat-form-field-underline,.mat-toolbar .mat-form-field-ripple,.mat-toolbar .mat-focused .mat-form-field-ripple{background-color:currentColor}.mat-toolbar .mat-form-field-label,.mat-toolbar .mat-focused .mat-form-field-label,.mat-toolbar .mat-select-value,.mat-toolbar .mat-select-arrow,.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow{color:inherit}.mat-toolbar .mat-input-element{caret-color:currentColor}.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed{--mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));--mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface))}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap;height:var(--mat-toolbar-standard-height, 64px)}@media(max-width: 599px){.mat-toolbar-row,.mat-toolbar-single-row{height:var(--mat-toolbar-mobile-height, 56px)}}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%;min-height:var(--mat-toolbar-standard-height, 64px)}@media(max-width: 599px){.mat-toolbar-multiple-rows{min-height:var(--mat-toolbar-mobile-height, 56px)}}\n"], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatToolbar, decorators: [{
      type: Component,
      args: [{ selector: "mat-toolbar", exportAs: "matToolbar", host: {
        "class": "mat-toolbar",
        "[class]": 'color ? "mat-" + color : ""',
        "[class.mat-toolbar-multiple-rows]": "_toolbarRows.length > 0",
        "[class.mat-toolbar-single-row]": "_toolbarRows.length === 0"
      }, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: '<ng-content></ng-content>\n<ng-content select="mat-toolbar-row"></ng-content>\n', styles: [".mat-toolbar{background:var(--mat-toolbar-container-background-color, var(--mat-sys-surface));color:var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface))}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font-family:var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));font-size:var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));line-height:var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));font-weight:var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));letter-spacing:var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));margin:0}@media(forced-colors: active){.mat-toolbar{outline:solid 1px}}.mat-toolbar .mat-form-field-underline,.mat-toolbar .mat-form-field-ripple,.mat-toolbar .mat-focused .mat-form-field-ripple{background-color:currentColor}.mat-toolbar .mat-form-field-label,.mat-toolbar .mat-focused .mat-form-field-label,.mat-toolbar .mat-select-value,.mat-toolbar .mat-select-arrow,.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow{color:inherit}.mat-toolbar .mat-input-element{caret-color:currentColor}.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed{--mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));--mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface))}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap;height:var(--mat-toolbar-standard-height, 64px)}@media(max-width: 599px){.mat-toolbar-row,.mat-toolbar-single-row{height:var(--mat-toolbar-mobile-height, 56px)}}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%;min-height:var(--mat-toolbar-standard-height, 64px)}@media(max-width: 599px){.mat-toolbar-multiple-rows{min-height:var(--mat-toolbar-mobile-height, 56px)}}\n"] }]
    }], ctorParameters: () => [], propDecorators: { color: [{
      type: Input
    }], _toolbarRows: [{
      type: ContentChildren,
      args: [MatToolbarRow, { descendants: true }]
    }] } });
    MatToolbarModule = class _MatToolbarModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatToolbarModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.0", ngImport: core_exports, type: _MatToolbarModule, imports: [MatCommonModule, MatToolbar, MatToolbarRow], exports: [MatToolbar, MatToolbarRow, MatCommonModule] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatToolbarModule, imports: [MatCommonModule, MatCommonModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatToolbarModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [MatCommonModule, MatToolbar, MatToolbarRow],
        exports: [MatToolbar, MatToolbarRow, MatCommonModule]
      }]
    }] });
  }
});

// node_modules/@angular/material/fesm2022/icon-registry-CwOTJ7YM.mjs
function getPolicy() {
  if (policy === void 0) {
    policy = null;
    if (typeof window !== "undefined") {
      const ttWindow = window;
      if (ttWindow.trustedTypes !== void 0) {
        policy = ttWindow.trustedTypes.createPolicy("angular#components", {
          createHTML: (s) => s
        });
      }
    }
  }
  return policy;
}
function trustedHTMLFromString(html) {
  return getPolicy()?.createHTML(html) || html;
}
function getMatIconNameNotFoundError(iconName) {
  return Error(`Unable to find icon with the name "${iconName}"`);
}
function getMatIconNoHttpProviderError() {
  return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.");
}
function getMatIconFailedToSanitizeUrlError(url) {
  return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${url}".`);
}
function getMatIconFailedToSanitizeLiteralError(literal) {
  return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${literal}".`);
}
function ICON_REGISTRY_PROVIDER_FACTORY(parentRegistry, httpClient, sanitizer, errorHandler, document2) {
  return parentRegistry || new MatIconRegistry(httpClient, sanitizer, document2, errorHandler);
}
function cloneSvg(svg) {
  return svg.cloneNode(true);
}
function iconKey(namespace, name) {
  return namespace + ":" + name;
}
function isSafeUrlWithOptions(value) {
  return !!(value.url && value.options);
}
var policy, SvgIconConfig, MatIconRegistry, ICON_REGISTRY_PROVIDER;
var init_icon_registry_CwOTJ7YM = __esm({
  "node_modules/@angular/material/fesm2022/icon-registry-CwOTJ7YM.mjs"() {
    "use strict";
    init_http();
    init_http();
    init_core();
    init_core();
    init_platform_browser();
    init_platform_browser();
    init_esm();
    init_operators();
    SvgIconConfig = class {
      url;
      svgText;
      options;
      svgElement;
      constructor(url, svgText, options) {
        this.url = url;
        this.svgText = svgText;
        this.options = options;
      }
    };
    MatIconRegistry = class _MatIconRegistry {
      _httpClient;
      _sanitizer;
      _errorHandler;
      _document;
      /**
       * URLs and cached SVG elements for individual icons. Keys are of the format "[namespace]:[icon]".
       */
      _svgIconConfigs = /* @__PURE__ */ new Map();
      /**
       * SvgIconConfig objects and cached SVG elements for icon sets, keyed by namespace.
       * Multiple icon sets can be registered under the same namespace.
       */
      _iconSetConfigs = /* @__PURE__ */ new Map();
      /** Cache for icons loaded by direct URLs. */
      _cachedIconsByUrl = /* @__PURE__ */ new Map();
      /** In-progress icon fetches. Used to coalesce multiple requests to the same URL. */
      _inProgressUrlFetches = /* @__PURE__ */ new Map();
      /** Map from font identifiers to their CSS class names. Used for icon fonts. */
      _fontCssClassesByAlias = /* @__PURE__ */ new Map();
      /** Registered icon resolver functions. */
      _resolvers = [];
      /**
       * The CSS classes to apply when an `<mat-icon>` component has no icon name, url, or font
       * specified. The default 'material-icons' value assumes that the material icon font has been
       * loaded as described at https://google.github.io/material-design-icons/#icon-font-for-the-web
       */
      _defaultFontSetClass = ["material-icons", "mat-ligature-font"];
      constructor(_httpClient, _sanitizer, document2, _errorHandler) {
        this._httpClient = _httpClient;
        this._sanitizer = _sanitizer;
        this._errorHandler = _errorHandler;
        this._document = document2;
      }
      /**
       * Registers an icon by URL in the default namespace.
       * @param iconName Name under which the icon should be registered.
       * @param url
       */
      addSvgIcon(iconName, url, options) {
        return this.addSvgIconInNamespace("", iconName, url, options);
      }
      /**
       * Registers an icon using an HTML string in the default namespace.
       * @param iconName Name under which the icon should be registered.
       * @param literal SVG source of the icon.
       */
      addSvgIconLiteral(iconName, literal, options) {
        return this.addSvgIconLiteralInNamespace("", iconName, literal, options);
      }
      /**
       * Registers an icon by URL in the specified namespace.
       * @param namespace Namespace in which the icon should be registered.
       * @param iconName Name under which the icon should be registered.
       * @param url
       */
      addSvgIconInNamespace(namespace, iconName, url, options) {
        return this._addSvgIconConfig(namespace, iconName, new SvgIconConfig(url, null, options));
      }
      /**
       * Registers an icon resolver function with the registry. The function will be invoked with the
       * name and namespace of an icon when the registry tries to resolve the URL from which to fetch
       * the icon. The resolver is expected to return a `SafeResourceUrl` that points to the icon,
       * an object with the icon URL and icon options, or `null` if the icon is not supported. Resolvers
       * will be invoked in the order in which they have been registered.
       * @param resolver Resolver function to be registered.
       */
      addSvgIconResolver(resolver) {
        this._resolvers.push(resolver);
        return this;
      }
      /**
       * Registers an icon using an HTML string in the specified namespace.
       * @param namespace Namespace in which the icon should be registered.
       * @param iconName Name under which the icon should be registered.
       * @param literal SVG source of the icon.
       */
      addSvgIconLiteralInNamespace(namespace, iconName, literal, options) {
        const cleanLiteral = this._sanitizer.sanitize(SecurityContext.HTML, literal);
        if (!cleanLiteral) {
          throw getMatIconFailedToSanitizeLiteralError(literal);
        }
        const trustedLiteral = trustedHTMLFromString(cleanLiteral);
        return this._addSvgIconConfig(namespace, iconName, new SvgIconConfig("", trustedLiteral, options));
      }
      /**
       * Registers an icon set by URL in the default namespace.
       * @param url
       */
      addSvgIconSet(url, options) {
        return this.addSvgIconSetInNamespace("", url, options);
      }
      /**
       * Registers an icon set using an HTML string in the default namespace.
       * @param literal SVG source of the icon set.
       */
      addSvgIconSetLiteral(literal, options) {
        return this.addSvgIconSetLiteralInNamespace("", literal, options);
      }
      /**
       * Registers an icon set by URL in the specified namespace.
       * @param namespace Namespace in which to register the icon set.
       * @param url
       */
      addSvgIconSetInNamespace(namespace, url, options) {
        return this._addSvgIconSetConfig(namespace, new SvgIconConfig(url, null, options));
      }
      /**
       * Registers an icon set using an HTML string in the specified namespace.
       * @param namespace Namespace in which to register the icon set.
       * @param literal SVG source of the icon set.
       */
      addSvgIconSetLiteralInNamespace(namespace, literal, options) {
        const cleanLiteral = this._sanitizer.sanitize(SecurityContext.HTML, literal);
        if (!cleanLiteral) {
          throw getMatIconFailedToSanitizeLiteralError(literal);
        }
        const trustedLiteral = trustedHTMLFromString(cleanLiteral);
        return this._addSvgIconSetConfig(namespace, new SvgIconConfig("", trustedLiteral, options));
      }
      /**
       * Defines an alias for CSS class names to be used for icon fonts. Creating an matIcon
       * component with the alias as the fontSet input will cause the class name to be applied
       * to the `<mat-icon>` element.
       *
       * If the registered font is a ligature font, then don't forget to also include the special
       * class `mat-ligature-font` to allow the usage via attribute. So register like this:
       *
       * ```ts
       * iconRegistry.registerFontClassAlias('f1', 'font1 mat-ligature-font');
       * ```
       *
       * And use like this:
       *
       * ```html
       * <mat-icon fontSet="f1" fontIcon="home"></mat-icon>
       * ```
       *
       * @param alias Alias for the font.
       * @param classNames Class names override to be used instead of the alias.
       */
      registerFontClassAlias(alias, classNames = alias) {
        this._fontCssClassesByAlias.set(alias, classNames);
        return this;
      }
      /**
       * Returns the CSS class name associated with the alias by a previous call to
       * registerFontClassAlias. If no CSS class has been associated, returns the alias unmodified.
       */
      classNameForFontAlias(alias) {
        return this._fontCssClassesByAlias.get(alias) || alias;
      }
      /**
       * Sets the CSS classes to be used for icon fonts when an `<mat-icon>` component does not
       * have a fontSet input value, and is not loading an icon by name or URL.
       */
      setDefaultFontSetClass(...classNames) {
        this._defaultFontSetClass = classNames;
        return this;
      }
      /**
       * Returns the CSS classes to be used for icon fonts when an `<mat-icon>` component does not
       * have a fontSet input value, and is not loading an icon by name or URL.
       */
      getDefaultFontSetClass() {
        return this._defaultFontSetClass;
      }
      /**
       * Returns an Observable that produces the icon (as an `<svg>` DOM element) from the given URL.
       * The response from the URL may be cached so this will not always cause an HTTP request, but
       * the produced element will always be a new copy of the originally fetched icon. (That is,
       * it will not contain any modifications made to elements previously returned).
       *
       * @param safeUrl URL from which to fetch the SVG icon.
       */
      getSvgIconFromUrl(safeUrl) {
        const url = this._sanitizer.sanitize(SecurityContext.RESOURCE_URL, safeUrl);
        if (!url) {
          throw getMatIconFailedToSanitizeUrlError(safeUrl);
        }
        const cachedIcon = this._cachedIconsByUrl.get(url);
        if (cachedIcon) {
          return of(cloneSvg(cachedIcon));
        }
        return this._loadSvgIconFromConfig(new SvgIconConfig(safeUrl, null)).pipe(tap((svg) => this._cachedIconsByUrl.set(url, svg)), map((svg) => cloneSvg(svg)));
      }
      /**
       * Returns an Observable that produces the icon (as an `<svg>` DOM element) with the given name
       * and namespace. The icon must have been previously registered with addIcon or addIconSet;
       * if not, the Observable will throw an error.
       *
       * @param name Name of the icon to be retrieved.
       * @param namespace Namespace in which to look for the icon.
       */
      getNamedSvgIcon(name, namespace = "") {
        const key = iconKey(namespace, name);
        let config = this._svgIconConfigs.get(key);
        if (config) {
          return this._getSvgFromConfig(config);
        }
        config = this._getIconConfigFromResolvers(namespace, name);
        if (config) {
          this._svgIconConfigs.set(key, config);
          return this._getSvgFromConfig(config);
        }
        const iconSetConfigs = this._iconSetConfigs.get(namespace);
        if (iconSetConfigs) {
          return this._getSvgFromIconSetConfigs(name, iconSetConfigs);
        }
        return throwError(getMatIconNameNotFoundError(key));
      }
      ngOnDestroy() {
        this._resolvers = [];
        this._svgIconConfigs.clear();
        this._iconSetConfigs.clear();
        this._cachedIconsByUrl.clear();
      }
      /**
       * Returns the cached icon for a SvgIconConfig if available, or fetches it from its URL if not.
       */
      _getSvgFromConfig(config) {
        if (config.svgText) {
          return of(cloneSvg(this._svgElementFromConfig(config)));
        } else {
          return this._loadSvgIconFromConfig(config).pipe(map((svg) => cloneSvg(svg)));
        }
      }
      /**
       * Attempts to find an icon with the specified name in any of the SVG icon sets.
       * First searches the available cached icons for a nested element with a matching name, and
       * if found copies the element to a new `<svg>` element. If not found, fetches all icon sets
       * that have not been cached, and searches again after all fetches are completed.
       * The returned Observable produces the SVG element if possible, and throws
       * an error if no icon with the specified name can be found.
       */
      _getSvgFromIconSetConfigs(name, iconSetConfigs) {
        const namedIcon = this._extractIconWithNameFromAnySet(name, iconSetConfigs);
        if (namedIcon) {
          return of(namedIcon);
        }
        const iconSetFetchRequests = iconSetConfigs.filter((iconSetConfig) => !iconSetConfig.svgText).map((iconSetConfig) => {
          return this._loadSvgIconSetFromConfig(iconSetConfig).pipe(catchError((err) => {
            const url = this._sanitizer.sanitize(SecurityContext.RESOURCE_URL, iconSetConfig.url);
            const errorMessage = `Loading icon set URL: ${url} failed: ${err.message}`;
            this._errorHandler.handleError(new Error(errorMessage));
            return of(null);
          }));
        });
        return forkJoin(iconSetFetchRequests).pipe(map(() => {
          const foundIcon = this._extractIconWithNameFromAnySet(name, iconSetConfigs);
          if (!foundIcon) {
            throw getMatIconNameNotFoundError(name);
          }
          return foundIcon;
        }));
      }
      /**
       * Searches the cached SVG elements for the given icon sets for a nested icon element whose "id"
       * tag matches the specified name. If found, copies the nested element to a new SVG element and
       * returns it. Returns null if no matching element is found.
       */
      _extractIconWithNameFromAnySet(iconName, iconSetConfigs) {
        for (let i = iconSetConfigs.length - 1; i >= 0; i--) {
          const config = iconSetConfigs[i];
          if (config.svgText && config.svgText.toString().indexOf(iconName) > -1) {
            const svg = this._svgElementFromConfig(config);
            const foundIcon = this._extractSvgIconFromSet(svg, iconName, config.options);
            if (foundIcon) {
              return foundIcon;
            }
          }
        }
        return null;
      }
      /**
       * Loads the content of the icon URL specified in the SvgIconConfig and creates an SVG element
       * from it.
       */
      _loadSvgIconFromConfig(config) {
        return this._fetchIcon(config).pipe(tap((svgText) => config.svgText = svgText), map(() => this._svgElementFromConfig(config)));
      }
      /**
       * Loads the content of the icon set URL specified in the
       * SvgIconConfig and attaches it to the config.
       */
      _loadSvgIconSetFromConfig(config) {
        if (config.svgText) {
          return of(null);
        }
        return this._fetchIcon(config).pipe(tap((svgText) => config.svgText = svgText));
      }
      /**
       * Searches the cached element of the given SvgIconConfig for a nested icon element whose "id"
       * tag matches the specified name. If found, copies the nested element to a new SVG element and
       * returns it. Returns null if no matching element is found.
       */
      _extractSvgIconFromSet(iconSet, iconName, options) {
        const iconSource = iconSet.querySelector(`[id="${iconName}"]`);
        if (!iconSource) {
          return null;
        }
        const iconElement = iconSource.cloneNode(true);
        iconElement.removeAttribute("id");
        if (iconElement.nodeName.toLowerCase() === "svg") {
          return this._setSvgAttributes(iconElement, options);
        }
        if (iconElement.nodeName.toLowerCase() === "symbol") {
          return this._setSvgAttributes(this._toSvgElement(iconElement), options);
        }
        const svg = this._svgElementFromString(trustedHTMLFromString("<svg></svg>"));
        svg.appendChild(iconElement);
        return this._setSvgAttributes(svg, options);
      }
      /**
       * Creates a DOM element from the given SVG string.
       */
      _svgElementFromString(str) {
        const div = this._document.createElement("DIV");
        div.innerHTML = str;
        const svg = div.querySelector("svg");
        if (!svg) {
          throw Error("<svg> tag not found");
        }
        return svg;
      }
      /**
       * Converts an element into an SVG node by cloning all of its children.
       */
      _toSvgElement(element) {
        const svg = this._svgElementFromString(trustedHTMLFromString("<svg></svg>"));
        const attributes = element.attributes;
        for (let i = 0; i < attributes.length; i++) {
          const { name, value } = attributes[i];
          if (name !== "id") {
            svg.setAttribute(name, value);
          }
        }
        for (let i = 0; i < element.childNodes.length; i++) {
          if (element.childNodes[i].nodeType === this._document.ELEMENT_NODE) {
            svg.appendChild(element.childNodes[i].cloneNode(true));
          }
        }
        return svg;
      }
      /**
       * Sets the default attributes for an SVG element to be used as an icon.
       */
      _setSvgAttributes(svg, options) {
        svg.setAttribute("fit", "");
        svg.setAttribute("height", "100%");
        svg.setAttribute("width", "100%");
        svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
        svg.setAttribute("focusable", "false");
        if (options && options.viewBox) {
          svg.setAttribute("viewBox", options.viewBox);
        }
        return svg;
      }
      /**
       * Returns an Observable which produces the string contents of the given icon. Results may be
       * cached, so future calls with the same URL may not cause another HTTP request.
       */
      _fetchIcon(iconConfig) {
        const { url: safeUrl, options } = iconConfig;
        const withCredentials = options?.withCredentials ?? false;
        if (!this._httpClient) {
          throw getMatIconNoHttpProviderError();
        }
        if (safeUrl == null) {
          throw Error(`Cannot fetch icon from URL "${safeUrl}".`);
        }
        const url = this._sanitizer.sanitize(SecurityContext.RESOURCE_URL, safeUrl);
        if (!url) {
          throw getMatIconFailedToSanitizeUrlError(safeUrl);
        }
        const inProgressFetch = this._inProgressUrlFetches.get(url);
        if (inProgressFetch) {
          return inProgressFetch;
        }
        const req = this._httpClient.get(url, { responseType: "text", withCredentials }).pipe(map((svg) => {
          return trustedHTMLFromString(svg);
        }), finalize(() => this._inProgressUrlFetches.delete(url)), share());
        this._inProgressUrlFetches.set(url, req);
        return req;
      }
      /**
       * Registers an icon config by name in the specified namespace.
       * @param namespace Namespace in which to register the icon config.
       * @param iconName Name under which to register the config.
       * @param config Config to be registered.
       */
      _addSvgIconConfig(namespace, iconName, config) {
        this._svgIconConfigs.set(iconKey(namespace, iconName), config);
        return this;
      }
      /**
       * Registers an icon set config in the specified namespace.
       * @param namespace Namespace in which to register the icon config.
       * @param config Config to be registered.
       */
      _addSvgIconSetConfig(namespace, config) {
        const configNamespace = this._iconSetConfigs.get(namespace);
        if (configNamespace) {
          configNamespace.push(config);
        } else {
          this._iconSetConfigs.set(namespace, [config]);
        }
        return this;
      }
      /** Parses a config's text into an SVG element. */
      _svgElementFromConfig(config) {
        if (!config.svgElement) {
          const svg = this._svgElementFromString(config.svgText);
          this._setSvgAttributes(svg, config.options);
          config.svgElement = svg;
        }
        return config.svgElement;
      }
      /** Tries to create an icon config through the registered resolver functions. */
      _getIconConfigFromResolvers(namespace, name) {
        for (let i = 0; i < this._resolvers.length; i++) {
          const result = this._resolvers[i](name, namespace);
          if (result) {
            return isSafeUrlWithOptions(result) ? new SvgIconConfig(result.url, null, result.options) : new SvgIconConfig(result, null);
          }
        }
        return void 0;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatIconRegistry, deps: [{ token: HttpClient, optional: true }, { token: DomSanitizer }, { token: DOCUMENT, optional: true }, { token: ErrorHandler }], target: FactoryTarget.Injectable });
      static \u0275prov = \u0275\u0275ngDeclareInjectable({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatIconRegistry, providedIn: "root" });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatIconRegistry, decorators: [{
      type: Injectable,
      args: [{ providedIn: "root" }]
    }], ctorParameters: () => [{ type: HttpClient, decorators: [{
      type: Optional
    }] }, { type: DomSanitizer }, { type: void 0, decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [DOCUMENT]
    }] }, { type: ErrorHandler }] });
    ICON_REGISTRY_PROVIDER = {
      // If there is already an MatIconRegistry available, use that. Otherwise, provide a new one.
      provide: MatIconRegistry,
      deps: [
        [new Optional(), new SkipSelf(), MatIconRegistry],
        [new Optional(), HttpClient],
        DomSanitizer,
        ErrorHandler,
        [new Optional(), DOCUMENT]
      ],
      useFactory: ICON_REGISTRY_PROVIDER_FACTORY
    };
  }
});

// node_modules/@angular/material/fesm2022/icon.mjs
function MAT_ICON_LOCATION_FACTORY() {
  const _document = inject(DOCUMENT);
  const _location = _document ? _document.location : null;
  return {
    // Note that this needs to be a function, rather than a property, because Angular
    // will only resolve it once, but we want the current path on each call.
    getPathname: () => _location ? _location.pathname + _location.search : ""
  };
}
var MAT_ICON_DEFAULT_OPTIONS, MAT_ICON_LOCATION, funcIriAttributes, funcIriAttributeSelector, funcIriPattern, MatIcon, MatIconModule;
var init_icon = __esm({
  "node_modules/@angular/material/fesm2022/icon.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_esm();
    init_operators();
    init_icon_registry_CwOTJ7YM();
    init_common_module_cKSwHniA();
    MAT_ICON_DEFAULT_OPTIONS = new InjectionToken("MAT_ICON_DEFAULT_OPTIONS");
    MAT_ICON_LOCATION = new InjectionToken("mat-icon-location", {
      providedIn: "root",
      factory: MAT_ICON_LOCATION_FACTORY
    });
    funcIriAttributes = [
      "clip-path",
      "color-profile",
      "src",
      "cursor",
      "fill",
      "filter",
      "marker",
      "marker-start",
      "marker-mid",
      "marker-end",
      "mask",
      "stroke"
    ];
    funcIriAttributeSelector = funcIriAttributes.map((attr) => `[${attr}]`).join(", ");
    funcIriPattern = /^url\(['"]?#(.*?)['"]?\)$/;
    MatIcon = class _MatIcon {
      _elementRef = inject(ElementRef);
      _iconRegistry = inject(MatIconRegistry);
      _location = inject(MAT_ICON_LOCATION);
      _errorHandler = inject(ErrorHandler);
      _defaultColor;
      /**
       * Theme color of the icon. This API is supported in M2 themes only, it
       * has no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/icon/styling.
       *
       * For information on applying color variants in M3, see
       * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
       */
      get color() {
        return this._color || this._defaultColor;
      }
      set color(value) {
        this._color = value;
      }
      _color;
      /**
       * Whether the icon should be inlined, automatically sizing the icon to match the font size of
       * the element the icon is contained in.
       */
      inline = false;
      /** Name of the icon in the SVG icon set. */
      get svgIcon() {
        return this._svgIcon;
      }
      set svgIcon(value) {
        if (value !== this._svgIcon) {
          if (value) {
            this._updateSvgIcon(value);
          } else if (this._svgIcon) {
            this._clearSvgElement();
          }
          this._svgIcon = value;
        }
      }
      _svgIcon;
      /** Font set that the icon is a part of. */
      get fontSet() {
        return this._fontSet;
      }
      set fontSet(value) {
        const newValue = this._cleanupFontValue(value);
        if (newValue !== this._fontSet) {
          this._fontSet = newValue;
          this._updateFontIconClasses();
        }
      }
      _fontSet;
      /** Name of an icon within a font set. */
      get fontIcon() {
        return this._fontIcon;
      }
      set fontIcon(value) {
        const newValue = this._cleanupFontValue(value);
        if (newValue !== this._fontIcon) {
          this._fontIcon = newValue;
          this._updateFontIconClasses();
        }
      }
      _fontIcon;
      _previousFontSetClass = [];
      _previousFontIconClass;
      _svgName;
      _svgNamespace;
      /** Keeps track of the current page path. */
      _previousPath;
      /** Keeps track of the elements and attributes that we've prefixed with the current path. */
      _elementsWithExternalReferences;
      /** Subscription to the current in-progress SVG icon request. */
      _currentIconFetch = Subscription.EMPTY;
      constructor() {
        const ariaHidden = inject(new HostAttributeToken("aria-hidden"), { optional: true });
        const defaults = inject(MAT_ICON_DEFAULT_OPTIONS, { optional: true });
        if (defaults) {
          if (defaults.color) {
            this.color = this._defaultColor = defaults.color;
          }
          if (defaults.fontSet) {
            this.fontSet = defaults.fontSet;
          }
        }
        if (!ariaHidden) {
          this._elementRef.nativeElement.setAttribute("aria-hidden", "true");
        }
      }
      /**
       * Splits an svgIcon binding value into its icon set and icon name components.
       * Returns a 2-element array of [(icon set), (icon name)].
       * The separator for the two fields is ':'. If there is no separator, an empty
       * string is returned for the icon set and the entire value is returned for
       * the icon name. If the argument is falsy, returns an array of two empty strings.
       * Throws an error if the name contains two or more ':' separators.
       * Examples:
       *   `'social:cake' -> ['social', 'cake']
       *   'penguin' -> ['', 'penguin']
       *   null -> ['', '']
       *   'a:b:c' -> (throws Error)`
       */
      _splitIconName(iconName) {
        if (!iconName) {
          return ["", ""];
        }
        const parts = iconName.split(":");
        switch (parts.length) {
          case 1:
            return ["", parts[0]];
          // Use default namespace.
          case 2:
            return parts;
          default:
            throw Error(`Invalid icon name: "${iconName}"`);
        }
      }
      ngOnInit() {
        this._updateFontIconClasses();
      }
      ngAfterViewChecked() {
        const cachedElements = this._elementsWithExternalReferences;
        if (cachedElements && cachedElements.size) {
          const newPath = this._location.getPathname();
          if (newPath !== this._previousPath) {
            this._previousPath = newPath;
            this._prependPathToReferences(newPath);
          }
        }
      }
      ngOnDestroy() {
        this._currentIconFetch.unsubscribe();
        if (this._elementsWithExternalReferences) {
          this._elementsWithExternalReferences.clear();
        }
      }
      _usingFontIcon() {
        return !this.svgIcon;
      }
      _setSvgElement(svg) {
        this._clearSvgElement();
        const path = this._location.getPathname();
        this._previousPath = path;
        this._cacheChildrenWithExternalReferences(svg);
        this._prependPathToReferences(path);
        this._elementRef.nativeElement.appendChild(svg);
      }
      _clearSvgElement() {
        const layoutElement = this._elementRef.nativeElement;
        let childCount = layoutElement.childNodes.length;
        if (this._elementsWithExternalReferences) {
          this._elementsWithExternalReferences.clear();
        }
        while (childCount--) {
          const child = layoutElement.childNodes[childCount];
          if (child.nodeType !== 1 || child.nodeName.toLowerCase() === "svg") {
            child.remove();
          }
        }
      }
      _updateFontIconClasses() {
        if (!this._usingFontIcon()) {
          return;
        }
        const elem = this._elementRef.nativeElement;
        const fontSetClasses = (this.fontSet ? this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/) : this._iconRegistry.getDefaultFontSetClass()).filter((className) => className.length > 0);
        this._previousFontSetClass.forEach((className) => elem.classList.remove(className));
        fontSetClasses.forEach((className) => elem.classList.add(className));
        this._previousFontSetClass = fontSetClasses;
        if (this.fontIcon !== this._previousFontIconClass && !fontSetClasses.includes("mat-ligature-font")) {
          if (this._previousFontIconClass) {
            elem.classList.remove(this._previousFontIconClass);
          }
          if (this.fontIcon) {
            elem.classList.add(this.fontIcon);
          }
          this._previousFontIconClass = this.fontIcon;
        }
      }
      /**
       * Cleans up a value to be used as a fontIcon or fontSet.
       * Since the value ends up being assigned as a CSS class, we
       * have to trim the value and omit space-separated values.
       */
      _cleanupFontValue(value) {
        return typeof value === "string" ? value.trim().split(" ")[0] : value;
      }
      /**
       * Prepends the current path to all elements that have an attribute pointing to a `FuncIRI`
       * reference. This is required because WebKit browsers require references to be prefixed with
       * the current path, if the page has a `base` tag.
       */
      _prependPathToReferences(path) {
        const elements = this._elementsWithExternalReferences;
        if (elements) {
          elements.forEach((attrs, element) => {
            attrs.forEach((attr) => {
              element.setAttribute(attr.name, `url('${path}#${attr.value}')`);
            });
          });
        }
      }
      /**
       * Caches the children of an SVG element that have `url()`
       * references that we need to prefix with the current path.
       */
      _cacheChildrenWithExternalReferences(element) {
        const elementsWithFuncIri = element.querySelectorAll(funcIriAttributeSelector);
        const elements = this._elementsWithExternalReferences = this._elementsWithExternalReferences || /* @__PURE__ */ new Map();
        for (let i = 0; i < elementsWithFuncIri.length; i++) {
          funcIriAttributes.forEach((attr) => {
            const elementWithReference = elementsWithFuncIri[i];
            const value = elementWithReference.getAttribute(attr);
            const match = value ? value.match(funcIriPattern) : null;
            if (match) {
              let attributes = elements.get(elementWithReference);
              if (!attributes) {
                attributes = [];
                elements.set(elementWithReference, attributes);
              }
              attributes.push({ name: attr, value: match[1] });
            }
          });
        }
      }
      /** Sets a new SVG icon with a particular name. */
      _updateSvgIcon(rawName) {
        this._svgNamespace = null;
        this._svgName = null;
        this._currentIconFetch.unsubscribe();
        if (rawName) {
          const [namespace, iconName] = this._splitIconName(rawName);
          if (namespace) {
            this._svgNamespace = namespace;
          }
          if (iconName) {
            this._svgName = iconName;
          }
          this._currentIconFetch = this._iconRegistry.getNamedSvgIcon(iconName, namespace).pipe(take(1)).subscribe((svg) => this._setSvgElement(svg), (err) => {
            const errorMessage = `Error retrieving icon ${namespace}:${iconName}! ${err.message}`;
            this._errorHandler.handleError(new Error(errorMessage));
          });
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatIcon, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "16.1.0", version: "20.0.0", type: _MatIcon, isStandalone: true, selector: "mat-icon", inputs: { color: "color", inline: ["inline", "inline", booleanAttribute], svgIcon: "svgIcon", fontSet: "fontSet", fontIcon: "fontIcon" }, host: { attributes: { "role": "img" }, properties: { "class": 'color ? "mat-" + color : ""', "attr.data-mat-icon-type": '_usingFontIcon() ? "font" : "svg"', "attr.data-mat-icon-name": "_svgName || fontIcon", "attr.data-mat-icon-namespace": "_svgNamespace || fontSet", "attr.fontIcon": "_usingFontIcon() ? fontIcon : null", "class.mat-icon-inline": "inline", "class.mat-icon-no-color": 'color !== "primary" && color !== "accent" && color !== "warn"' }, classAttribute: "mat-icon notranslate" }, exportAs: ["matIcon"], ngImport: core_exports, template: "<ng-content></ng-content>", isInline: true, styles: ["mat-icon,mat-icon.mat-primary,mat-icon.mat-accent,mat-icon.mat-warn{color:var(--mat-icon-color, inherit)}.mat-icon{-webkit-user-select:none;user-select:none;background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px;overflow:hidden}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}.mat-icon.mat-ligature-font[fontIcon]::before{content:attr(fontIcon)}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}\n"], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatIcon, decorators: [{
      type: Component,
      args: [{ template: "<ng-content></ng-content>", selector: "mat-icon", exportAs: "matIcon", host: {
        "role": "img",
        "class": "mat-icon notranslate",
        "[class]": 'color ? "mat-" + color : ""',
        "[attr.data-mat-icon-type]": '_usingFontIcon() ? "font" : "svg"',
        "[attr.data-mat-icon-name]": "_svgName || fontIcon",
        "[attr.data-mat-icon-namespace]": "_svgNamespace || fontSet",
        "[attr.fontIcon]": "_usingFontIcon() ? fontIcon : null",
        "[class.mat-icon-inline]": "inline",
        "[class.mat-icon-no-color]": 'color !== "primary" && color !== "accent" && color !== "warn"'
      }, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["mat-icon,mat-icon.mat-primary,mat-icon.mat-accent,mat-icon.mat-warn{color:var(--mat-icon-color, inherit)}.mat-icon{-webkit-user-select:none;user-select:none;background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px;overflow:hidden}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}.mat-icon.mat-ligature-font[fontIcon]::before{content:attr(fontIcon)}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}\n"] }]
    }], ctorParameters: () => [], propDecorators: { color: [{
      type: Input
    }], inline: [{
      type: Input,
      args: [{ transform: booleanAttribute }]
    }], svgIcon: [{
      type: Input
    }], fontSet: [{
      type: Input
    }], fontIcon: [{
      type: Input
    }] } });
    MatIconModule = class _MatIconModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatIconModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.0", ngImport: core_exports, type: _MatIconModule, imports: [MatCommonModule, MatIcon], exports: [MatIcon, MatCommonModule] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatIconModule, imports: [MatCommonModule, MatCommonModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatIconModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [MatCommonModule, MatIcon],
        exports: [MatIcon, MatCommonModule]
      }]
    }] });
  }
});

// node_modules/@angular/material/fesm2022/ripple-BMyyyLz2.mjs
function distanceToFurthestCorner(x, y, rect) {
  const distX = Math.max(Math.abs(x - rect.left), Math.abs(x - rect.right));
  const distY = Math.max(Math.abs(y - rect.top), Math.abs(y - rect.bottom));
  return Math.sqrt(distX * distX + distY * distY);
}
var RippleState, RippleRef, passiveCapturingEventOptions$1, RippleEventManager, defaultRippleAnimationConfig, ignoreMouseEventsTimeout, passiveCapturingEventOptions, pointerDownEvents, pointerUpEvents, _MatRippleStylesLoader, RippleRenderer, MAT_RIPPLE_GLOBAL_OPTIONS, MatRipple;
var init_ripple_BMyyyLz2 = __esm({
  "node_modules/@angular/material/fesm2022/ripple-BMyyyLz2.mjs"() {
    "use strict";
    init_platform();
    init_core();
    init_core();
    init_a11y();
    init_coercion();
    init_private();
    init_animation_ChQ1vjiF();
    (function(RippleState2) {
      RippleState2[RippleState2["FADING_IN"] = 0] = "FADING_IN";
      RippleState2[RippleState2["VISIBLE"] = 1] = "VISIBLE";
      RippleState2[RippleState2["FADING_OUT"] = 2] = "FADING_OUT";
      RippleState2[RippleState2["HIDDEN"] = 3] = "HIDDEN";
    })(RippleState || (RippleState = {}));
    RippleRef = class {
      _renderer;
      element;
      config;
      _animationForciblyDisabledThroughCss;
      /** Current state of the ripple. */
      state = RippleState.HIDDEN;
      constructor(_renderer, element, config, _animationForciblyDisabledThroughCss = false) {
        this._renderer = _renderer;
        this.element = element;
        this.config = config;
        this._animationForciblyDisabledThroughCss = _animationForciblyDisabledThroughCss;
      }
      /** Fades out the ripple element. */
      fadeOut() {
        this._renderer.fadeOutRipple(this);
      }
    };
    passiveCapturingEventOptions$1 = normalizePassiveListenerOptions({
      passive: true,
      capture: true
    });
    RippleEventManager = class {
      _events = /* @__PURE__ */ new Map();
      /** Adds an event handler. */
      addHandler(ngZone, name, element, handler) {
        const handlersForEvent = this._events.get(name);
        if (handlersForEvent) {
          const handlersForElement = handlersForEvent.get(element);
          if (handlersForElement) {
            handlersForElement.add(handler);
          } else {
            handlersForEvent.set(element, /* @__PURE__ */ new Set([handler]));
          }
        } else {
          this._events.set(name, /* @__PURE__ */ new Map([[element, /* @__PURE__ */ new Set([handler])]]));
          ngZone.runOutsideAngular(() => {
            document.addEventListener(name, this._delegateEventHandler, passiveCapturingEventOptions$1);
          });
        }
      }
      /** Removes an event handler. */
      removeHandler(name, element, handler) {
        const handlersForEvent = this._events.get(name);
        if (!handlersForEvent) {
          return;
        }
        const handlersForElement = handlersForEvent.get(element);
        if (!handlersForElement) {
          return;
        }
        handlersForElement.delete(handler);
        if (handlersForElement.size === 0) {
          handlersForEvent.delete(element);
        }
        if (handlersForEvent.size === 0) {
          this._events.delete(name);
          document.removeEventListener(name, this._delegateEventHandler, passiveCapturingEventOptions$1);
        }
      }
      /** Event handler that is bound and which dispatches the events to the different targets. */
      _delegateEventHandler = (event) => {
        const target = _getEventTarget(event);
        if (target) {
          this._events.get(event.type)?.forEach((handlers, element) => {
            if (element === target || element.contains(target)) {
              handlers.forEach((handler) => handler.handleEvent(event));
            }
          });
        }
      };
    };
    defaultRippleAnimationConfig = {
      enterDuration: 225,
      exitDuration: 150
    };
    ignoreMouseEventsTimeout = 800;
    passiveCapturingEventOptions = normalizePassiveListenerOptions({
      passive: true,
      capture: true
    });
    pointerDownEvents = ["mousedown", "touchstart"];
    pointerUpEvents = ["mouseup", "mouseleave", "touchend", "touchcancel"];
    _MatRippleStylesLoader = class __MatRippleStylesLoader {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: __MatRippleStylesLoader, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0", type: __MatRippleStylesLoader, isStandalone: true, selector: "ng-component", host: { attributes: { "mat-ripple-style-loader": "" } }, ngImport: core_exports, template: "", isInline: true, styles: [".mat-ripple{overflow:hidden;position:relative}.mat-ripple:not(:empty){transform:translateZ(0)}.mat-ripple.mat-ripple-unbounded{overflow:visible}.mat-ripple-element{position:absolute;border-radius:50%;pointer-events:none;transition:opacity,transform 0ms cubic-bezier(0, 0, 0.2, 1);transform:scale3d(0, 0, 0);background-color:var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent))}@media(forced-colors: active){.mat-ripple-element{display:none}}.cdk-drag-preview .mat-ripple-element,.cdk-drag-placeholder .mat-ripple-element{display:none}\n"], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatRippleStylesLoader, decorators: [{
      type: Component,
      args: [{ template: "", changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, host: { "mat-ripple-style-loader": "" }, styles: [".mat-ripple{overflow:hidden;position:relative}.mat-ripple:not(:empty){transform:translateZ(0)}.mat-ripple.mat-ripple-unbounded{overflow:visible}.mat-ripple-element{position:absolute;border-radius:50%;pointer-events:none;transition:opacity,transform 0ms cubic-bezier(0, 0, 0.2, 1);transform:scale3d(0, 0, 0);background-color:var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent))}@media(forced-colors: active){.mat-ripple-element{display:none}}.cdk-drag-preview .mat-ripple-element,.cdk-drag-placeholder .mat-ripple-element{display:none}\n"] }]
    }] });
    RippleRenderer = class _RippleRenderer {
      _target;
      _ngZone;
      _platform;
      /** Element where the ripples are being added to. */
      _containerElement;
      /** Element which triggers the ripple elements on mouse events. */
      _triggerElement;
      /** Whether the pointer is currently down or not. */
      _isPointerDown = false;
      /**
       * Map of currently active ripple references.
       * The ripple reference is mapped to its element event listeners.
       * The reason why `| null` is used is that event listeners are added only
       * when the condition is truthy (see the `_startFadeOutTransition` method).
       */
      _activeRipples = /* @__PURE__ */ new Map();
      /** Latest non-persistent ripple that was triggered. */
      _mostRecentTransientRipple;
      /** Time in milliseconds when the last touchstart event happened. */
      _lastTouchStartEvent;
      /** Whether pointer-up event listeners have been registered. */
      _pointerUpEventsRegistered = false;
      /**
       * Cached dimensions of the ripple container. Set when the first
       * ripple is shown and cleared once no more ripples are visible.
       */
      _containerRect;
      static _eventManager = new RippleEventManager();
      constructor(_target, _ngZone, elementOrElementRef, _platform, injector) {
        this._target = _target;
        this._ngZone = _ngZone;
        this._platform = _platform;
        if (_platform.isBrowser) {
          this._containerElement = coerceElement(elementOrElementRef);
        }
        if (injector) {
          injector.get(_CdkPrivateStyleLoader).load(_MatRippleStylesLoader);
        }
      }
      /**
       * Fades in a ripple at the given coordinates.
       * @param x Coordinate within the element, along the X axis at which to start the ripple.
       * @param y Coordinate within the element, along the Y axis at which to start the ripple.
       * @param config Extra ripple options.
       */
      fadeInRipple(x, y, config = {}) {
        const containerRect = this._containerRect = this._containerRect || this._containerElement.getBoundingClientRect();
        const animationConfig = __spreadValues(__spreadValues({}, defaultRippleAnimationConfig), config.animation);
        if (config.centered) {
          x = containerRect.left + containerRect.width / 2;
          y = containerRect.top + containerRect.height / 2;
        }
        const radius = config.radius || distanceToFurthestCorner(x, y, containerRect);
        const offsetX = x - containerRect.left;
        const offsetY = y - containerRect.top;
        const enterDuration = animationConfig.enterDuration;
        const ripple = document.createElement("div");
        ripple.classList.add("mat-ripple-element");
        ripple.style.left = `${offsetX - radius}px`;
        ripple.style.top = `${offsetY - radius}px`;
        ripple.style.height = `${radius * 2}px`;
        ripple.style.width = `${radius * 2}px`;
        if (config.color != null) {
          ripple.style.backgroundColor = config.color;
        }
        ripple.style.transitionDuration = `${enterDuration}ms`;
        this._containerElement.appendChild(ripple);
        const computedStyles = window.getComputedStyle(ripple);
        const userTransitionProperty = computedStyles.transitionProperty;
        const userTransitionDuration = computedStyles.transitionDuration;
        const animationForciblyDisabledThroughCss = userTransitionProperty === "none" || // Note: The canonical unit for serialized CSS `<time>` properties is seconds. Additionally
        // some browsers expand the duration for every property (in our case `opacity` and `transform`).
        userTransitionDuration === "0s" || userTransitionDuration === "0s, 0s" || // If the container is 0x0, it's likely `display: none`.
        containerRect.width === 0 && containerRect.height === 0;
        const rippleRef = new RippleRef(this, ripple, config, animationForciblyDisabledThroughCss);
        ripple.style.transform = "scale3d(1, 1, 1)";
        rippleRef.state = RippleState.FADING_IN;
        if (!config.persistent) {
          this._mostRecentTransientRipple = rippleRef;
        }
        let eventListeners = null;
        if (!animationForciblyDisabledThroughCss && (enterDuration || animationConfig.exitDuration)) {
          this._ngZone.runOutsideAngular(() => {
            const onTransitionEnd = () => {
              if (eventListeners) {
                eventListeners.fallbackTimer = null;
              }
              clearTimeout(fallbackTimer);
              this._finishRippleTransition(rippleRef);
            };
            const onTransitionCancel = () => this._destroyRipple(rippleRef);
            const fallbackTimer = setTimeout(onTransitionCancel, enterDuration + 100);
            ripple.addEventListener("transitionend", onTransitionEnd);
            ripple.addEventListener("transitioncancel", onTransitionCancel);
            eventListeners = { onTransitionEnd, onTransitionCancel, fallbackTimer };
          });
        }
        this._activeRipples.set(rippleRef, eventListeners);
        if (animationForciblyDisabledThroughCss || !enterDuration) {
          this._finishRippleTransition(rippleRef);
        }
        return rippleRef;
      }
      /** Fades out a ripple reference. */
      fadeOutRipple(rippleRef) {
        if (rippleRef.state === RippleState.FADING_OUT || rippleRef.state === RippleState.HIDDEN) {
          return;
        }
        const rippleEl = rippleRef.element;
        const animationConfig = __spreadValues(__spreadValues({}, defaultRippleAnimationConfig), rippleRef.config.animation);
        rippleEl.style.transitionDuration = `${animationConfig.exitDuration}ms`;
        rippleEl.style.opacity = "0";
        rippleRef.state = RippleState.FADING_OUT;
        if (rippleRef._animationForciblyDisabledThroughCss || !animationConfig.exitDuration) {
          this._finishRippleTransition(rippleRef);
        }
      }
      /** Fades out all currently active ripples. */
      fadeOutAll() {
        this._getActiveRipples().forEach((ripple) => ripple.fadeOut());
      }
      /** Fades out all currently active non-persistent ripples. */
      fadeOutAllNonPersistent() {
        this._getActiveRipples().forEach((ripple) => {
          if (!ripple.config.persistent) {
            ripple.fadeOut();
          }
        });
      }
      /** Sets up the trigger event listeners */
      setupTriggerEvents(elementOrElementRef) {
        const element = coerceElement(elementOrElementRef);
        if (!this._platform.isBrowser || !element || element === this._triggerElement) {
          return;
        }
        this._removeTriggerEvents();
        this._triggerElement = element;
        pointerDownEvents.forEach((type) => {
          _RippleRenderer._eventManager.addHandler(this._ngZone, type, element, this);
        });
      }
      /**
       * Handles all registered events.
       * @docs-private
       */
      handleEvent(event) {
        if (event.type === "mousedown") {
          this._onMousedown(event);
        } else if (event.type === "touchstart") {
          this._onTouchStart(event);
        } else {
          this._onPointerUp();
        }
        if (!this._pointerUpEventsRegistered) {
          this._ngZone.runOutsideAngular(() => {
            pointerUpEvents.forEach((type) => {
              this._triggerElement.addEventListener(type, this, passiveCapturingEventOptions);
            });
          });
          this._pointerUpEventsRegistered = true;
        }
      }
      /** Method that will be called if the fade-in or fade-in transition completed. */
      _finishRippleTransition(rippleRef) {
        if (rippleRef.state === RippleState.FADING_IN) {
          this._startFadeOutTransition(rippleRef);
        } else if (rippleRef.state === RippleState.FADING_OUT) {
          this._destroyRipple(rippleRef);
        }
      }
      /**
       * Starts the fade-out transition of the given ripple if it's not persistent and the pointer
       * is not held down anymore.
       */
      _startFadeOutTransition(rippleRef) {
        const isMostRecentTransientRipple = rippleRef === this._mostRecentTransientRipple;
        const { persistent } = rippleRef.config;
        rippleRef.state = RippleState.VISIBLE;
        if (!persistent && (!isMostRecentTransientRipple || !this._isPointerDown)) {
          rippleRef.fadeOut();
        }
      }
      /** Destroys the given ripple by removing it from the DOM and updating its state. */
      _destroyRipple(rippleRef) {
        const eventListeners = this._activeRipples.get(rippleRef) ?? null;
        this._activeRipples.delete(rippleRef);
        if (!this._activeRipples.size) {
          this._containerRect = null;
        }
        if (rippleRef === this._mostRecentTransientRipple) {
          this._mostRecentTransientRipple = null;
        }
        rippleRef.state = RippleState.HIDDEN;
        if (eventListeners !== null) {
          rippleRef.element.removeEventListener("transitionend", eventListeners.onTransitionEnd);
          rippleRef.element.removeEventListener("transitioncancel", eventListeners.onTransitionCancel);
          if (eventListeners.fallbackTimer !== null) {
            clearTimeout(eventListeners.fallbackTimer);
          }
        }
        rippleRef.element.remove();
      }
      /** Function being called whenever the trigger is being pressed using mouse. */
      _onMousedown(event) {
        const isFakeMousedown = isFakeMousedownFromScreenReader(event);
        const isSyntheticEvent = this._lastTouchStartEvent && Date.now() < this._lastTouchStartEvent + ignoreMouseEventsTimeout;
        if (!this._target.rippleDisabled && !isFakeMousedown && !isSyntheticEvent) {
          this._isPointerDown = true;
          this.fadeInRipple(event.clientX, event.clientY, this._target.rippleConfig);
        }
      }
      /** Function being called whenever the trigger is being pressed using touch. */
      _onTouchStart(event) {
        if (!this._target.rippleDisabled && !isFakeTouchstartFromScreenReader(event)) {
          this._lastTouchStartEvent = Date.now();
          this._isPointerDown = true;
          const touches = event.changedTouches;
          if (touches) {
            for (let i = 0; i < touches.length; i++) {
              this.fadeInRipple(touches[i].clientX, touches[i].clientY, this._target.rippleConfig);
            }
          }
        }
      }
      /** Function being called whenever the trigger is being released. */
      _onPointerUp() {
        if (!this._isPointerDown) {
          return;
        }
        this._isPointerDown = false;
        this._getActiveRipples().forEach((ripple) => {
          const isVisible = ripple.state === RippleState.VISIBLE || ripple.config.terminateOnPointerUp && ripple.state === RippleState.FADING_IN;
          if (!ripple.config.persistent && isVisible) {
            ripple.fadeOut();
          }
        });
      }
      _getActiveRipples() {
        return Array.from(this._activeRipples.keys());
      }
      /** Removes previously registered event listeners from the trigger element. */
      _removeTriggerEvents() {
        const trigger = this._triggerElement;
        if (trigger) {
          pointerDownEvents.forEach((type) => _RippleRenderer._eventManager.removeHandler(type, trigger, this));
          if (this._pointerUpEventsRegistered) {
            pointerUpEvents.forEach((type) => trigger.removeEventListener(type, this, passiveCapturingEventOptions));
            this._pointerUpEventsRegistered = false;
          }
        }
      }
    };
    MAT_RIPPLE_GLOBAL_OPTIONS = new InjectionToken("mat-ripple-global-options");
    MatRipple = class _MatRipple {
      _elementRef = inject(ElementRef);
      _animationsDisabled = _animationsDisabled();
      /** Custom color for all ripples. */
      color;
      /** Whether the ripples should be visible outside the component's bounds. */
      unbounded;
      /**
       * Whether the ripple always originates from the center of the host element's bounds, rather
       * than originating from the location of the click event.
       */
      centered;
      /**
       * If set, the radius in pixels of foreground ripples when fully expanded. If unset, the radius
       * will be the distance from the center of the ripple to the furthest corner of the host element's
       * bounding rectangle.
       */
      radius = 0;
      /**
       * Configuration for the ripple animation. Allows modifying the enter and exit animation
       * duration of the ripples. The animation durations will be overwritten if the
       * `NoopAnimationsModule` is being used.
       */
      animation;
      /**
       * Whether click events will not trigger the ripple. Ripples can be still launched manually
       * by using the `launch()` method.
       */
      get disabled() {
        return this._disabled;
      }
      set disabled(value) {
        if (value) {
          this.fadeOutAllNonPersistent();
        }
        this._disabled = value;
        this._setupTriggerEventsIfEnabled();
      }
      _disabled = false;
      /**
       * The element that triggers the ripple when click events are received.
       * Defaults to the directive's host element.
       */
      get trigger() {
        return this._trigger || this._elementRef.nativeElement;
      }
      set trigger(trigger) {
        this._trigger = trigger;
        this._setupTriggerEventsIfEnabled();
      }
      _trigger;
      /** Renderer for the ripple DOM manipulations. */
      _rippleRenderer;
      /** Options that are set globally for all ripples. */
      _globalOptions;
      /** @docs-private Whether ripple directive is initialized and the input bindings are set. */
      _isInitialized = false;
      constructor() {
        const ngZone = inject(NgZone);
        const platform = inject(Platform);
        const globalOptions = inject(MAT_RIPPLE_GLOBAL_OPTIONS, { optional: true });
        const injector = inject(Injector);
        this._globalOptions = globalOptions || {};
        this._rippleRenderer = new RippleRenderer(this, ngZone, this._elementRef, platform, injector);
      }
      ngOnInit() {
        this._isInitialized = true;
        this._setupTriggerEventsIfEnabled();
      }
      ngOnDestroy() {
        this._rippleRenderer._removeTriggerEvents();
      }
      /** Fades out all currently showing ripple elements. */
      fadeOutAll() {
        this._rippleRenderer.fadeOutAll();
      }
      /** Fades out all currently showing non-persistent ripple elements. */
      fadeOutAllNonPersistent() {
        this._rippleRenderer.fadeOutAllNonPersistent();
      }
      /**
       * Ripple configuration from the directive's input values.
       * @docs-private Implemented as part of RippleTarget
       */
      get rippleConfig() {
        return {
          centered: this.centered,
          radius: this.radius,
          color: this.color,
          animation: __spreadValues(__spreadValues(__spreadValues({}, this._globalOptions.animation), this._animationsDisabled ? { enterDuration: 0, exitDuration: 0 } : {}), this.animation),
          terminateOnPointerUp: this._globalOptions.terminateOnPointerUp
        };
      }
      /**
       * Whether ripples on pointer-down are disabled or not.
       * @docs-private Implemented as part of RippleTarget
       */
      get rippleDisabled() {
        return this.disabled || !!this._globalOptions.disabled;
      }
      /** Sets up the trigger event listeners if ripples are enabled. */
      _setupTriggerEventsIfEnabled() {
        if (!this.disabled && this._isInitialized) {
          this._rippleRenderer.setupTriggerEvents(this.trigger);
        }
      }
      /** Launches a manual ripple at the specified coordinated or just by the ripple config. */
      launch(configOrX, y = 0, config) {
        if (typeof configOrX === "number") {
          return this._rippleRenderer.fadeInRipple(configOrX, y, __spreadValues(__spreadValues({}, this.rippleConfig), config));
        } else {
          return this._rippleRenderer.fadeInRipple(0, 0, __spreadValues(__spreadValues({}, this.rippleConfig), configOrX));
        }
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatRipple, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatRipple, isStandalone: true, selector: "[mat-ripple], [matRipple]", inputs: { color: ["matRippleColor", "color"], unbounded: ["matRippleUnbounded", "unbounded"], centered: ["matRippleCentered", "centered"], radius: ["matRippleRadius", "radius"], animation: ["matRippleAnimation", "animation"], disabled: ["matRippleDisabled", "disabled"], trigger: ["matRippleTrigger", "trigger"] }, host: { properties: { "class.mat-ripple-unbounded": "unbounded" }, classAttribute: "mat-ripple" }, exportAs: ["matRipple"], ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatRipple, decorators: [{
      type: Directive,
      args: [{
        selector: "[mat-ripple], [matRipple]",
        exportAs: "matRipple",
        host: {
          "class": "mat-ripple",
          "[class.mat-ripple-unbounded]": "unbounded"
        }
      }]
    }], ctorParameters: () => [], propDecorators: { color: [{
      type: Input,
      args: ["matRippleColor"]
    }], unbounded: [{
      type: Input,
      args: ["matRippleUnbounded"]
    }], centered: [{
      type: Input,
      args: ["matRippleCentered"]
    }], radius: [{
      type: Input,
      args: ["matRippleRadius"]
    }], animation: [{
      type: Input,
      args: ["matRippleAnimation"]
    }], disabled: [{
      type: Input,
      args: ["matRippleDisabled"]
    }], trigger: [{
      type: Input,
      args: ["matRippleTrigger"]
    }] } });
  }
});

// node_modules/@angular/material/fesm2022/structural-styles-CObeNzjn.mjs
var _StructuralStylesLoader;
var init_structural_styles_CObeNzjn = __esm({
  "node_modules/@angular/material/fesm2022/structural-styles-CObeNzjn.mjs"() {
    "use strict";
    init_core();
    init_core();
    _StructuralStylesLoader = class __StructuralStylesLoader {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: __StructuralStylesLoader, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0", type: __StructuralStylesLoader, isStandalone: true, selector: "structural-styles", ngImport: core_exports, template: "", isInline: true, styles: ['.mat-focus-indicator{position:relative}.mat-focus-indicator::before{top:0;left:0;right:0;bottom:0;position:absolute;box-sizing:border-box;pointer-events:none;display:var(--mat-focus-indicator-display, none);border-width:var(--mat-focus-indicator-border-width, 3px);border-style:var(--mat-focus-indicator-border-style, solid);border-color:var(--mat-focus-indicator-border-color, transparent);border-radius:var(--mat-focus-indicator-border-radius, 4px)}.mat-focus-indicator:focus::before{content:""}@media(forced-colors: active){html{--mat-focus-indicator-display: block}}\n'], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _StructuralStylesLoader, decorators: [{
      type: Component,
      args: [{ selector: "structural-styles", encapsulation: ViewEncapsulation.None, template: "", changeDetection: ChangeDetectionStrategy.OnPush, styles: ['.mat-focus-indicator{position:relative}.mat-focus-indicator::before{top:0;left:0;right:0;bottom:0;position:absolute;box-sizing:border-box;pointer-events:none;display:var(--mat-focus-indicator-display, none);border-width:var(--mat-focus-indicator-border-width, 3px);border-style:var(--mat-focus-indicator-border-style, solid);border-color:var(--mat-focus-indicator-border-color, transparent);border-radius:var(--mat-focus-indicator-border-radius, 4px)}.mat-focus-indicator:focus::before{content:""}@media(forced-colors: active){html{--mat-focus-indicator-display: block}}\n'] }]
    }] });
  }
});

// node_modules/@angular/material/fesm2022/divider.mjs
var MatDivider, MatDividerModule;
var init_divider = __esm({
  "node_modules/@angular/material/fesm2022/divider.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_coercion();
    init_common_module_cKSwHniA();
    MatDivider = class _MatDivider {
      /** Whether the divider is vertically aligned. */
      get vertical() {
        return this._vertical;
      }
      set vertical(value) {
        this._vertical = coerceBooleanProperty(value);
      }
      _vertical = false;
      /** Whether the divider is an inset divider. */
      get inset() {
        return this._inset;
      }
      set inset(value) {
        this._inset = coerceBooleanProperty(value);
      }
      _inset = false;
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatDivider, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0", type: _MatDivider, isStandalone: true, selector: "mat-divider", inputs: { vertical: "vertical", inset: "inset" }, host: { attributes: { "role": "separator" }, properties: { "attr.aria-orientation": 'vertical ? "vertical" : "horizontal"', "class.mat-divider-vertical": "vertical", "class.mat-divider-horizontal": "!vertical", "class.mat-divider-inset": "inset" }, classAttribute: "mat-divider" }, ngImport: core_exports, template: "", isInline: true, styles: [".mat-divider{display:block;margin:0;border-top-style:solid;border-top-color:var(--mat-divider-color, var(--mat-sys-outline));border-top-width:var(--mat-divider-width, 1px)}.mat-divider.mat-divider-vertical{border-top:0;border-right-style:solid;border-right-color:var(--mat-divider-color, var(--mat-sys-outline));border-right-width:var(--mat-divider-width, 1px)}.mat-divider.mat-divider-inset{margin-left:80px}[dir=rtl] .mat-divider.mat-divider-inset{margin-left:auto;margin-right:80px}\n"], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatDivider, decorators: [{
      type: Component,
      args: [{ selector: "mat-divider", host: {
        "role": "separator",
        "[attr.aria-orientation]": 'vertical ? "vertical" : "horizontal"',
        "[class.mat-divider-vertical]": "vertical",
        "[class.mat-divider-horizontal]": "!vertical",
        "[class.mat-divider-inset]": "inset",
        "class": "mat-divider"
      }, template: "", encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".mat-divider{display:block;margin:0;border-top-style:solid;border-top-color:var(--mat-divider-color, var(--mat-sys-outline));border-top-width:var(--mat-divider-width, 1px)}.mat-divider.mat-divider-vertical{border-top:0;border-right-style:solid;border-right-color:var(--mat-divider-color, var(--mat-sys-outline));border-right-width:var(--mat-divider-width, 1px)}.mat-divider.mat-divider-inset{margin-left:80px}[dir=rtl] .mat-divider.mat-divider-inset{margin-left:auto;margin-right:80px}\n"] }]
    }], propDecorators: { vertical: [{
      type: Input
    }], inset: [{
      type: Input
    }] } });
    MatDividerModule = class _MatDividerModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatDividerModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.0", ngImport: core_exports, type: _MatDividerModule, imports: [MatCommonModule, MatDivider], exports: [MatDivider, MatCommonModule] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatDividerModule, imports: [MatCommonModule, MatCommonModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatDividerModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [MatCommonModule, MatDivider],
        exports: [MatDivider, MatCommonModule]
      }]
    }] });
  }
});

// node_modules/@angular/cdk/fesm2022/selection-model-BCgC8uEN.mjs
function getMultipleValuesInSingleSelectionError() {
  return Error("Cannot pass multiple values into SelectionModel with single-value mode.");
}
var SelectionModel;
var init_selection_model_BCgC8uEN = __esm({
  "node_modules/@angular/cdk/fesm2022/selection-model-BCgC8uEN.mjs"() {
    "use strict";
    init_esm();
    SelectionModel = class {
      _multiple;
      _emitChanges;
      compareWith;
      /** Currently-selected values. */
      _selection = /* @__PURE__ */ new Set();
      /** Keeps track of the deselected options that haven't been emitted by the change event. */
      _deselectedToEmit = [];
      /** Keeps track of the selected options that haven't been emitted by the change event. */
      _selectedToEmit = [];
      /** Cache for the array value of the selected items. */
      _selected;
      /** Selected values. */
      get selected() {
        if (!this._selected) {
          this._selected = Array.from(this._selection.values());
        }
        return this._selected;
      }
      /** Event emitted when the value has changed. */
      changed = new Subject();
      constructor(_multiple = false, initiallySelectedValues, _emitChanges = true, compareWith) {
        this._multiple = _multiple;
        this._emitChanges = _emitChanges;
        this.compareWith = compareWith;
        if (initiallySelectedValues && initiallySelectedValues.length) {
          if (_multiple) {
            initiallySelectedValues.forEach((value) => this._markSelected(value));
          } else {
            this._markSelected(initiallySelectedValues[0]);
          }
          this._selectedToEmit.length = 0;
        }
      }
      /**
       * Selects a value or an array of values.
       * @param values The values to select
       * @return Whether the selection changed as a result of this call
       */
      select(...values) {
        this._verifyValueAssignment(values);
        values.forEach((value) => this._markSelected(value));
        const changed = this._hasQueuedChanges();
        this._emitChangeEvent();
        return changed;
      }
      /**
       * Deselects a value or an array of values.
       * @param values The values to deselect
       * @return Whether the selection changed as a result of this call
       */
      deselect(...values) {
        this._verifyValueAssignment(values);
        values.forEach((value) => this._unmarkSelected(value));
        const changed = this._hasQueuedChanges();
        this._emitChangeEvent();
        return changed;
      }
      /**
       * Sets the selected values
       * @param values The new selected values
       * @return Whether the selection changed as a result of this call
       */
      setSelection(...values) {
        this._verifyValueAssignment(values);
        const oldValues = this.selected;
        const newSelectedSet = new Set(values.map((value) => this._getConcreteValue(value)));
        values.forEach((value) => this._markSelected(value));
        oldValues.filter((value) => !newSelectedSet.has(this._getConcreteValue(value, newSelectedSet))).forEach((value) => this._unmarkSelected(value));
        const changed = this._hasQueuedChanges();
        this._emitChangeEvent();
        return changed;
      }
      /**
       * Toggles a value between selected and deselected.
       * @param value The value to toggle
       * @return Whether the selection changed as a result of this call
       */
      toggle(value) {
        return this.isSelected(value) ? this.deselect(value) : this.select(value);
      }
      /**
       * Clears all of the selected values.
       * @param flushEvent Whether to flush the changes in an event.
       *   If false, the changes to the selection will be flushed along with the next event.
       * @return Whether the selection changed as a result of this call
       */
      clear(flushEvent = true) {
        this._unmarkAll();
        const changed = this._hasQueuedChanges();
        if (flushEvent) {
          this._emitChangeEvent();
        }
        return changed;
      }
      /**
       * Determines whether a value is selected.
       */
      isSelected(value) {
        return this._selection.has(this._getConcreteValue(value));
      }
      /**
       * Determines whether the model does not have a value.
       */
      isEmpty() {
        return this._selection.size === 0;
      }
      /**
       * Determines whether the model has a value.
       */
      hasValue() {
        return !this.isEmpty();
      }
      /**
       * Sorts the selected values based on a predicate function.
       */
      sort(predicate) {
        if (this._multiple && this.selected) {
          this._selected.sort(predicate);
        }
      }
      /**
       * Gets whether multiple values can be selected.
       */
      isMultipleSelection() {
        return this._multiple;
      }
      /** Emits a change event and clears the records of selected and deselected values. */
      _emitChangeEvent() {
        this._selected = null;
        if (this._selectedToEmit.length || this._deselectedToEmit.length) {
          this.changed.next({
            source: this,
            added: this._selectedToEmit,
            removed: this._deselectedToEmit
          });
          this._deselectedToEmit = [];
          this._selectedToEmit = [];
        }
      }
      /** Selects a value. */
      _markSelected(value) {
        value = this._getConcreteValue(value);
        if (!this.isSelected(value)) {
          if (!this._multiple) {
            this._unmarkAll();
          }
          if (!this.isSelected(value)) {
            this._selection.add(value);
          }
          if (this._emitChanges) {
            this._selectedToEmit.push(value);
          }
        }
      }
      /** Deselects a value. */
      _unmarkSelected(value) {
        value = this._getConcreteValue(value);
        if (this.isSelected(value)) {
          this._selection.delete(value);
          if (this._emitChanges) {
            this._deselectedToEmit.push(value);
          }
        }
      }
      /** Clears out the selected values. */
      _unmarkAll() {
        if (!this.isEmpty()) {
          this._selection.forEach((value) => this._unmarkSelected(value));
        }
      }
      /**
       * Verifies the value assignment and throws an error if the specified value array is
       * including multiple values while the selection model is not supporting multiple values.
       */
      _verifyValueAssignment(values) {
        if (values.length > 1 && !this._multiple && (typeof ngDevMode === "undefined" || ngDevMode)) {
          throw getMultipleValuesInSingleSelectionError();
        }
      }
      /** Whether there are queued up change to be emitted. */
      _hasQueuedChanges() {
        return !!(this._deselectedToEmit.length || this._selectedToEmit.length);
      }
      /** Returns a value that is comparable to inputValue by applying compareWith function, returns the same inputValue otherwise. */
      _getConcreteValue(inputValue, selection) {
        if (!this.compareWith) {
          return inputValue;
        } else {
          selection = selection ?? this._selection;
          for (let selectedValue of selection) {
            if (this.compareWith(inputValue, selectedValue)) {
              return selectedValue;
            }
          }
          return inputValue;
        }
      }
    };
  }
});

// node_modules/@angular/cdk/fesm2022/collections.mjs
var init_collections = __esm({
  "node_modules/@angular/cdk/fesm2022/collections.mjs"() {
    "use strict";
    init_selection_model_BCgC8uEN();
  }
});

// node_modules/@angular/material/fesm2022/index-BRImSAOu.mjs
var MatRippleModule;
var init_index_BRImSAOu = __esm({
  "node_modules/@angular/material/fesm2022/index-BRImSAOu.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_common_module_cKSwHniA();
    init_ripple_BMyyyLz2();
    MatRippleModule = class _MatRippleModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatRippleModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.0", ngImport: core_exports, type: _MatRippleModule, imports: [MatCommonModule, MatRipple], exports: [MatRipple, MatCommonModule] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatRippleModule, imports: [MatCommonModule, MatCommonModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatRippleModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [MatCommonModule, MatRipple],
        exports: [MatRipple, MatCommonModule]
      }]
    }] });
  }
});

// node_modules/@angular/material/fesm2022/pseudo-checkbox-AUVlNJs_.mjs
var MatPseudoCheckbox;
var init_pseudo_checkbox_AUVlNJs = __esm({
  "node_modules/@angular/material/fesm2022/pseudo-checkbox-AUVlNJs_.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_animation_ChQ1vjiF();
    MatPseudoCheckbox = class _MatPseudoCheckbox {
      _animationsDisabled = _animationsDisabled();
      /** Display state of the checkbox. */
      state = "unchecked";
      /** Whether the checkbox is disabled. */
      disabled = false;
      /**
       * Appearance of the pseudo checkbox. Default appearance of 'full' renders a checkmark/mixedmark
       * indicator inside a square box. 'minimal' appearance only renders the checkmark/mixedmark.
       */
      appearance = "full";
      constructor() {
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatPseudoCheckbox, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0", type: _MatPseudoCheckbox, isStandalone: true, selector: "mat-pseudo-checkbox", inputs: { state: "state", disabled: "disabled", appearance: "appearance" }, host: { properties: { "class.mat-pseudo-checkbox-indeterminate": 'state === "indeterminate"', "class.mat-pseudo-checkbox-checked": 'state === "checked"', "class.mat-pseudo-checkbox-disabled": "disabled", "class.mat-pseudo-checkbox-minimal": 'appearance === "minimal"', "class.mat-pseudo-checkbox-full": 'appearance === "full"', "class._mat-animation-noopable": "_animationsDisabled" }, classAttribute: "mat-pseudo-checkbox" }, ngImport: core_exports, template: "", isInline: true, styles: ['.mat-pseudo-checkbox{border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1),background-color 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:"";border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox._mat-animation-noopable{transition:none !important;animation:none !important}.mat-pseudo-checkbox._mat-animation-noopable::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{left:1px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{left:1px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after,.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after{color:var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary))}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after,.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after{color:var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-pseudo-checkbox-full{border-color:var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));border-width:2px;border-style:solid}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled{border-color:var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate{background-color:var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));border-color:rgba(0,0,0,0)}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after{color:var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary))}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled{background-color:var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after{color:var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface))}.mat-pseudo-checkbox{width:18px;height:18px}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after{width:14px;height:6px;transform-origin:center;top:-4.2426406871px;left:0;bottom:0;right:0;margin:auto}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after{top:8px;width:16px}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after{width:10px;height:4px;transform-origin:center;top:-2.8284271247px;left:0;bottom:0;right:0;margin:auto}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after{top:6px;width:12px}\n'], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatPseudoCheckbox, decorators: [{
      type: Component,
      args: [{ encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, selector: "mat-pseudo-checkbox", template: "", host: {
        "class": "mat-pseudo-checkbox",
        "[class.mat-pseudo-checkbox-indeterminate]": 'state === "indeterminate"',
        "[class.mat-pseudo-checkbox-checked]": 'state === "checked"',
        "[class.mat-pseudo-checkbox-disabled]": "disabled",
        "[class.mat-pseudo-checkbox-minimal]": 'appearance === "minimal"',
        "[class.mat-pseudo-checkbox-full]": 'appearance === "full"',
        "[class._mat-animation-noopable]": "_animationsDisabled"
      }, styles: ['.mat-pseudo-checkbox{border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1),background-color 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:"";border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox._mat-animation-noopable{transition:none !important;animation:none !important}.mat-pseudo-checkbox._mat-animation-noopable::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{left:1px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{left:1px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after,.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after{color:var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary))}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after,.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after{color:var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-pseudo-checkbox-full{border-color:var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));border-width:2px;border-style:solid}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled{border-color:var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate{background-color:var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));border-color:rgba(0,0,0,0)}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after{color:var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary))}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled{background-color:var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after{color:var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface))}.mat-pseudo-checkbox{width:18px;height:18px}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after{width:14px;height:6px;transform-origin:center;top:-4.2426406871px;left:0;bottom:0;right:0;margin:auto}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after{top:8px;width:16px}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after{width:10px;height:4px;transform-origin:center;top:-2.8284271247px;left:0;bottom:0;right:0;margin:auto}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after{top:6px;width:12px}\n'] }]
    }], ctorParameters: () => [], propDecorators: { state: [{
      type: Input
    }], disabled: [{
      type: Input
    }], appearance: [{
      type: Input
    }] } });
  }
});

// node_modules/@angular/material/fesm2022/pseudo-checkbox-module-BymSaWBn.mjs
var MatPseudoCheckboxModule;
var init_pseudo_checkbox_module_BymSaWBn = __esm({
  "node_modules/@angular/material/fesm2022/pseudo-checkbox-module-BymSaWBn.mjs"() {
    "use strict";
    init_core();
    init_core();
    init_pseudo_checkbox_AUVlNJs();
    init_common_module_cKSwHniA();
    MatPseudoCheckboxModule = class _MatPseudoCheckboxModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatPseudoCheckboxModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.0", ngImport: core_exports, type: _MatPseudoCheckboxModule, imports: [MatCommonModule, MatPseudoCheckbox], exports: [MatPseudoCheckbox] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatPseudoCheckboxModule, imports: [MatCommonModule] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatPseudoCheckboxModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [MatCommonModule, MatPseudoCheckbox],
        exports: [MatPseudoCheckbox]
      }]
    }] });
  }
});

// node_modules/@angular/material/fesm2022/list.mjs
function sanityCheckListItemContent(item) {
  const numTitles = item._titles.length;
  const numLines = item._lines.length;
  if (numTitles > 1) {
    console.warn("A list item cannot have multiple titles.");
  }
  if (numTitles === 0 && numLines > 0) {
    console.warn("A list item line can only be used if there is a list item title.");
  }
  if (numTitles === 0 && item._hasUnscopedTextContent && item._explicitLines !== null && item._explicitLines > 1) {
    console.warn("A list item cannot have wrapping content without a title.");
  }
  if (numLines > 2 || numLines === 2 && item._hasUnscopedTextContent) {
    console.warn("A list item can have at maximum three lines.");
  }
}
var LIST_OPTION, MatListItemTitle, MatListItemLine, MatListItemMeta, _MatListItemGraphicBase, MatListItemAvatar, MatListItemIcon, MAT_LIST_CONFIG, MatListBase, MatListItemBase, MatActionList, MAT_LIST, MatList, MatListItem, SELECTION_LIST, MatListOption, MatListSubheaderCssMatStyler, MAT_NAV_LIST, MatNavList, MAT_SELECTION_LIST_VALUE_ACCESSOR, MatSelectionListChange, MatSelectionList, MatListModule;
var init_list = __esm({
  "node_modules/@angular/material/fesm2022/list.mjs"() {
    "use strict";
    init_coercion();
    init_core();
    init_core();
    init_platform();
    init_private();
    init_esm();
    init_ripple_BMyyyLz2();
    init_animation_ChQ1vjiF();
    init_structural_styles_CObeNzjn();
    init_common();
    init_observers();
    init_divider();
    init_a11y();
    init_collections();
    init_keycodes();
    init_forms();
    init_operators();
    init_common_module_cKSwHniA();
    init_index_BRImSAOu();
    init_pseudo_checkbox_module_BymSaWBn();
    LIST_OPTION = new InjectionToken("ListOption");
    MatListItemTitle = class _MatListItemTitle {
      _elementRef = inject(ElementRef);
      constructor() {
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatListItemTitle, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatListItemTitle, isStandalone: true, selector: "[matListItemTitle]", host: { classAttribute: "mat-mdc-list-item-title mdc-list-item__primary-text" }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatListItemTitle, decorators: [{
      type: Directive,
      args: [{
        selector: "[matListItemTitle]",
        host: { "class": "mat-mdc-list-item-title mdc-list-item__primary-text" }
      }]
    }], ctorParameters: () => [] });
    MatListItemLine = class _MatListItemLine {
      _elementRef = inject(ElementRef);
      constructor() {
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatListItemLine, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatListItemLine, isStandalone: true, selector: "[matListItemLine]", host: { classAttribute: "mat-mdc-list-item-line mdc-list-item__secondary-text" }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatListItemLine, decorators: [{
      type: Directive,
      args: [{
        selector: "[matListItemLine]",
        host: { "class": "mat-mdc-list-item-line mdc-list-item__secondary-text" }
      }]
    }], ctorParameters: () => [] });
    MatListItemMeta = class _MatListItemMeta {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatListItemMeta, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatListItemMeta, isStandalone: true, selector: "[matListItemMeta]", host: { classAttribute: "mat-mdc-list-item-meta mdc-list-item__end" }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatListItemMeta, decorators: [{
      type: Directive,
      args: [{
        selector: "[matListItemMeta]",
        host: { "class": "mat-mdc-list-item-meta mdc-list-item__end" }
      }]
    }] });
    _MatListItemGraphicBase = class __MatListItemGraphicBase {
      _listOption = inject(LIST_OPTION, { optional: true });
      constructor() {
      }
      _isAlignedAtStart() {
        return !this._listOption || this._listOption?._getTogglePosition() === "after";
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: __MatListItemGraphicBase, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: __MatListItemGraphicBase, isStandalone: true, host: { properties: { "class.mdc-list-item__start": "_isAlignedAtStart()", "class.mdc-list-item__end": "!_isAlignedAtStart()" } }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatListItemGraphicBase, decorators: [{
      type: Directive,
      args: [{
        host: {
          // MDC uses intuitively named classes `.mdc-list-item__start` and `.mat-list-item__end` to
          // position content such as icons or checkboxes/radios that comes either before or after the
          // text content respectively. This directive detects the placement of the checkbox/radio and
          // applies the correct MDC class to position the icon/avatar on the opposite side.
          "[class.mdc-list-item__start]": "_isAlignedAtStart()",
          "[class.mdc-list-item__end]": "!_isAlignedAtStart()"
        }
      }]
    }], ctorParameters: () => [] });
    MatListItemAvatar = class _MatListItemAvatar extends _MatListItemGraphicBase {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatListItemAvatar, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatListItemAvatar, isStandalone: true, selector: "[matListItemAvatar]", host: { classAttribute: "mat-mdc-list-item-avatar" }, usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatListItemAvatar, decorators: [{
      type: Directive,
      args: [{
        selector: "[matListItemAvatar]",
        host: { "class": "mat-mdc-list-item-avatar" }
      }]
    }] });
    MatListItemIcon = class _MatListItemIcon extends _MatListItemGraphicBase {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatListItemIcon, deps: null, target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatListItemIcon, isStandalone: true, selector: "[matListItemIcon]", host: { classAttribute: "mat-mdc-list-item-icon" }, usesInheritance: true, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatListItemIcon, decorators: [{
      type: Directive,
      args: [{
        selector: "[matListItemIcon]",
        host: { "class": "mat-mdc-list-item-icon" }
      }]
    }] });
    MAT_LIST_CONFIG = new InjectionToken("MAT_LIST_CONFIG");
    MatListBase = class _MatListBase {
      _isNonInteractive = true;
      /** Whether ripples for all list items is disabled. */
      get disableRipple() {
        return this._disableRipple;
      }
      set disableRipple(value) {
        this._disableRipple = coerceBooleanProperty(value);
      }
      _disableRipple = false;
      /**
       * Whether the entire list is disabled. When disabled, the list itself and each of its list items
       * are disabled.
       */
      get disabled() {
        return this._disabled();
      }
      set disabled(value) {
        this._disabled.set(coerceBooleanProperty(value));
      }
      _disabled = signal(false);
      _defaultOptions = inject(MAT_LIST_CONFIG, { optional: true });
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatListBase, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatListBase, isStandalone: true, inputs: { disableRipple: "disableRipple", disabled: "disabled" }, host: { properties: { "attr.aria-disabled": "disabled" } }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatListBase, decorators: [{
      type: Directive,
      args: [{
        host: {
          "[attr.aria-disabled]": "disabled"
        }
      }]
    }], propDecorators: { disableRipple: [{
      type: Input
    }], disabled: [{
      type: Input
    }] } });
    MatListItemBase = class _MatListItemBase {
      _elementRef = inject(ElementRef);
      _ngZone = inject(NgZone);
      _listBase = inject(MatListBase, { optional: true });
      _platform = inject(Platform);
      /** Host element for the list item. */
      _hostElement;
      /** indicate whether the host element is a button or not */
      _isButtonElement;
      /** Whether animations are disabled. */
      _noopAnimations = _animationsDisabled();
      _avatars;
      _icons;
      /**
       * The number of lines this list item should reserve space for. If not specified,
       * lines are inferred based on the projected content.
       *
       * Explicitly specifying the number of lines is useful if you want to acquire additional
       * space and enable the wrapping of text. The unscoped text content of a list item will
       * always be able to take up the remaining space of the item, unless it represents the title.
       *
       * A maximum of three lines is supported as per the Material Design specification.
       */
      set lines(lines) {
        this._explicitLines = coerceNumberProperty(lines, null);
        this._updateItemLines(false);
      }
      _explicitLines = null;
      /** Whether ripples for list items are disabled. */
      get disableRipple() {
        return this.disabled || this._disableRipple || this._noopAnimations || !!this._listBase?.disableRipple;
      }
      set disableRipple(value) {
        this._disableRipple = coerceBooleanProperty(value);
      }
      _disableRipple = false;
      /** Whether the list-item is disabled. */
      get disabled() {
        return this._disabled() || !!this._listBase?.disabled;
      }
      set disabled(value) {
        this._disabled.set(coerceBooleanProperty(value));
      }
      _disabled = signal(false);
      _subscriptions = new Subscription();
      _rippleRenderer = null;
      /** Whether the list item has unscoped text content. */
      _hasUnscopedTextContent = false;
      /**
       * Implemented as part of `RippleTarget`.
       * @docs-private
       */
      rippleConfig;
      /**
       * Implemented as part of `RippleTarget`.
       * @docs-private
       */
      get rippleDisabled() {
        return this.disableRipple || !!this.rippleConfig.disabled;
      }
      constructor() {
        inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
        const globalRippleOptions = inject(MAT_RIPPLE_GLOBAL_OPTIONS, {
          optional: true
        });
        this.rippleConfig = globalRippleOptions || {};
        this._hostElement = this._elementRef.nativeElement;
        this._isButtonElement = this._hostElement.nodeName.toLowerCase() === "button";
        if (this._listBase && !this._listBase._isNonInteractive) {
          this._initInteractiveListItem();
        }
        if (this._isButtonElement && !this._hostElement.hasAttribute("type")) {
          this._hostElement.setAttribute("type", "button");
        }
      }
      ngAfterViewInit() {
        this._monitorProjectedLinesAndTitle();
        this._updateItemLines(true);
      }
      ngOnDestroy() {
        this._subscriptions.unsubscribe();
        if (this._rippleRenderer !== null) {
          this._rippleRenderer._removeTriggerEvents();
        }
      }
      /** Whether the list item has icons or avatars. */
      _hasIconOrAvatar() {
        return !!(this._avatars.length || this._icons.length);
      }
      _initInteractiveListItem() {
        this._hostElement.classList.add("mat-mdc-list-item-interactive");
        this._rippleRenderer = new RippleRenderer(this, this._ngZone, this._hostElement, this._platform, inject(Injector));
        this._rippleRenderer.setupTriggerEvents(this._hostElement);
      }
      /**
       * Subscribes to changes in the projected title and lines. Triggers a
       * item lines update whenever a change occurs.
       */
      _monitorProjectedLinesAndTitle() {
        this._ngZone.runOutsideAngular(() => {
          this._subscriptions.add(merge(this._lines.changes, this._titles.changes).subscribe(() => this._updateItemLines(false)));
        });
      }
      /**
       * Updates the lines of the list item. Based on the projected user content and optional
       * explicit lines setting, the visual appearance of the list item is determined.
       *
       * This method should be invoked whenever the projected user content changes, or
       * when the explicit lines have been updated.
       *
       * @param recheckUnscopedContent Whether the projected unscoped content should be re-checked.
       *   The unscoped content is not re-checked for every update as it is a rather expensive check
       *   for content that is expected to not change very often.
       */
      _updateItemLines(recheckUnscopedContent) {
        if (!this._lines || !this._titles || !this._unscopedContent) {
          return;
        }
        if (recheckUnscopedContent) {
          this._checkDomForUnscopedTextContent();
        }
        if (typeof ngDevMode === "undefined" || ngDevMode) {
          sanityCheckListItemContent(this);
        }
        const numberOfLines = this._explicitLines ?? this._inferLinesFromContent();
        const unscopedContentEl = this._unscopedContent.nativeElement;
        this._hostElement.classList.toggle("mat-mdc-list-item-single-line", numberOfLines <= 1);
        this._hostElement.classList.toggle("mdc-list-item--with-one-line", numberOfLines <= 1);
        this._hostElement.classList.toggle("mdc-list-item--with-two-lines", numberOfLines === 2);
        this._hostElement.classList.toggle("mdc-list-item--with-three-lines", numberOfLines === 3);
        if (this._hasUnscopedTextContent) {
          const treatAsTitle = this._titles.length === 0 && numberOfLines === 1;
          unscopedContentEl.classList.toggle("mdc-list-item__primary-text", treatAsTitle);
          unscopedContentEl.classList.toggle("mdc-list-item__secondary-text", !treatAsTitle);
        } else {
          unscopedContentEl.classList.remove("mdc-list-item__primary-text");
          unscopedContentEl.classList.remove("mdc-list-item__secondary-text");
        }
      }
      /**
       * Infers the number of lines based on the projected user content. This is useful
       * if no explicit number of lines has been specified on the list item.
       *
       * The number of lines is inferred based on whether there is a title, the number of
       * additional lines (secondary/tertiary). An additional line is acquired if there is
       * unscoped text content.
       */
      _inferLinesFromContent() {
        let numOfLines = this._titles.length + this._lines.length;
        if (this._hasUnscopedTextContent) {
          numOfLines += 1;
        }
        return numOfLines;
      }
      /** Checks whether the list item has unscoped text content. */
      _checkDomForUnscopedTextContent() {
        this._hasUnscopedTextContent = Array.from(this._unscopedContent.nativeElement.childNodes).filter((node) => node.nodeType !== node.COMMENT_NODE).some((node) => !!(node.textContent && node.textContent.trim()));
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatListItemBase, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatListItemBase, isStandalone: true, inputs: { lines: "lines", disableRipple: "disableRipple", disabled: "disabled" }, host: { properties: { "class.mdc-list-item--disabled": "disabled", "attr.aria-disabled": "disabled", "attr.disabled": "(_isButtonElement && disabled) || null" } }, queries: [{ propertyName: "_avatars", predicate: MatListItemAvatar }, { propertyName: "_icons", predicate: MatListItemIcon }], ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatListItemBase, decorators: [{
      type: Directive,
      args: [{
        host: {
          "[class.mdc-list-item--disabled]": "disabled",
          "[attr.aria-disabled]": "disabled",
          "[attr.disabled]": "(_isButtonElement && disabled) || null"
        }
      }]
    }], ctorParameters: () => [], propDecorators: { _avatars: [{
      type: ContentChildren,
      args: [MatListItemAvatar, { descendants: false }]
    }], _icons: [{
      type: ContentChildren,
      args: [MatListItemIcon, { descendants: false }]
    }], lines: [{
      type: Input
    }], disableRipple: [{
      type: Input
    }], disabled: [{
      type: Input
    }] } });
    MatActionList = class _MatActionList extends MatListBase {
      // An navigation list is considered interactive, but does not extend the interactive list
      // base class. We do this because as per MDC, items of interactive lists are only reachable
      // through keyboard shortcuts. We want all items for the navigation list to be reachable
      // through tab key as we do not intend to provide any special accessibility treatment. The
      // accessibility treatment depends on how the end-user will interact with it.
      _isNonInteractive = false;
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatActionList, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0", type: _MatActionList, isStandalone: true, selector: "mat-action-list", host: { attributes: { "role": "group" }, classAttribute: "mat-mdc-action-list mat-mdc-list-base mdc-list" }, providers: [{ provide: MatListBase, useExisting: _MatActionList }], exportAs: ["matActionList"], usesInheritance: true, ngImport: core_exports, template: "<ng-content></ng-content>", isInline: true, styles: ['.mdc-list{margin:0;padding:8px 0;list-style-type:none}.mdc-list:focus{outline:none}.mdc-list-item{display:flex;position:relative;justify-content:flex-start;overflow:hidden;padding:0;align-items:stretch;cursor:pointer;padding-left:16px;padding-right:16px;background-color:var(--mat-list-list-item-container-color, transparent);border-radius:var(--mat-list-list-item-container-shape, var(--mat-sys-corner-none))}.mdc-list-item.mdc-list-item--selected{background-color:var(--mat-list-list-item-selected-container-color)}.mdc-list-item:focus{outline:0}.mdc-list-item.mdc-list-item--disabled{cursor:auto}.mdc-list-item.mdc-list-item--with-one-line{height:var(--mat-list-list-item-one-line-container-height, 48px)}.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-two-lines{height:var(--mat-list-list-item-two-line-container-height, 64px)}.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-three-lines{height:var(--mat-list-list-item-three-line-container-height, 88px)}.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--selected::before,.mdc-list-item.mdc-list-item--selected:focus::before,.mdc-list-item:not(.mdc-list-item--selected):focus::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;content:"";pointer-events:none}a.mdc-list-item{color:inherit;text-decoration:none}.mdc-list-item__start{fill:currentColor;flex-shrink:0;pointer-events:none}.mdc-list-item--with-leading-icon .mdc-list-item__start{color:var(--mat-list-list-item-leading-icon-color, var(--mat-sys-on-surface-variant));width:var(--mat-list-list-item-leading-icon-size, 24px);height:var(--mat-list-list-item-leading-icon-size, 24px);margin-left:16px;margin-right:32px}[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start{margin-left:32px;margin-right:16px}.mdc-list-item--with-leading-icon:hover .mdc-list-item__start{color:var(--mat-list-list-item-hover-leading-icon-color)}.mdc-list-item--with-leading-avatar .mdc-list-item__start{width:var(--mat-list-list-item-leading-avatar-size, 40px);height:var(--mat-list-list-item-leading-avatar-size, 40px);margin-left:16px;margin-right:16px;border-radius:50%}.mdc-list-item--with-leading-avatar .mdc-list-item__start,[dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start{margin-left:16px;margin-right:16px;border-radius:50%}.mdc-list-item__end{flex-shrink:0;pointer-events:none}.mdc-list-item--with-trailing-meta .mdc-list-item__end{font-family:var(--mat-list-list-item-trailing-supporting-text-font, var(--mat-sys-label-small-font));line-height:var(--mat-list-list-item-trailing-supporting-text-line-height, var(--mat-sys-label-small-line-height));font-size:var(--mat-list-list-item-trailing-supporting-text-size, var(--mat-sys-label-small-size));font-weight:var(--mat-list-list-item-trailing-supporting-text-weight, var(--mat-sys-label-small-weight));letter-spacing:var(--mat-list-list-item-trailing-supporting-text-tracking, var(--mat-sys-label-small-tracking))}.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:var(--mat-list-list-item-trailing-icon-color, var(--mat-sys-on-surface-variant));width:var(--mat-list-list-item-trailing-icon-size, 24px);height:var(--mat-list-list-item-trailing-icon-size, 24px)}.mdc-list-item--with-trailing-icon:hover .mdc-list-item__end{color:var(--mat-list-list-item-hover-trailing-icon-color)}.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end{color:var(--mat-list-list-item-trailing-supporting-text-color, var(--mat-sys-on-surface-variant))}.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:var(--mat-list-list-item-selected-trailing-icon-color, var(--mat-sys-primary))}.mdc-list-item__content{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;align-self:center;flex:1;pointer-events:none}.mdc-list-item--with-two-lines .mdc-list-item__content,.mdc-list-item--with-three-lines .mdc-list-item__content{align-self:stretch}.mdc-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;color:var(--mat-list-list-item-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-list-list-item-label-text-font, var(--mat-sys-body-large-font));line-height:var(--mat-list-list-item-label-text-line-height, var(--mat-sys-body-large-line-height));font-size:var(--mat-list-list-item-label-text-size, var(--mat-sys-body-large-size));font-weight:var(--mat-list-list-item-label-text-weight, var(--mat-sys-body-large-weight));letter-spacing:var(--mat-list-list-item-label-text-tracking, var(--mat-sys-body-large-tracking))}.mdc-list-item:hover .mdc-list-item__primary-text{color:var(--mat-list-list-item-hover-label-text-color, var(--mat-sys-on-surface))}.mdc-list-item:focus .mdc-list-item__primary-text{color:var(--mat-list-list-item-focus-label-text-color, var(--mat-sys-on-surface))}.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-three-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-three-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-three-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item__secondary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;color:var(--mat-list-list-item-supporting-text-color, var(--mat-sys-on-surface-variant));font-family:var(--mat-list-list-item-supporting-text-font, var(--mat-sys-body-medium-font));line-height:var(--mat-list-list-item-supporting-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-list-list-item-supporting-text-size, var(--mat-sys-body-medium-size));font-weight:var(--mat-list-list-item-supporting-text-weight, var(--mat-sys-body-medium-weight));letter-spacing:var(--mat-list-list-item-supporting-text-tracking, var(--mat-sys-body-medium-tracking))}.mdc-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-list-item--with-three-lines .mdc-list-item__secondary-text{white-space:normal;line-height:20px}.mdc-list-item--with-overline .mdc-list-item__secondary-text{white-space:nowrap;line-height:auto}.mdc-list-item--with-leading-radio.mdc-list-item,.mdc-list-item--with-leading-checkbox.mdc-list-item,.mdc-list-item--with-leading-icon.mdc-list-item,.mdc-list-item--with-leading-avatar.mdc-list-item{padding-left:0;padding-right:16px}[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item{padding-left:16px;padding-right:0}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-trailing-icon.mdc-list-item,[dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item{padding-left:0;padding-right:0}.mdc-list-item--with-trailing-icon .mdc-list-item__end{margin-left:16px;margin-right:16px}.mdc-list-item--with-trailing-meta.mdc-list-item{padding-left:16px;padding-right:0}[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item{padding-left:0;padding-right:16px}.mdc-list-item--with-trailing-meta .mdc-list-item__end{-webkit-user-select:none;user-select:none;margin-left:28px;margin-right:16px}[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end{margin-left:16px;margin-right:28px}.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end,.mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end{display:block;line-height:normal;align-self:flex-start;margin-top:0}.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before,.mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-list-item--with-leading-radio .mdc-list-item__start,.mdc-list-item--with-leading-checkbox .mdc-list-item__start{margin-left:8px;margin-right:24px}[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start{margin-left:24px;margin-right:8px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start{align-self:flex-start;margin-top:8px}.mdc-list-item--with-trailing-radio.mdc-list-item,.mdc-list-item--with-trailing-checkbox.mdc-list-item{padding-left:16px;padding-right:0}[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item{padding-left:0;padding-right:16px}.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon,.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar{padding-left:0}[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon,[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar{padding-right:0}.mdc-list-item--with-trailing-radio .mdc-list-item__end,.mdc-list-item--with-trailing-checkbox .mdc-list-item__end{margin-left:24px;margin-right:8px}[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end{margin-left:8px;margin-right:24px}.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end{align-self:flex-start;margin-top:8px}.mdc-list-group__subheader{margin:.75rem 16px}.mdc-list-item--disabled .mdc-list-item__start,.mdc-list-item--disabled .mdc-list-item__content,.mdc-list-item--disabled .mdc-list-item__end{opacity:1}.mdc-list-item--disabled .mdc-list-item__primary-text,.mdc-list-item--disabled .mdc-list-item__secondary-text{opacity:var(--mat-list-list-item-disabled-label-text-opacity, 0.3)}.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start{color:var(--mat-list-list-item-disabled-leading-icon-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-disabled-leading-icon-opacity, 0.38)}.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:var(--mat-list-list-item-disabled-trailing-icon-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-disabled-trailing-icon-opacity, 0.38)}.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing,[dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing{padding-left:0;padding-right:0}.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text{color:var(--mat-list-list-item-disabled-label-text-color, var(--mat-sys-on-surface))}.mdc-list-item:hover::before{background-color:var(--mat-list-list-item-hover-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mdc-list-item.mdc-list-item--disabled::before{background-color:var(--mat-list-list-item-disabled-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-disabled-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-list-item:focus::before{background-color:var(--mat-list-list-item-focus-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-list-item--disabled .mdc-radio,.mdc-list-item--disabled .mdc-checkbox{opacity:var(--mat-list-list-item-disabled-label-text-opacity, 0.3)}.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar{border-radius:var(--mat-list-list-item-leading-avatar-shape, var(--mat-sys-corner-full));background-color:var(--mat-list-list-item-leading-avatar-color, var(--mat-sys-primary-container))}.mat-mdc-list-item-icon{font-size:var(--mat-list-list-item-leading-icon-size, 24px)}@media(forced-colors: active){a.mdc-list-item--activated::after{content:"";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}a.mdc-list-item--activated [dir=rtl]::after{right:auto;left:16px}}.mat-mdc-list-base{display:block}.mat-mdc-list-base .mdc-list-item__start,.mat-mdc-list-base .mdc-list-item__end,.mat-mdc-list-base .mdc-list-item__content{pointer-events:auto}.mat-mdc-list-item,.mat-mdc-list-option{width:100%;box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),.mat-mdc-list-option:not(.mat-mdc-list-item-interactive){cursor:default}.mat-mdc-list-item .mat-divider-inset,.mat-mdc-list-option .mat-divider-inset{position:absolute;left:0;right:0;bottom:0}.mat-mdc-list-item .mat-mdc-list-item-avatar~.mat-divider-inset,.mat-mdc-list-option .mat-mdc-list-item-avatar~.mat-divider-inset{margin-left:72px}[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar~.mat-divider-inset,[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar~.mat-divider-inset{margin-right:72px}.mat-mdc-list-item-interactive::before{top:0;left:0;right:0;bottom:0;position:absolute;content:"";opacity:0;pointer-events:none;border-radius:inherit}.mat-mdc-list-item>.mat-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-mdc-list-item:focus>.mat-focus-indicator::before{content:""}.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text{white-space:nowrap;line-height:normal}.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}mat-action-list button{background:none;color:inherit;border:none;font:inherit;outline:inherit;-webkit-tap-highlight-color:rgba(0,0,0,0);text-align:start}mat-action-list button::-moz-focus-inner{border:0}.mdc-list-item--with-leading-icon .mdc-list-item__start{margin-inline-start:var(--mat-list-list-item-leading-icon-start-space, 16px);margin-inline-end:var(--mat-list-list-item-leading-icon-end-space, 16px)}.mat-mdc-nav-list .mat-mdc-list-item{border-radius:var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));--mat-focus-indicator-border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full))}.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated{background-color:var(--mat-list-active-indicator-color, var(--mat-sys-secondary-container))}\n'], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatActionList, decorators: [{
      type: Component,
      args: [{ selector: "mat-action-list", exportAs: "matActionList", template: "<ng-content></ng-content>", host: {
        "class": "mat-mdc-action-list mat-mdc-list-base mdc-list",
        "role": "group"
      }, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, providers: [{ provide: MatListBase, useExisting: MatActionList }], styles: ['.mdc-list{margin:0;padding:8px 0;list-style-type:none}.mdc-list:focus{outline:none}.mdc-list-item{display:flex;position:relative;justify-content:flex-start;overflow:hidden;padding:0;align-items:stretch;cursor:pointer;padding-left:16px;padding-right:16px;background-color:var(--mat-list-list-item-container-color, transparent);border-radius:var(--mat-list-list-item-container-shape, var(--mat-sys-corner-none))}.mdc-list-item.mdc-list-item--selected{background-color:var(--mat-list-list-item-selected-container-color)}.mdc-list-item:focus{outline:0}.mdc-list-item.mdc-list-item--disabled{cursor:auto}.mdc-list-item.mdc-list-item--with-one-line{height:var(--mat-list-list-item-one-line-container-height, 48px)}.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-two-lines{height:var(--mat-list-list-item-two-line-container-height, 64px)}.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-three-lines{height:var(--mat-list-list-item-three-line-container-height, 88px)}.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--selected::before,.mdc-list-item.mdc-list-item--selected:focus::before,.mdc-list-item:not(.mdc-list-item--selected):focus::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;content:"";pointer-events:none}a.mdc-list-item{color:inherit;text-decoration:none}.mdc-list-item__start{fill:currentColor;flex-shrink:0;pointer-events:none}.mdc-list-item--with-leading-icon .mdc-list-item__start{color:var(--mat-list-list-item-leading-icon-color, var(--mat-sys-on-surface-variant));width:var(--mat-list-list-item-leading-icon-size, 24px);height:var(--mat-list-list-item-leading-icon-size, 24px);margin-left:16px;margin-right:32px}[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start{margin-left:32px;margin-right:16px}.mdc-list-item--with-leading-icon:hover .mdc-list-item__start{color:var(--mat-list-list-item-hover-leading-icon-color)}.mdc-list-item--with-leading-avatar .mdc-list-item__start{width:var(--mat-list-list-item-leading-avatar-size, 40px);height:var(--mat-list-list-item-leading-avatar-size, 40px);margin-left:16px;margin-right:16px;border-radius:50%}.mdc-list-item--with-leading-avatar .mdc-list-item__start,[dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start{margin-left:16px;margin-right:16px;border-radius:50%}.mdc-list-item__end{flex-shrink:0;pointer-events:none}.mdc-list-item--with-trailing-meta .mdc-list-item__end{font-family:var(--mat-list-list-item-trailing-supporting-text-font, var(--mat-sys-label-small-font));line-height:var(--mat-list-list-item-trailing-supporting-text-line-height, var(--mat-sys-label-small-line-height));font-size:var(--mat-list-list-item-trailing-supporting-text-size, var(--mat-sys-label-small-size));font-weight:var(--mat-list-list-item-trailing-supporting-text-weight, var(--mat-sys-label-small-weight));letter-spacing:var(--mat-list-list-item-trailing-supporting-text-tracking, var(--mat-sys-label-small-tracking))}.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:var(--mat-list-list-item-trailing-icon-color, var(--mat-sys-on-surface-variant));width:var(--mat-list-list-item-trailing-icon-size, 24px);height:var(--mat-list-list-item-trailing-icon-size, 24px)}.mdc-list-item--with-trailing-icon:hover .mdc-list-item__end{color:var(--mat-list-list-item-hover-trailing-icon-color)}.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end{color:var(--mat-list-list-item-trailing-supporting-text-color, var(--mat-sys-on-surface-variant))}.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:var(--mat-list-list-item-selected-trailing-icon-color, var(--mat-sys-primary))}.mdc-list-item__content{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;align-self:center;flex:1;pointer-events:none}.mdc-list-item--with-two-lines .mdc-list-item__content,.mdc-list-item--with-three-lines .mdc-list-item__content{align-self:stretch}.mdc-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;color:var(--mat-list-list-item-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-list-list-item-label-text-font, var(--mat-sys-body-large-font));line-height:var(--mat-list-list-item-label-text-line-height, var(--mat-sys-body-large-line-height));font-size:var(--mat-list-list-item-label-text-size, var(--mat-sys-body-large-size));font-weight:var(--mat-list-list-item-label-text-weight, var(--mat-sys-body-large-weight));letter-spacing:var(--mat-list-list-item-label-text-tracking, var(--mat-sys-body-large-tracking))}.mdc-list-item:hover .mdc-list-item__primary-text{color:var(--mat-list-list-item-hover-label-text-color, var(--mat-sys-on-surface))}.mdc-list-item:focus .mdc-list-item__primary-text{color:var(--mat-list-list-item-focus-label-text-color, var(--mat-sys-on-surface))}.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-three-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-three-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-three-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item__secondary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;color:var(--mat-list-list-item-supporting-text-color, var(--mat-sys-on-surface-variant));font-family:var(--mat-list-list-item-supporting-text-font, var(--mat-sys-body-medium-font));line-height:var(--mat-list-list-item-supporting-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-list-list-item-supporting-text-size, var(--mat-sys-body-medium-size));font-weight:var(--mat-list-list-item-supporting-text-weight, var(--mat-sys-body-medium-weight));letter-spacing:var(--mat-list-list-item-supporting-text-tracking, var(--mat-sys-body-medium-tracking))}.mdc-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-list-item--with-three-lines .mdc-list-item__secondary-text{white-space:normal;line-height:20px}.mdc-list-item--with-overline .mdc-list-item__secondary-text{white-space:nowrap;line-height:auto}.mdc-list-item--with-leading-radio.mdc-list-item,.mdc-list-item--with-leading-checkbox.mdc-list-item,.mdc-list-item--with-leading-icon.mdc-list-item,.mdc-list-item--with-leading-avatar.mdc-list-item{padding-left:0;padding-right:16px}[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item{padding-left:16px;padding-right:0}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-trailing-icon.mdc-list-item,[dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item{padding-left:0;padding-right:0}.mdc-list-item--with-trailing-icon .mdc-list-item__end{margin-left:16px;margin-right:16px}.mdc-list-item--with-trailing-meta.mdc-list-item{padding-left:16px;padding-right:0}[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item{padding-left:0;padding-right:16px}.mdc-list-item--with-trailing-meta .mdc-list-item__end{-webkit-user-select:none;user-select:none;margin-left:28px;margin-right:16px}[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end{margin-left:16px;margin-right:28px}.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end,.mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end{display:block;line-height:normal;align-self:flex-start;margin-top:0}.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before,.mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-list-item--with-leading-radio .mdc-list-item__start,.mdc-list-item--with-leading-checkbox .mdc-list-item__start{margin-left:8px;margin-right:24px}[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start{margin-left:24px;margin-right:8px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start{align-self:flex-start;margin-top:8px}.mdc-list-item--with-trailing-radio.mdc-list-item,.mdc-list-item--with-trailing-checkbox.mdc-list-item{padding-left:16px;padding-right:0}[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item{padding-left:0;padding-right:16px}.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon,.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar{padding-left:0}[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon,[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar{padding-right:0}.mdc-list-item--with-trailing-radio .mdc-list-item__end,.mdc-list-item--with-trailing-checkbox .mdc-list-item__end{margin-left:24px;margin-right:8px}[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end{margin-left:8px;margin-right:24px}.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end{align-self:flex-start;margin-top:8px}.mdc-list-group__subheader{margin:.75rem 16px}.mdc-list-item--disabled .mdc-list-item__start,.mdc-list-item--disabled .mdc-list-item__content,.mdc-list-item--disabled .mdc-list-item__end{opacity:1}.mdc-list-item--disabled .mdc-list-item__primary-text,.mdc-list-item--disabled .mdc-list-item__secondary-text{opacity:var(--mat-list-list-item-disabled-label-text-opacity, 0.3)}.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start{color:var(--mat-list-list-item-disabled-leading-icon-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-disabled-leading-icon-opacity, 0.38)}.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:var(--mat-list-list-item-disabled-trailing-icon-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-disabled-trailing-icon-opacity, 0.38)}.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing,[dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing{padding-left:0;padding-right:0}.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text{color:var(--mat-list-list-item-disabled-label-text-color, var(--mat-sys-on-surface))}.mdc-list-item:hover::before{background-color:var(--mat-list-list-item-hover-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mdc-list-item.mdc-list-item--disabled::before{background-color:var(--mat-list-list-item-disabled-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-disabled-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-list-item:focus::before{background-color:var(--mat-list-list-item-focus-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-list-item--disabled .mdc-radio,.mdc-list-item--disabled .mdc-checkbox{opacity:var(--mat-list-list-item-disabled-label-text-opacity, 0.3)}.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar{border-radius:var(--mat-list-list-item-leading-avatar-shape, var(--mat-sys-corner-full));background-color:var(--mat-list-list-item-leading-avatar-color, var(--mat-sys-primary-container))}.mat-mdc-list-item-icon{font-size:var(--mat-list-list-item-leading-icon-size, 24px)}@media(forced-colors: active){a.mdc-list-item--activated::after{content:"";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}a.mdc-list-item--activated [dir=rtl]::after{right:auto;left:16px}}.mat-mdc-list-base{display:block}.mat-mdc-list-base .mdc-list-item__start,.mat-mdc-list-base .mdc-list-item__end,.mat-mdc-list-base .mdc-list-item__content{pointer-events:auto}.mat-mdc-list-item,.mat-mdc-list-option{width:100%;box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),.mat-mdc-list-option:not(.mat-mdc-list-item-interactive){cursor:default}.mat-mdc-list-item .mat-divider-inset,.mat-mdc-list-option .mat-divider-inset{position:absolute;left:0;right:0;bottom:0}.mat-mdc-list-item .mat-mdc-list-item-avatar~.mat-divider-inset,.mat-mdc-list-option .mat-mdc-list-item-avatar~.mat-divider-inset{margin-left:72px}[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar~.mat-divider-inset,[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar~.mat-divider-inset{margin-right:72px}.mat-mdc-list-item-interactive::before{top:0;left:0;right:0;bottom:0;position:absolute;content:"";opacity:0;pointer-events:none;border-radius:inherit}.mat-mdc-list-item>.mat-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-mdc-list-item:focus>.mat-focus-indicator::before{content:""}.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text{white-space:nowrap;line-height:normal}.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}mat-action-list button{background:none;color:inherit;border:none;font:inherit;outline:inherit;-webkit-tap-highlight-color:rgba(0,0,0,0);text-align:start}mat-action-list button::-moz-focus-inner{border:0}.mdc-list-item--with-leading-icon .mdc-list-item__start{margin-inline-start:var(--mat-list-list-item-leading-icon-start-space, 16px);margin-inline-end:var(--mat-list-list-item-leading-icon-end-space, 16px)}.mat-mdc-nav-list .mat-mdc-list-item{border-radius:var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));--mat-focus-indicator-border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full))}.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated{background-color:var(--mat-list-active-indicator-color, var(--mat-sys-secondary-container))}\n'] }]
    }] });
    MAT_LIST = new InjectionToken("MatList");
    MatList = class _MatList extends MatListBase {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatList, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0", type: _MatList, isStandalone: true, selector: "mat-list", host: { classAttribute: "mat-mdc-list mat-mdc-list-base mdc-list" }, providers: [{ provide: MatListBase, useExisting: _MatList }], exportAs: ["matList"], usesInheritance: true, ngImport: core_exports, template: "<ng-content></ng-content>", isInline: true, styles: ['.mdc-list{margin:0;padding:8px 0;list-style-type:none}.mdc-list:focus{outline:none}.mdc-list-item{display:flex;position:relative;justify-content:flex-start;overflow:hidden;padding:0;align-items:stretch;cursor:pointer;padding-left:16px;padding-right:16px;background-color:var(--mat-list-list-item-container-color, transparent);border-radius:var(--mat-list-list-item-container-shape, var(--mat-sys-corner-none))}.mdc-list-item.mdc-list-item--selected{background-color:var(--mat-list-list-item-selected-container-color)}.mdc-list-item:focus{outline:0}.mdc-list-item.mdc-list-item--disabled{cursor:auto}.mdc-list-item.mdc-list-item--with-one-line{height:var(--mat-list-list-item-one-line-container-height, 48px)}.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-two-lines{height:var(--mat-list-list-item-two-line-container-height, 64px)}.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-three-lines{height:var(--mat-list-list-item-three-line-container-height, 88px)}.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--selected::before,.mdc-list-item.mdc-list-item--selected:focus::before,.mdc-list-item:not(.mdc-list-item--selected):focus::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;content:"";pointer-events:none}a.mdc-list-item{color:inherit;text-decoration:none}.mdc-list-item__start{fill:currentColor;flex-shrink:0;pointer-events:none}.mdc-list-item--with-leading-icon .mdc-list-item__start{color:var(--mat-list-list-item-leading-icon-color, var(--mat-sys-on-surface-variant));width:var(--mat-list-list-item-leading-icon-size, 24px);height:var(--mat-list-list-item-leading-icon-size, 24px);margin-left:16px;margin-right:32px}[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start{margin-left:32px;margin-right:16px}.mdc-list-item--with-leading-icon:hover .mdc-list-item__start{color:var(--mat-list-list-item-hover-leading-icon-color)}.mdc-list-item--with-leading-avatar .mdc-list-item__start{width:var(--mat-list-list-item-leading-avatar-size, 40px);height:var(--mat-list-list-item-leading-avatar-size, 40px);margin-left:16px;margin-right:16px;border-radius:50%}.mdc-list-item--with-leading-avatar .mdc-list-item__start,[dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start{margin-left:16px;margin-right:16px;border-radius:50%}.mdc-list-item__end{flex-shrink:0;pointer-events:none}.mdc-list-item--with-trailing-meta .mdc-list-item__end{font-family:var(--mat-list-list-item-trailing-supporting-text-font, var(--mat-sys-label-small-font));line-height:var(--mat-list-list-item-trailing-supporting-text-line-height, var(--mat-sys-label-small-line-height));font-size:var(--mat-list-list-item-trailing-supporting-text-size, var(--mat-sys-label-small-size));font-weight:var(--mat-list-list-item-trailing-supporting-text-weight, var(--mat-sys-label-small-weight));letter-spacing:var(--mat-list-list-item-trailing-supporting-text-tracking, var(--mat-sys-label-small-tracking))}.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:var(--mat-list-list-item-trailing-icon-color, var(--mat-sys-on-surface-variant));width:var(--mat-list-list-item-trailing-icon-size, 24px);height:var(--mat-list-list-item-trailing-icon-size, 24px)}.mdc-list-item--with-trailing-icon:hover .mdc-list-item__end{color:var(--mat-list-list-item-hover-trailing-icon-color)}.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end{color:var(--mat-list-list-item-trailing-supporting-text-color, var(--mat-sys-on-surface-variant))}.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:var(--mat-list-list-item-selected-trailing-icon-color, var(--mat-sys-primary))}.mdc-list-item__content{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;align-self:center;flex:1;pointer-events:none}.mdc-list-item--with-two-lines .mdc-list-item__content,.mdc-list-item--with-three-lines .mdc-list-item__content{align-self:stretch}.mdc-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;color:var(--mat-list-list-item-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-list-list-item-label-text-font, var(--mat-sys-body-large-font));line-height:var(--mat-list-list-item-label-text-line-height, var(--mat-sys-body-large-line-height));font-size:var(--mat-list-list-item-label-text-size, var(--mat-sys-body-large-size));font-weight:var(--mat-list-list-item-label-text-weight, var(--mat-sys-body-large-weight));letter-spacing:var(--mat-list-list-item-label-text-tracking, var(--mat-sys-body-large-tracking))}.mdc-list-item:hover .mdc-list-item__primary-text{color:var(--mat-list-list-item-hover-label-text-color, var(--mat-sys-on-surface))}.mdc-list-item:focus .mdc-list-item__primary-text{color:var(--mat-list-list-item-focus-label-text-color, var(--mat-sys-on-surface))}.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-three-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-three-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-three-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item__secondary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;color:var(--mat-list-list-item-supporting-text-color, var(--mat-sys-on-surface-variant));font-family:var(--mat-list-list-item-supporting-text-font, var(--mat-sys-body-medium-font));line-height:var(--mat-list-list-item-supporting-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-list-list-item-supporting-text-size, var(--mat-sys-body-medium-size));font-weight:var(--mat-list-list-item-supporting-text-weight, var(--mat-sys-body-medium-weight));letter-spacing:var(--mat-list-list-item-supporting-text-tracking, var(--mat-sys-body-medium-tracking))}.mdc-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-list-item--with-three-lines .mdc-list-item__secondary-text{white-space:normal;line-height:20px}.mdc-list-item--with-overline .mdc-list-item__secondary-text{white-space:nowrap;line-height:auto}.mdc-list-item--with-leading-radio.mdc-list-item,.mdc-list-item--with-leading-checkbox.mdc-list-item,.mdc-list-item--with-leading-icon.mdc-list-item,.mdc-list-item--with-leading-avatar.mdc-list-item{padding-left:0;padding-right:16px}[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item{padding-left:16px;padding-right:0}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-trailing-icon.mdc-list-item,[dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item{padding-left:0;padding-right:0}.mdc-list-item--with-trailing-icon .mdc-list-item__end{margin-left:16px;margin-right:16px}.mdc-list-item--with-trailing-meta.mdc-list-item{padding-left:16px;padding-right:0}[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item{padding-left:0;padding-right:16px}.mdc-list-item--with-trailing-meta .mdc-list-item__end{-webkit-user-select:none;user-select:none;margin-left:28px;margin-right:16px}[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end{margin-left:16px;margin-right:28px}.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end,.mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end{display:block;line-height:normal;align-self:flex-start;margin-top:0}.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before,.mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-list-item--with-leading-radio .mdc-list-item__start,.mdc-list-item--with-leading-checkbox .mdc-list-item__start{margin-left:8px;margin-right:24px}[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start{margin-left:24px;margin-right:8px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start{align-self:flex-start;margin-top:8px}.mdc-list-item--with-trailing-radio.mdc-list-item,.mdc-list-item--with-trailing-checkbox.mdc-list-item{padding-left:16px;padding-right:0}[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item{padding-left:0;padding-right:16px}.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon,.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar{padding-left:0}[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon,[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar{padding-right:0}.mdc-list-item--with-trailing-radio .mdc-list-item__end,.mdc-list-item--with-trailing-checkbox .mdc-list-item__end{margin-left:24px;margin-right:8px}[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end{margin-left:8px;margin-right:24px}.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end{align-self:flex-start;margin-top:8px}.mdc-list-group__subheader{margin:.75rem 16px}.mdc-list-item--disabled .mdc-list-item__start,.mdc-list-item--disabled .mdc-list-item__content,.mdc-list-item--disabled .mdc-list-item__end{opacity:1}.mdc-list-item--disabled .mdc-list-item__primary-text,.mdc-list-item--disabled .mdc-list-item__secondary-text{opacity:var(--mat-list-list-item-disabled-label-text-opacity, 0.3)}.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start{color:var(--mat-list-list-item-disabled-leading-icon-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-disabled-leading-icon-opacity, 0.38)}.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:var(--mat-list-list-item-disabled-trailing-icon-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-disabled-trailing-icon-opacity, 0.38)}.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing,[dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing{padding-left:0;padding-right:0}.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text{color:var(--mat-list-list-item-disabled-label-text-color, var(--mat-sys-on-surface))}.mdc-list-item:hover::before{background-color:var(--mat-list-list-item-hover-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mdc-list-item.mdc-list-item--disabled::before{background-color:var(--mat-list-list-item-disabled-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-disabled-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-list-item:focus::before{background-color:var(--mat-list-list-item-focus-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-list-item--disabled .mdc-radio,.mdc-list-item--disabled .mdc-checkbox{opacity:var(--mat-list-list-item-disabled-label-text-opacity, 0.3)}.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar{border-radius:var(--mat-list-list-item-leading-avatar-shape, var(--mat-sys-corner-full));background-color:var(--mat-list-list-item-leading-avatar-color, var(--mat-sys-primary-container))}.mat-mdc-list-item-icon{font-size:var(--mat-list-list-item-leading-icon-size, 24px)}@media(forced-colors: active){a.mdc-list-item--activated::after{content:"";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}a.mdc-list-item--activated [dir=rtl]::after{right:auto;left:16px}}.mat-mdc-list-base{display:block}.mat-mdc-list-base .mdc-list-item__start,.mat-mdc-list-base .mdc-list-item__end,.mat-mdc-list-base .mdc-list-item__content{pointer-events:auto}.mat-mdc-list-item,.mat-mdc-list-option{width:100%;box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),.mat-mdc-list-option:not(.mat-mdc-list-item-interactive){cursor:default}.mat-mdc-list-item .mat-divider-inset,.mat-mdc-list-option .mat-divider-inset{position:absolute;left:0;right:0;bottom:0}.mat-mdc-list-item .mat-mdc-list-item-avatar~.mat-divider-inset,.mat-mdc-list-option .mat-mdc-list-item-avatar~.mat-divider-inset{margin-left:72px}[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar~.mat-divider-inset,[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar~.mat-divider-inset{margin-right:72px}.mat-mdc-list-item-interactive::before{top:0;left:0;right:0;bottom:0;position:absolute;content:"";opacity:0;pointer-events:none;border-radius:inherit}.mat-mdc-list-item>.mat-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-mdc-list-item:focus>.mat-focus-indicator::before{content:""}.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text{white-space:nowrap;line-height:normal}.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}mat-action-list button{background:none;color:inherit;border:none;font:inherit;outline:inherit;-webkit-tap-highlight-color:rgba(0,0,0,0);text-align:start}mat-action-list button::-moz-focus-inner{border:0}.mdc-list-item--with-leading-icon .mdc-list-item__start{margin-inline-start:var(--mat-list-list-item-leading-icon-start-space, 16px);margin-inline-end:var(--mat-list-list-item-leading-icon-end-space, 16px)}.mat-mdc-nav-list .mat-mdc-list-item{border-radius:var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));--mat-focus-indicator-border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full))}.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated{background-color:var(--mat-list-active-indicator-color, var(--mat-sys-secondary-container))}\n'], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatList, decorators: [{
      type: Component,
      args: [{ selector: "mat-list", exportAs: "matList", template: "<ng-content></ng-content>", host: {
        "class": "mat-mdc-list mat-mdc-list-base mdc-list"
      }, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, providers: [{ provide: MatListBase, useExisting: MatList }], styles: ['.mdc-list{margin:0;padding:8px 0;list-style-type:none}.mdc-list:focus{outline:none}.mdc-list-item{display:flex;position:relative;justify-content:flex-start;overflow:hidden;padding:0;align-items:stretch;cursor:pointer;padding-left:16px;padding-right:16px;background-color:var(--mat-list-list-item-container-color, transparent);border-radius:var(--mat-list-list-item-container-shape, var(--mat-sys-corner-none))}.mdc-list-item.mdc-list-item--selected{background-color:var(--mat-list-list-item-selected-container-color)}.mdc-list-item:focus{outline:0}.mdc-list-item.mdc-list-item--disabled{cursor:auto}.mdc-list-item.mdc-list-item--with-one-line{height:var(--mat-list-list-item-one-line-container-height, 48px)}.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-two-lines{height:var(--mat-list-list-item-two-line-container-height, 64px)}.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-three-lines{height:var(--mat-list-list-item-three-line-container-height, 88px)}.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--selected::before,.mdc-list-item.mdc-list-item--selected:focus::before,.mdc-list-item:not(.mdc-list-item--selected):focus::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;content:"";pointer-events:none}a.mdc-list-item{color:inherit;text-decoration:none}.mdc-list-item__start{fill:currentColor;flex-shrink:0;pointer-events:none}.mdc-list-item--with-leading-icon .mdc-list-item__start{color:var(--mat-list-list-item-leading-icon-color, var(--mat-sys-on-surface-variant));width:var(--mat-list-list-item-leading-icon-size, 24px);height:var(--mat-list-list-item-leading-icon-size, 24px);margin-left:16px;margin-right:32px}[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start{margin-left:32px;margin-right:16px}.mdc-list-item--with-leading-icon:hover .mdc-list-item__start{color:var(--mat-list-list-item-hover-leading-icon-color)}.mdc-list-item--with-leading-avatar .mdc-list-item__start{width:var(--mat-list-list-item-leading-avatar-size, 40px);height:var(--mat-list-list-item-leading-avatar-size, 40px);margin-left:16px;margin-right:16px;border-radius:50%}.mdc-list-item--with-leading-avatar .mdc-list-item__start,[dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start{margin-left:16px;margin-right:16px;border-radius:50%}.mdc-list-item__end{flex-shrink:0;pointer-events:none}.mdc-list-item--with-trailing-meta .mdc-list-item__end{font-family:var(--mat-list-list-item-trailing-supporting-text-font, var(--mat-sys-label-small-font));line-height:var(--mat-list-list-item-trailing-supporting-text-line-height, var(--mat-sys-label-small-line-height));font-size:var(--mat-list-list-item-trailing-supporting-text-size, var(--mat-sys-label-small-size));font-weight:var(--mat-list-list-item-trailing-supporting-text-weight, var(--mat-sys-label-small-weight));letter-spacing:var(--mat-list-list-item-trailing-supporting-text-tracking, var(--mat-sys-label-small-tracking))}.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:var(--mat-list-list-item-trailing-icon-color, var(--mat-sys-on-surface-variant));width:var(--mat-list-list-item-trailing-icon-size, 24px);height:var(--mat-list-list-item-trailing-icon-size, 24px)}.mdc-list-item--with-trailing-icon:hover .mdc-list-item__end{color:var(--mat-list-list-item-hover-trailing-icon-color)}.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end{color:var(--mat-list-list-item-trailing-supporting-text-color, var(--mat-sys-on-surface-variant))}.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:var(--mat-list-list-item-selected-trailing-icon-color, var(--mat-sys-primary))}.mdc-list-item__content{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;align-self:center;flex:1;pointer-events:none}.mdc-list-item--with-two-lines .mdc-list-item__content,.mdc-list-item--with-three-lines .mdc-list-item__content{align-self:stretch}.mdc-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;color:var(--mat-list-list-item-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-list-list-item-label-text-font, var(--mat-sys-body-large-font));line-height:var(--mat-list-list-item-label-text-line-height, var(--mat-sys-body-large-line-height));font-size:var(--mat-list-list-item-label-text-size, var(--mat-sys-body-large-size));font-weight:var(--mat-list-list-item-label-text-weight, var(--mat-sys-body-large-weight));letter-spacing:var(--mat-list-list-item-label-text-tracking, var(--mat-sys-body-large-tracking))}.mdc-list-item:hover .mdc-list-item__primary-text{color:var(--mat-list-list-item-hover-label-text-color, var(--mat-sys-on-surface))}.mdc-list-item:focus .mdc-list-item__primary-text{color:var(--mat-list-list-item-focus-label-text-color, var(--mat-sys-on-surface))}.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-three-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-three-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-three-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item__secondary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;color:var(--mat-list-list-item-supporting-text-color, var(--mat-sys-on-surface-variant));font-family:var(--mat-list-list-item-supporting-text-font, var(--mat-sys-body-medium-font));line-height:var(--mat-list-list-item-supporting-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-list-list-item-supporting-text-size, var(--mat-sys-body-medium-size));font-weight:var(--mat-list-list-item-supporting-text-weight, var(--mat-sys-body-medium-weight));letter-spacing:var(--mat-list-list-item-supporting-text-tracking, var(--mat-sys-body-medium-tracking))}.mdc-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-list-item--with-three-lines .mdc-list-item__secondary-text{white-space:normal;line-height:20px}.mdc-list-item--with-overline .mdc-list-item__secondary-text{white-space:nowrap;line-height:auto}.mdc-list-item--with-leading-radio.mdc-list-item,.mdc-list-item--with-leading-checkbox.mdc-list-item,.mdc-list-item--with-leading-icon.mdc-list-item,.mdc-list-item--with-leading-avatar.mdc-list-item{padding-left:0;padding-right:16px}[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item{padding-left:16px;padding-right:0}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-trailing-icon.mdc-list-item,[dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item{padding-left:0;padding-right:0}.mdc-list-item--with-trailing-icon .mdc-list-item__end{margin-left:16px;margin-right:16px}.mdc-list-item--with-trailing-meta.mdc-list-item{padding-left:16px;padding-right:0}[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item{padding-left:0;padding-right:16px}.mdc-list-item--with-trailing-meta .mdc-list-item__end{-webkit-user-select:none;user-select:none;margin-left:28px;margin-right:16px}[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end{margin-left:16px;margin-right:28px}.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end,.mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end{display:block;line-height:normal;align-self:flex-start;margin-top:0}.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before,.mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-list-item--with-leading-radio .mdc-list-item__start,.mdc-list-item--with-leading-checkbox .mdc-list-item__start{margin-left:8px;margin-right:24px}[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start{margin-left:24px;margin-right:8px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start{align-self:flex-start;margin-top:8px}.mdc-list-item--with-trailing-radio.mdc-list-item,.mdc-list-item--with-trailing-checkbox.mdc-list-item{padding-left:16px;padding-right:0}[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item{padding-left:0;padding-right:16px}.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon,.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar{padding-left:0}[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon,[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar{padding-right:0}.mdc-list-item--with-trailing-radio .mdc-list-item__end,.mdc-list-item--with-trailing-checkbox .mdc-list-item__end{margin-left:24px;margin-right:8px}[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end{margin-left:8px;margin-right:24px}.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end{align-self:flex-start;margin-top:8px}.mdc-list-group__subheader{margin:.75rem 16px}.mdc-list-item--disabled .mdc-list-item__start,.mdc-list-item--disabled .mdc-list-item__content,.mdc-list-item--disabled .mdc-list-item__end{opacity:1}.mdc-list-item--disabled .mdc-list-item__primary-text,.mdc-list-item--disabled .mdc-list-item__secondary-text{opacity:var(--mat-list-list-item-disabled-label-text-opacity, 0.3)}.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start{color:var(--mat-list-list-item-disabled-leading-icon-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-disabled-leading-icon-opacity, 0.38)}.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:var(--mat-list-list-item-disabled-trailing-icon-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-disabled-trailing-icon-opacity, 0.38)}.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing,[dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing{padding-left:0;padding-right:0}.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text{color:var(--mat-list-list-item-disabled-label-text-color, var(--mat-sys-on-surface))}.mdc-list-item:hover::before{background-color:var(--mat-list-list-item-hover-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mdc-list-item.mdc-list-item--disabled::before{background-color:var(--mat-list-list-item-disabled-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-disabled-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-list-item:focus::before{background-color:var(--mat-list-list-item-focus-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-list-item--disabled .mdc-radio,.mdc-list-item--disabled .mdc-checkbox{opacity:var(--mat-list-list-item-disabled-label-text-opacity, 0.3)}.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar{border-radius:var(--mat-list-list-item-leading-avatar-shape, var(--mat-sys-corner-full));background-color:var(--mat-list-list-item-leading-avatar-color, var(--mat-sys-primary-container))}.mat-mdc-list-item-icon{font-size:var(--mat-list-list-item-leading-icon-size, 24px)}@media(forced-colors: active){a.mdc-list-item--activated::after{content:"";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}a.mdc-list-item--activated [dir=rtl]::after{right:auto;left:16px}}.mat-mdc-list-base{display:block}.mat-mdc-list-base .mdc-list-item__start,.mat-mdc-list-base .mdc-list-item__end,.mat-mdc-list-base .mdc-list-item__content{pointer-events:auto}.mat-mdc-list-item,.mat-mdc-list-option{width:100%;box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),.mat-mdc-list-option:not(.mat-mdc-list-item-interactive){cursor:default}.mat-mdc-list-item .mat-divider-inset,.mat-mdc-list-option .mat-divider-inset{position:absolute;left:0;right:0;bottom:0}.mat-mdc-list-item .mat-mdc-list-item-avatar~.mat-divider-inset,.mat-mdc-list-option .mat-mdc-list-item-avatar~.mat-divider-inset{margin-left:72px}[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar~.mat-divider-inset,[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar~.mat-divider-inset{margin-right:72px}.mat-mdc-list-item-interactive::before{top:0;left:0;right:0;bottom:0;position:absolute;content:"";opacity:0;pointer-events:none;border-radius:inherit}.mat-mdc-list-item>.mat-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-mdc-list-item:focus>.mat-focus-indicator::before{content:""}.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text{white-space:nowrap;line-height:normal}.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}mat-action-list button{background:none;color:inherit;border:none;font:inherit;outline:inherit;-webkit-tap-highlight-color:rgba(0,0,0,0);text-align:start}mat-action-list button::-moz-focus-inner{border:0}.mdc-list-item--with-leading-icon .mdc-list-item__start{margin-inline-start:var(--mat-list-list-item-leading-icon-start-space, 16px);margin-inline-end:var(--mat-list-list-item-leading-icon-end-space, 16px)}.mat-mdc-nav-list .mat-mdc-list-item{border-radius:var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));--mat-focus-indicator-border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full))}.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated{background-color:var(--mat-list-active-indicator-color, var(--mat-sys-secondary-container))}\n'] }]
    }] });
    MatListItem = class _MatListItem extends MatListItemBase {
      _lines;
      _titles;
      _meta;
      _unscopedContent;
      _itemText;
      /** Indicates whether an item in a `<mat-nav-list>` is the currently active page. */
      get activated() {
        return this._activated;
      }
      set activated(activated) {
        this._activated = coerceBooleanProperty(activated);
      }
      _activated = false;
      /**
       * Determine the value of `aria-current`. Return 'page' if this item is an activated anchor tag.
       * Otherwise, return `null`. This method is safe to use with server-side rendering.
       */
      _getAriaCurrent() {
        return this._hostElement.nodeName === "A" && this._activated ? "page" : null;
      }
      _hasBothLeadingAndTrailing() {
        return this._meta.length !== 0 && (this._avatars.length !== 0 || this._icons.length !== 0);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatListItem, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0", type: _MatListItem, isStandalone: true, selector: "mat-list-item, a[mat-list-item], button[mat-list-item]", inputs: { activated: "activated" }, host: { properties: { "class.mdc-list-item--activated": "activated", "class.mdc-list-item--with-leading-avatar": "_avatars.length !== 0", "class.mdc-list-item--with-leading-icon": "_icons.length !== 0", "class.mdc-list-item--with-trailing-meta": "_meta.length !== 0", "class.mat-mdc-list-item-both-leading-and-trailing": "_hasBothLeadingAndTrailing()", "class._mat-animation-noopable": "_noopAnimations", "attr.aria-current": "_getAriaCurrent()" }, classAttribute: "mat-mdc-list-item mdc-list-item" }, queries: [{ propertyName: "_lines", predicate: MatListItemLine, descendants: true }, { propertyName: "_titles", predicate: MatListItemTitle, descendants: true }, { propertyName: "_meta", predicate: MatListItemMeta, descendants: true }], viewQueries: [{ propertyName: "_unscopedContent", first: true, predicate: ["unscopedContent"], descendants: true }, { propertyName: "_itemText", first: true, predicate: ["text"], descendants: true }], exportAs: ["matListItem"], usesInheritance: true, ngImport: core_exports, template: '<ng-content select="[matListItemAvatar],[matListItemIcon]"></ng-content>\n\n<span class="mdc-list-item__content">\n  <ng-content select="[matListItemTitle]"></ng-content>\n  <ng-content select="[matListItemLine]"></ng-content>\n  <span #unscopedContent class="mat-mdc-list-item-unscoped-content"\n        (cdkObserveContent)="_updateItemLines(true)">\n    <ng-content></ng-content>\n  </span>\n</span>\n\n<ng-content select="[matListItemMeta]"></ng-content>\n\n<ng-content select="mat-divider"></ng-content>\n\n<!--\n  Strong focus indicator element. MDC uses the `::before` pseudo element for the default\n  focus/hover/selected state, so we need a separate element.\n-->\n<div class="mat-focus-indicator"></div>\n', dependencies: [{ kind: "directive", type: CdkObserveContent, selector: "[cdkObserveContent]", inputs: ["cdkObserveContentDisabled", "debounce"], outputs: ["cdkObserveContent"], exportAs: ["cdkObserveContent"] }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatListItem, decorators: [{
      type: Component,
      args: [{ selector: "mat-list-item, a[mat-list-item], button[mat-list-item]", exportAs: "matListItem", host: {
        "class": "mat-mdc-list-item mdc-list-item",
        "[class.mdc-list-item--activated]": "activated",
        "[class.mdc-list-item--with-leading-avatar]": "_avatars.length !== 0",
        "[class.mdc-list-item--with-leading-icon]": "_icons.length !== 0",
        "[class.mdc-list-item--with-trailing-meta]": "_meta.length !== 0",
        // Utility class that makes it easier to target the case where there's both a leading
        // and a trailing icon. Avoids having to write out all the combinations.
        "[class.mat-mdc-list-item-both-leading-and-trailing]": "_hasBothLeadingAndTrailing()",
        "[class._mat-animation-noopable]": "_noopAnimations",
        "[attr.aria-current]": "_getAriaCurrent()"
      }, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, imports: [CdkObserveContent], template: '<ng-content select="[matListItemAvatar],[matListItemIcon]"></ng-content>\n\n<span class="mdc-list-item__content">\n  <ng-content select="[matListItemTitle]"></ng-content>\n  <ng-content select="[matListItemLine]"></ng-content>\n  <span #unscopedContent class="mat-mdc-list-item-unscoped-content"\n        (cdkObserveContent)="_updateItemLines(true)">\n    <ng-content></ng-content>\n  </span>\n</span>\n\n<ng-content select="[matListItemMeta]"></ng-content>\n\n<ng-content select="mat-divider"></ng-content>\n\n<!--\n  Strong focus indicator element. MDC uses the `::before` pseudo element for the default\n  focus/hover/selected state, so we need a separate element.\n-->\n<div class="mat-focus-indicator"></div>\n' }]
    }], propDecorators: { _lines: [{
      type: ContentChildren,
      args: [MatListItemLine, { descendants: true }]
    }], _titles: [{
      type: ContentChildren,
      args: [MatListItemTitle, { descendants: true }]
    }], _meta: [{
      type: ContentChildren,
      args: [MatListItemMeta, { descendants: true }]
    }], _unscopedContent: [{
      type: ViewChild,
      args: ["unscopedContent"]
    }], _itemText: [{
      type: ViewChild,
      args: ["text"]
    }], activated: [{
      type: Input
    }] } });
    SELECTION_LIST = new InjectionToken("SelectionList");
    MatListOption = class _MatListOption extends MatListItemBase {
      _selectionList = inject(SELECTION_LIST);
      _changeDetectorRef = inject(ChangeDetectorRef);
      _lines;
      _titles;
      _unscopedContent;
      /**
       * Emits when the selected state of the option has changed.
       * Use to facilitate two-data binding to the `selected` property.
       * @docs-private
       */
      selectedChange = new EventEmitter();
      /** Whether the label should appear before or after the checkbox/radio. Defaults to 'after' */
      togglePosition = "after";
      /**
       * Whether the label should appear before or after the checkbox/radio. Defaults to 'after'
       *
       * @deprecated Use `togglePosition` instead.
       * @breaking-change 17.0.0
       */
      get checkboxPosition() {
        return this.togglePosition;
      }
      set checkboxPosition(value) {
        this.togglePosition = value;
      }
      /**
       * Theme color of the list option. This sets the color of the checkbox/radio.
       * This API is supported in M2 themes only, it has no effect in M3 themes. For color customization
       * in M3, see https://material.angular.dev/components/list/styling.
       *
       * For information on applying color variants in M3, see
       * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
       */
      get color() {
        return this._color || this._selectionList.color;
      }
      set color(newValue) {
        this._color = newValue;
      }
      _color;
      /** Value of the option */
      get value() {
        return this._value;
      }
      set value(newValue) {
        if (this.selected && newValue !== this.value && this._inputsInitialized) {
          this.selected = false;
        }
        this._value = newValue;
      }
      _value;
      /** Whether the option is selected. */
      get selected() {
        return this._selectionList.selectedOptions.isSelected(this);
      }
      set selected(value) {
        const isSelected = coerceBooleanProperty(value);
        if (isSelected !== this._selected) {
          this._setSelected(isSelected);
          if (isSelected || this._selectionList.multiple) {
            this._selectionList._reportValueChange();
          }
        }
      }
      _selected = false;
      /**
       * This is set to true after the first OnChanges cycle so we don't
       * clear the value of `selected` in the first cycle.
       */
      _inputsInitialized = false;
      ngOnInit() {
        const list = this._selectionList;
        if (list._value && list._value.some((value) => list.compareWith(this._value, value))) {
          this._setSelected(true);
        }
        const wasSelected = this._selected;
        Promise.resolve().then(() => {
          if (this._selected || wasSelected) {
            this.selected = true;
            this._changeDetectorRef.markForCheck();
          }
        });
        this._inputsInitialized = true;
      }
      ngOnDestroy() {
        super.ngOnDestroy();
        if (this.selected) {
          Promise.resolve().then(() => {
            this.selected = false;
          });
        }
      }
      /** Toggles the selection state of the option. */
      toggle() {
        this.selected = !this.selected;
      }
      /** Allows for programmatic focusing of the option. */
      focus() {
        this._hostElement.focus();
      }
      /** Gets the text label of the list option. Used for the typeahead functionality in the list. */
      getLabel() {
        const titleElement = this._titles?.get(0)?._elementRef.nativeElement;
        const labelEl = titleElement || this._unscopedContent?.nativeElement;
        return labelEl?.textContent || "";
      }
      /** Whether a checkbox is shown at the given position. */
      _hasCheckboxAt(position) {
        return this._selectionList.multiple && this._getTogglePosition() === position;
      }
      /** Where a radio indicator is shown at the given position. */
      _hasRadioAt(position) {
        return !this._selectionList.multiple && this._getTogglePosition() === position && !this._selectionList.hideSingleSelectionIndicator;
      }
      /** Whether icons or avatars are shown at the given position. */
      _hasIconsOrAvatarsAt(position) {
        return this._hasProjected("icons", position) || this._hasProjected("avatars", position);
      }
      /** Gets whether the given type of element is projected at the specified position. */
      _hasProjected(type, position) {
        return this._getTogglePosition() !== position && (type === "avatars" ? this._avatars.length !== 0 : this._icons.length !== 0);
      }
      _handleBlur() {
        this._selectionList._onTouched();
      }
      /** Gets the current position of the checkbox/radio. */
      _getTogglePosition() {
        return this.togglePosition || "after";
      }
      /**
       * Sets the selected state of the option.
       * @returns Whether the value has changed.
       */
      _setSelected(selected) {
        if (selected === this._selected) {
          return false;
        }
        this._selected = selected;
        if (selected) {
          this._selectionList.selectedOptions.select(this);
        } else {
          this._selectionList.selectedOptions.deselect(this);
        }
        this.selectedChange.emit(selected);
        this._changeDetectorRef.markForCheck();
        return true;
      }
      /**
       * Notifies Angular that the option needs to be checked in the next change detection run.
       * Mainly used to trigger an update of the list option if the disabled state of the selection
       * list changed.
       */
      _markForCheck() {
        this._changeDetectorRef.markForCheck();
      }
      /** Toggles the option's value based on a user interaction. */
      _toggleOnInteraction() {
        if (!this.disabled) {
          if (this._selectionList.multiple) {
            this.selected = !this.selected;
            this._selectionList._emitChangeEvent([this]);
          } else if (!this.selected) {
            this.selected = true;
            this._selectionList._emitChangeEvent([this]);
          }
        }
      }
      /** Sets the tabindex of the list option. */
      _setTabindex(value) {
        this._hostElement.setAttribute("tabindex", value + "");
      }
      _hasBothLeadingAndTrailing() {
        const hasLeading = this._hasProjected("avatars", "before") || this._hasProjected("icons", "before") || this._hasCheckboxAt("before") || this._hasRadioAt("before");
        const hasTrailing = this._hasProjected("icons", "after") || this._hasProjected("avatars", "after") || this._hasCheckboxAt("after") || this._hasRadioAt("after");
        return hasLeading && hasTrailing;
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatListOption, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "17.0.0", version: "20.0.0", type: _MatListOption, isStandalone: true, selector: "mat-list-option", inputs: { togglePosition: "togglePosition", checkboxPosition: "checkboxPosition", color: "color", value: "value", selected: "selected" }, outputs: { selectedChange: "selectedChange" }, host: { attributes: { "role": "option" }, listeners: { "blur": "_handleBlur()", "click": "_toggleOnInteraction()" }, properties: { "class.mdc-list-item--selected": "selected && !_selectionList.multiple && _selectionList.hideSingleSelectionIndicator", "class.mdc-list-item--with-leading-avatar": '_hasProjected("avatars", "before")', "class.mdc-list-item--with-leading-icon": '_hasProjected("icons", "before")', "class.mdc-list-item--with-trailing-icon": '_hasProjected("icons", "after")', "class.mat-mdc-list-option-with-trailing-avatar": '_hasProjected("avatars", "after")', "class.mdc-list-item--with-leading-checkbox": '_hasCheckboxAt("before")', "class.mdc-list-item--with-trailing-checkbox": '_hasCheckboxAt("after")', "class.mdc-list-item--with-leading-radio": '_hasRadioAt("before")', "class.mdc-list-item--with-trailing-radio": '_hasRadioAt("after")', "class.mat-mdc-list-item-both-leading-and-trailing": "_hasBothLeadingAndTrailing()", "class.mat-accent": 'color !== "primary" && color !== "warn"', "class.mat-warn": 'color === "warn"', "class._mat-animation-noopable": "_noopAnimations", "attr.aria-selected": "selected" }, classAttribute: "mat-mdc-list-item mat-mdc-list-option mdc-list-item" }, providers: [
        { provide: MatListItemBase, useExisting: _MatListOption },
        { provide: LIST_OPTION, useExisting: _MatListOption }
      ], queries: [{ propertyName: "_lines", predicate: MatListItemLine, descendants: true }, { propertyName: "_titles", predicate: MatListItemTitle, descendants: true }], viewQueries: [{ propertyName: "_unscopedContent", first: true, predicate: ["unscopedContent"], descendants: true }], exportAs: ["matListOption"], usesInheritance: true, ngImport: core_exports, template: `<!--
  Save icons and the pseudo checkbox/radio so that they can be re-used in the template without
  duplication. Also content can only be injected once so we need to extract icons/avatars
  into a template since we use it in multiple places.
-->
<ng-template #icons>
  <ng-content select="[matListItemAvatar],[matListItemIcon]">
  </ng-content>
</ng-template>

<ng-template #checkbox>
  <div class="mdc-checkbox" [class.mdc-checkbox--disabled]="disabled">
    <input type="checkbox" class="mdc-checkbox__native-control"
           [checked]="selected" [disabled]="disabled"/>
    <div class="mdc-checkbox__background">
      <svg class="mdc-checkbox__checkmark"
           viewBox="0 0 24 24"
           aria-hidden="true">
        <path class="mdc-checkbox__checkmark-path"
              fill="none"
              d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
      </svg>
      <div class="mdc-checkbox__mixedmark"></div>
    </div>
  </div>
</ng-template>

<ng-template #radio>
  <div class="mdc-radio" [class.mdc-radio--disabled]="disabled">
    <input type="radio" class="mdc-radio__native-control"
           [checked]="selected" [disabled]="disabled"/>
    <div class="mdc-radio__background">
      <div class="mdc-radio__outer-circle"></div>
      <div class="mdc-radio__inner-circle"></div>
    </div>
  </div>
</ng-template>

@if (_hasCheckboxAt('before')) {
  <!-- Container for the checkbox at start. -->
  <span class="mdc-list-item__start mat-mdc-list-option-checkbox-before">
    <ng-template [ngTemplateOutlet]="checkbox"></ng-template>
  </span>
} @else if (_hasRadioAt('before')) {
  <!-- Container for the radio at the start. -->
  <span class="mdc-list-item__start mat-mdc-list-option-radio-before">
    <ng-template [ngTemplateOutlet]="radio"></ng-template>
  </span>
}
<!-- Conditionally renders icons/avatars before the list item text. -->
@if (_hasIconsOrAvatarsAt('before')) {
  <ng-template [ngTemplateOutlet]="icons"></ng-template>
}

<!-- Text -->
<span class="mdc-list-item__content">
  <ng-content select="[matListItemTitle]"></ng-content>
  <ng-content select="[matListItemLine]"></ng-content>
  <span #unscopedContent class="mat-mdc-list-item-unscoped-content"
        (cdkObserveContent)="_updateItemLines(true)">
    <ng-content></ng-content>
  </span>
</span>

@if (_hasCheckboxAt('after')) {
  <!-- Container for the checkbox at the end. -->
  <span class="mdc-list-item__end">
    <ng-template [ngTemplateOutlet]="checkbox"></ng-template>
  </span>
} @else if (_hasRadioAt('after')) {
  <!-- Container for the radio at the end. -->
  <span class="mdc-list-item__end">
    <ng-template [ngTemplateOutlet]="radio"></ng-template>
  </span>
}

<!-- Conditionally renders icons/avatars after the list item text. -->
@if (_hasIconsOrAvatarsAt('after')) {
  <ng-template [ngTemplateOutlet]="icons"></ng-template>
}

<!-- Divider -->
<ng-content select="mat-divider"></ng-content>

<!--
  Strong focus indicator element. MDC uses the \`::before\` pseudo element for the default
  focus/hover/selected state, so we need a separate element.
-->
<div class="mat-focus-indicator"></div>
`, styles: ['.mat-mdc-list-option-with-trailing-avatar.mdc-list-item,[dir=rtl] .mat-mdc-list-option-with-trailing-avatar.mdc-list-item{padding-left:0;padding-right:0}.mat-mdc-list-option-with-trailing-avatar .mdc-list-item__end{margin-left:16px;margin-right:16px;width:40px;height:40px}.mat-mdc-list-option-with-trailing-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mat-mdc-list-option-with-trailing-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mat-mdc-list-option-with-trailing-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mat-mdc-list-option-with-trailing-avatar .mdc-list-item__end{border-radius:50%}.mat-mdc-list-option .mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom;padding:calc((var(--mat-checkbox-state-layer-size, 40px) - 18px)/2);margin:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2)}.mat-mdc-list-option .mdc-checkbox .mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit;z-index:1;width:var(--mat-checkbox-state-layer-size, 40px);height:var(--mat-checkbox-state-layer-size, 40px);top:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2);right:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2);left:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2)}.mat-mdc-list-option .mdc-checkbox--disabled{cursor:default;pointer-events:none}@media(forced-colors: active){.mat-mdc-list-option .mdc-checkbox--disabled{opacity:.5}}.mat-mdc-list-option .mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:rgba(0,0,0,0);pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);-webkit-print-color-adjust:exact;color-adjust:exact;border-color:var(--mat-checkbox-unselected-icon-color, var(--mat-sys-on-surface-variant));top:calc((var(--mat-checkbox-state-layer-size, 40px) - 18px)/2);left:calc((var(--mat-checkbox-state-layer-size, 40px) - 18px)/2)}.mat-mdc-list-option .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background{border-color:var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));background-color:var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary))}.mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__background{border-color:var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-list-option .mdc-checkbox__native-control:disabled:checked~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox__native-control:disabled:indeterminate~.mdc-checkbox__background{background-color:var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));border-color:rgba(0,0,0,0)}.mat-mdc-list-option .mdc-checkbox:hover>.mdc-checkbox__native-control:not(:checked)~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox:hover>.mdc-checkbox__native-control:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mat-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));background-color:rgba(0,0,0,0)}.mat-mdc-list-option .mdc-checkbox:hover>.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox:hover>.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{border-color:var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));background-color:var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary))}.mat-mdc-list-option .mdc-checkbox__native-control:focus:focus:not(:checked)~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox__native-control:focus:focus:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mat-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface))}.mat-mdc-list-option .mdc-checkbox__native-control:focus:focus:checked~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox__native-control:focus:focus:indeterminate~.mdc-checkbox__background{border-color:var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));background-color:var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary))}.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover>.mdc-checkbox__native-control~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background{border-color:var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{background-color:var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));border-color:rgba(0,0,0,0)}.mat-mdc-list-option .mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);color:var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary))}@media(forced-colors: active){.mat-mdc-list-option .mdc-checkbox__checkmark{color:CanvasText}}.mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__checkmark,.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface))}@media(forced-colors: active){.mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__checkmark,.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:CanvasText}}.mat-mdc-list-option .mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mat-mdc-list-option .mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1);border-color:var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary))}@media(forced-colors: active){.mat-mdc-list-option .mdc-checkbox__mixedmark{margin:0 1px}}.mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__mixedmark,.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark{border-color:var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface))}.mat-mdc-list-option .mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mat-mdc-list-option .mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;transition:none}.mat-mdc-list-option .mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;transition:none}.mat-mdc-list-option .mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;transition:none}.mat-mdc-list-option .mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear;transition:none}.mat-mdc-list-option .mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;transition:none}.mat-mdc-list-option .mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear;transition:none}.mat-mdc-list-option .mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;transition:none}.mat-mdc-list-option .mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;transition:none}.mat-mdc-list-option .mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{transition:border-color 90ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-list-option .mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path,.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mat-mdc-list-option .mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__checkmark{transition:opacity 180ms cubic-bezier(0, 0, 0.2, 1),transform 180ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mat-mdc-list-option .mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mat-mdc-list-option .mdc-radio{display:inline-block;position:relative;flex:0 0 auto;box-sizing:content-box;width:20px;height:20px;cursor:pointer;will-change:opacity,transform,border-color,color;padding:calc((var(--mat-radio-state-layer-size, 40px) - 20px)/2)}.mat-mdc-list-option .mdc-radio__background{display:inline-block;position:relative;box-sizing:border-box;width:20px;height:20px}.mat-mdc-list-option .mdc-radio__background::before{position:absolute;transform:scale(0, 0);border-radius:50%;opacity:0;pointer-events:none;content:"";transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1);width:var(--mat-radio-state-layer-size, 40px);height:var(--mat-radio-state-layer-size, 40px);top:calc(-1*(var(--mat-radio-state-layer-size, 40px) - 20px)/2);left:calc(-1*(var(--mat-radio-state-layer-size, 40px) - 20px)/2)}.mat-mdc-list-option .mdc-radio__outer-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;border-width:2px;border-style:solid;border-radius:50%;transition:border-color 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-list-option .mdc-radio__inner-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;transform:scale(0, 0);border-width:10px;border-style:solid;border-radius:50%;transition:transform 90ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-list-option .mdc-radio__native-control{position:absolute;margin:0;padding:0;opacity:0;top:0;right:0;left:0;cursor:inherit;z-index:1;width:var(--mat-radio-state-layer-size, 40px);height:var(--mat-radio-state-layer-size, 40px)}.mat-mdc-list-option .mdc-radio__native-control:checked+.mdc-radio__background,.mat-mdc-list-option .mdc-radio__native-control:disabled+.mdc-radio__background{transition:opacity 90ms cubic-bezier(0, 0, 0.2, 1),transform 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-list-option .mdc-radio__native-control:checked+.mdc-radio__background>.mdc-radio__outer-circle,.mat-mdc-list-option .mdc-radio__native-control:disabled+.mdc-radio__background>.mdc-radio__outer-circle{transition:border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-list-option .mdc-radio__native-control:checked+.mdc-radio__background>.mdc-radio__inner-circle,.mat-mdc-list-option .mdc-radio__native-control:disabled+.mdc-radio__background>.mdc-radio__inner-circle{transition:transform 90ms cubic-bezier(0, 0, 0.2, 1),border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-list-option .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));opacity:var(--mat-radio-disabled-unselected-icon-opacity, 0.38)}.mat-mdc-list-option .mdc-radio__native-control:disabled+.mdc-radio__background{cursor:default}.mat-mdc-list-option .mdc-radio__native-control:disabled+.mdc-radio__background>.mdc-radio__inner-circle,.mat-mdc-list-option .mdc-radio__native-control:disabled+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));opacity:var(--mat-radio-disabled-selected-icon-opacity, 0.38)}.mat-mdc-list-option .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-unselected-icon-color, var(--mat-sys-on-surface-variant))}.mat-mdc-list-option .mdc-radio__native-control:enabled:checked+.mdc-radio__background>.mdc-radio__outer-circle,.mat-mdc-list-option .mdc-radio__native-control:enabled:checked+.mdc-radio__background>.mdc-radio__inner-circle{border-color:var(--mat-radio-selected-icon-color, var(--mat-sys-primary))}.mat-mdc-list-option .mdc-radio__native-control:checked+.mdc-radio__background>.mdc-radio__inner-circle{transform:scale(0.5);transition:transform 90ms cubic-bezier(0, 0, 0.2, 1),border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-list-option._mat-animation-noopable .mdc-radio__background::before,.mat-mdc-list-option._mat-animation-noopable .mdc-radio__outer-circle,.mat-mdc-list-option._mat-animation-noopable .mdc-radio__inner-circle{transition:none !important}.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__start>.mdc-checkbox>.mat-mdc-checkbox-touch-target,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__start>.mdc-checkbox>.mdc-checkbox__native-control,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__start>.mdc-checkbox>.mdc-checkbox__ripple,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__start>.mdc-checkbox>.mat-mdc-checkbox-ripple::before,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__start>.mdc-checkbox>.mdc-checkbox__background,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__start>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__checkmark,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__start>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__start>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__mixedmark,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__end>.mdc-checkbox>.mat-mdc-checkbox-touch-target,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__end>.mdc-checkbox>.mdc-checkbox__native-control,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__end>.mdc-checkbox>.mdc-checkbox__ripple,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__end>.mdc-checkbox>.mat-mdc-checkbox-ripple::before,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__end>.mdc-checkbox>.mdc-checkbox__background,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__end>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__checkmark,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__end>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__end>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__mixedmark{transition:none !important;animation:none !important}.mat-mdc-list-option .mdc-checkbox__native-control,.mat-mdc-list-option .mdc-radio__native-control{display:none}@media(forced-colors: active){.mat-mdc-list-option.mdc-list-item--selected::after{content:"";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}.mat-mdc-list-option.mdc-list-item--selected [dir=rtl]::after{right:auto;left:16px}}\n'], dependencies: [{ kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: CdkObserveContent, selector: "[cdkObserveContent]", inputs: ["cdkObserveContentDisabled", "debounce"], outputs: ["cdkObserveContent"], exportAs: ["cdkObserveContent"] }], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatListOption, decorators: [{
      type: Component,
      args: [{ selector: "mat-list-option", exportAs: "matListOption", host: {
        "class": "mat-mdc-list-item mat-mdc-list-option mdc-list-item",
        "role": "option",
        // As per MDC, only list items without checkbox or radio indicator should receive the
        // `--selected` class.
        "[class.mdc-list-item--selected]": "selected && !_selectionList.multiple && _selectionList.hideSingleSelectionIndicator",
        // Based on the checkbox/radio position and whether there are icons or avatars, we apply MDC's
        // list-item `--leading` and `--trailing` classes.
        "[class.mdc-list-item--with-leading-avatar]": '_hasProjected("avatars", "before")',
        "[class.mdc-list-item--with-leading-icon]": '_hasProjected("icons", "before")',
        "[class.mdc-list-item--with-trailing-icon]": '_hasProjected("icons", "after")',
        "[class.mat-mdc-list-option-with-trailing-avatar]": '_hasProjected("avatars", "after")',
        // Based on the checkbox/radio position, we apply the `--leading` or `--trailing` MDC classes
        // which ensure that the checkbox/radio is positioned correctly within the list item.
        "[class.mdc-list-item--with-leading-checkbox]": '_hasCheckboxAt("before")',
        "[class.mdc-list-item--with-trailing-checkbox]": '_hasCheckboxAt("after")',
        "[class.mdc-list-item--with-leading-radio]": '_hasRadioAt("before")',
        "[class.mdc-list-item--with-trailing-radio]": '_hasRadioAt("after")',
        // Utility class that makes it easier to target the case where there's both a leading
        // and a trailing icon. Avoids having to write out all the combinations.
        "[class.mat-mdc-list-item-both-leading-and-trailing]": "_hasBothLeadingAndTrailing()",
        "[class.mat-accent]": 'color !== "primary" && color !== "warn"',
        "[class.mat-warn]": 'color === "warn"',
        "[class._mat-animation-noopable]": "_noopAnimations",
        "[attr.aria-selected]": "selected",
        "(blur)": "_handleBlur()",
        "(click)": "_toggleOnInteraction()"
      }, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, providers: [
        { provide: MatListItemBase, useExisting: MatListOption },
        { provide: LIST_OPTION, useExisting: MatListOption }
      ], imports: [NgTemplateOutlet, CdkObserveContent], template: `<!--
  Save icons and the pseudo checkbox/radio so that they can be re-used in the template without
  duplication. Also content can only be injected once so we need to extract icons/avatars
  into a template since we use it in multiple places.
-->
<ng-template #icons>
  <ng-content select="[matListItemAvatar],[matListItemIcon]">
  </ng-content>
</ng-template>

<ng-template #checkbox>
  <div class="mdc-checkbox" [class.mdc-checkbox--disabled]="disabled">
    <input type="checkbox" class="mdc-checkbox__native-control"
           [checked]="selected" [disabled]="disabled"/>
    <div class="mdc-checkbox__background">
      <svg class="mdc-checkbox__checkmark"
           viewBox="0 0 24 24"
           aria-hidden="true">
        <path class="mdc-checkbox__checkmark-path"
              fill="none"
              d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
      </svg>
      <div class="mdc-checkbox__mixedmark"></div>
    </div>
  </div>
</ng-template>

<ng-template #radio>
  <div class="mdc-radio" [class.mdc-radio--disabled]="disabled">
    <input type="radio" class="mdc-radio__native-control"
           [checked]="selected" [disabled]="disabled"/>
    <div class="mdc-radio__background">
      <div class="mdc-radio__outer-circle"></div>
      <div class="mdc-radio__inner-circle"></div>
    </div>
  </div>
</ng-template>

@if (_hasCheckboxAt('before')) {
  <!-- Container for the checkbox at start. -->
  <span class="mdc-list-item__start mat-mdc-list-option-checkbox-before">
    <ng-template [ngTemplateOutlet]="checkbox"></ng-template>
  </span>
} @else if (_hasRadioAt('before')) {
  <!-- Container for the radio at the start. -->
  <span class="mdc-list-item__start mat-mdc-list-option-radio-before">
    <ng-template [ngTemplateOutlet]="radio"></ng-template>
  </span>
}
<!-- Conditionally renders icons/avatars before the list item text. -->
@if (_hasIconsOrAvatarsAt('before')) {
  <ng-template [ngTemplateOutlet]="icons"></ng-template>
}

<!-- Text -->
<span class="mdc-list-item__content">
  <ng-content select="[matListItemTitle]"></ng-content>
  <ng-content select="[matListItemLine]"></ng-content>
  <span #unscopedContent class="mat-mdc-list-item-unscoped-content"
        (cdkObserveContent)="_updateItemLines(true)">
    <ng-content></ng-content>
  </span>
</span>

@if (_hasCheckboxAt('after')) {
  <!-- Container for the checkbox at the end. -->
  <span class="mdc-list-item__end">
    <ng-template [ngTemplateOutlet]="checkbox"></ng-template>
  </span>
} @else if (_hasRadioAt('after')) {
  <!-- Container for the radio at the end. -->
  <span class="mdc-list-item__end">
    <ng-template [ngTemplateOutlet]="radio"></ng-template>
  </span>
}

<!-- Conditionally renders icons/avatars after the list item text. -->
@if (_hasIconsOrAvatarsAt('after')) {
  <ng-template [ngTemplateOutlet]="icons"></ng-template>
}

<!-- Divider -->
<ng-content select="mat-divider"></ng-content>

<!--
  Strong focus indicator element. MDC uses the \`::before\` pseudo element for the default
  focus/hover/selected state, so we need a separate element.
-->
<div class="mat-focus-indicator"></div>
`, styles: ['.mat-mdc-list-option-with-trailing-avatar.mdc-list-item,[dir=rtl] .mat-mdc-list-option-with-trailing-avatar.mdc-list-item{padding-left:0;padding-right:0}.mat-mdc-list-option-with-trailing-avatar .mdc-list-item__end{margin-left:16px;margin-right:16px;width:40px;height:40px}.mat-mdc-list-option-with-trailing-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mat-mdc-list-option-with-trailing-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mat-mdc-list-option-with-trailing-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mat-mdc-list-option-with-trailing-avatar .mdc-list-item__end{border-radius:50%}.mat-mdc-list-option .mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom;padding:calc((var(--mat-checkbox-state-layer-size, 40px) - 18px)/2);margin:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2)}.mat-mdc-list-option .mdc-checkbox .mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit;z-index:1;width:var(--mat-checkbox-state-layer-size, 40px);height:var(--mat-checkbox-state-layer-size, 40px);top:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2);right:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2);left:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2)}.mat-mdc-list-option .mdc-checkbox--disabled{cursor:default;pointer-events:none}@media(forced-colors: active){.mat-mdc-list-option .mdc-checkbox--disabled{opacity:.5}}.mat-mdc-list-option .mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:rgba(0,0,0,0);pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);-webkit-print-color-adjust:exact;color-adjust:exact;border-color:var(--mat-checkbox-unselected-icon-color, var(--mat-sys-on-surface-variant));top:calc((var(--mat-checkbox-state-layer-size, 40px) - 18px)/2);left:calc((var(--mat-checkbox-state-layer-size, 40px) - 18px)/2)}.mat-mdc-list-option .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background{border-color:var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));background-color:var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary))}.mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__background{border-color:var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-list-option .mdc-checkbox__native-control:disabled:checked~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox__native-control:disabled:indeterminate~.mdc-checkbox__background{background-color:var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));border-color:rgba(0,0,0,0)}.mat-mdc-list-option .mdc-checkbox:hover>.mdc-checkbox__native-control:not(:checked)~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox:hover>.mdc-checkbox__native-control:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mat-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));background-color:rgba(0,0,0,0)}.mat-mdc-list-option .mdc-checkbox:hover>.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox:hover>.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{border-color:var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));background-color:var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary))}.mat-mdc-list-option .mdc-checkbox__native-control:focus:focus:not(:checked)~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox__native-control:focus:focus:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mat-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface))}.mat-mdc-list-option .mdc-checkbox__native-control:focus:focus:checked~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox__native-control:focus:focus:indeterminate~.mdc-checkbox__background{border-color:var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));background-color:var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary))}.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover>.mdc-checkbox__native-control~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background{border-color:var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{background-color:var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));border-color:rgba(0,0,0,0)}.mat-mdc-list-option .mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);color:var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary))}@media(forced-colors: active){.mat-mdc-list-option .mdc-checkbox__checkmark{color:CanvasText}}.mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__checkmark,.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface))}@media(forced-colors: active){.mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__checkmark,.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:CanvasText}}.mat-mdc-list-option .mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mat-mdc-list-option .mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1);border-color:var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary))}@media(forced-colors: active){.mat-mdc-list-option .mdc-checkbox__mixedmark{margin:0 1px}}.mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__mixedmark,.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark{border-color:var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface))}.mat-mdc-list-option .mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mat-mdc-list-option .mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;transition:none}.mat-mdc-list-option .mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;transition:none}.mat-mdc-list-option .mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;transition:none}.mat-mdc-list-option .mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear;transition:none}.mat-mdc-list-option .mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;transition:none}.mat-mdc-list-option .mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear;transition:none}.mat-mdc-list-option .mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;transition:none}.mat-mdc-list-option .mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;transition:none}.mat-mdc-list-option .mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{transition:border-color 90ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-list-option .mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path,.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mat-mdc-list-option .mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__checkmark{transition:opacity 180ms cubic-bezier(0, 0, 0.2, 1),transform 180ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mat-mdc-list-option .mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mat-mdc-list-option .mdc-radio{display:inline-block;position:relative;flex:0 0 auto;box-sizing:content-box;width:20px;height:20px;cursor:pointer;will-change:opacity,transform,border-color,color;padding:calc((var(--mat-radio-state-layer-size, 40px) - 20px)/2)}.mat-mdc-list-option .mdc-radio__background{display:inline-block;position:relative;box-sizing:border-box;width:20px;height:20px}.mat-mdc-list-option .mdc-radio__background::before{position:absolute;transform:scale(0, 0);border-radius:50%;opacity:0;pointer-events:none;content:"";transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1);width:var(--mat-radio-state-layer-size, 40px);height:var(--mat-radio-state-layer-size, 40px);top:calc(-1*(var(--mat-radio-state-layer-size, 40px) - 20px)/2);left:calc(-1*(var(--mat-radio-state-layer-size, 40px) - 20px)/2)}.mat-mdc-list-option .mdc-radio__outer-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;border-width:2px;border-style:solid;border-radius:50%;transition:border-color 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-list-option .mdc-radio__inner-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;transform:scale(0, 0);border-width:10px;border-style:solid;border-radius:50%;transition:transform 90ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-list-option .mdc-radio__native-control{position:absolute;margin:0;padding:0;opacity:0;top:0;right:0;left:0;cursor:inherit;z-index:1;width:var(--mat-radio-state-layer-size, 40px);height:var(--mat-radio-state-layer-size, 40px)}.mat-mdc-list-option .mdc-radio__native-control:checked+.mdc-radio__background,.mat-mdc-list-option .mdc-radio__native-control:disabled+.mdc-radio__background{transition:opacity 90ms cubic-bezier(0, 0, 0.2, 1),transform 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-list-option .mdc-radio__native-control:checked+.mdc-radio__background>.mdc-radio__outer-circle,.mat-mdc-list-option .mdc-radio__native-control:disabled+.mdc-radio__background>.mdc-radio__outer-circle{transition:border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-list-option .mdc-radio__native-control:checked+.mdc-radio__background>.mdc-radio__inner-circle,.mat-mdc-list-option .mdc-radio__native-control:disabled+.mdc-radio__background>.mdc-radio__inner-circle{transition:transform 90ms cubic-bezier(0, 0, 0.2, 1),border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-list-option .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-disabled-unselected-icon-color, var(--mat-sys-on-surface));opacity:var(--mat-radio-disabled-unselected-icon-opacity, 0.38)}.mat-mdc-list-option .mdc-radio__native-control:disabled+.mdc-radio__background{cursor:default}.mat-mdc-list-option .mdc-radio__native-control:disabled+.mdc-radio__background>.mdc-radio__inner-circle,.mat-mdc-list-option .mdc-radio__native-control:disabled+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-disabled-selected-icon-color, var(--mat-sys-on-surface));opacity:var(--mat-radio-disabled-selected-icon-opacity, 0.38)}.mat-mdc-list-option .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background>.mdc-radio__outer-circle{border-color:var(--mat-radio-unselected-icon-color, var(--mat-sys-on-surface-variant))}.mat-mdc-list-option .mdc-radio__native-control:enabled:checked+.mdc-radio__background>.mdc-radio__outer-circle,.mat-mdc-list-option .mdc-radio__native-control:enabled:checked+.mdc-radio__background>.mdc-radio__inner-circle{border-color:var(--mat-radio-selected-icon-color, var(--mat-sys-primary))}.mat-mdc-list-option .mdc-radio__native-control:checked+.mdc-radio__background>.mdc-radio__inner-circle{transform:scale(0.5);transition:transform 90ms cubic-bezier(0, 0, 0.2, 1),border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-list-option._mat-animation-noopable .mdc-radio__background::before,.mat-mdc-list-option._mat-animation-noopable .mdc-radio__outer-circle,.mat-mdc-list-option._mat-animation-noopable .mdc-radio__inner-circle{transition:none !important}.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__start>.mdc-checkbox>.mat-mdc-checkbox-touch-target,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__start>.mdc-checkbox>.mdc-checkbox__native-control,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__start>.mdc-checkbox>.mdc-checkbox__ripple,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__start>.mdc-checkbox>.mat-mdc-checkbox-ripple::before,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__start>.mdc-checkbox>.mdc-checkbox__background,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__start>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__checkmark,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__start>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__start>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__mixedmark,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__end>.mdc-checkbox>.mat-mdc-checkbox-touch-target,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__end>.mdc-checkbox>.mdc-checkbox__native-control,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__end>.mdc-checkbox>.mdc-checkbox__ripple,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__end>.mdc-checkbox>.mat-mdc-checkbox-ripple::before,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__end>.mdc-checkbox>.mdc-checkbox__background,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__end>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__checkmark,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__end>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path,.mat-mdc-list-option._mat-animation-noopable>.mdc-list-item__end>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__mixedmark{transition:none !important;animation:none !important}.mat-mdc-list-option .mdc-checkbox__native-control,.mat-mdc-list-option .mdc-radio__native-control{display:none}@media(forced-colors: active){.mat-mdc-list-option.mdc-list-item--selected::after{content:"";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}.mat-mdc-list-option.mdc-list-item--selected [dir=rtl]::after{right:auto;left:16px}}\n'] }]
    }], propDecorators: { _lines: [{
      type: ContentChildren,
      args: [MatListItemLine, { descendants: true }]
    }], _titles: [{
      type: ContentChildren,
      args: [MatListItemTitle, { descendants: true }]
    }], _unscopedContent: [{
      type: ViewChild,
      args: ["unscopedContent"]
    }], selectedChange: [{
      type: Output
    }], togglePosition: [{
      type: Input
    }], checkboxPosition: [{
      type: Input
    }], color: [{
      type: Input
    }], value: [{
      type: Input
    }], selected: [{
      type: Input
    }] } });
    MatListSubheaderCssMatStyler = class _MatListSubheaderCssMatStyler {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatListSubheaderCssMatStyler, deps: [], target: FactoryTarget.Directive });
      static \u0275dir = \u0275\u0275ngDeclareDirective({ minVersion: "14.0.0", version: "20.0.0", type: _MatListSubheaderCssMatStyler, isStandalone: true, selector: "[mat-subheader], [matSubheader]", host: { classAttribute: "mat-mdc-subheader mdc-list-group__subheader" }, ngImport: core_exports });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatListSubheaderCssMatStyler, decorators: [{
      type: Directive,
      args: [{
        selector: "[mat-subheader], [matSubheader]",
        // TODO(mmalerba): MDC's subheader font looks identical to the list item font, figure out why and
        //  make a change in one of the repos to visually distinguish.
        host: { "class": "mat-mdc-subheader mdc-list-group__subheader" }
      }]
    }] });
    MAT_NAV_LIST = new InjectionToken("MatNavList");
    MatNavList = class _MatNavList extends MatListBase {
      // An navigation list is considered interactive, but does not extend the interactive list
      // base class. We do this because as per MDC, items of interactive lists are only reachable
      // through keyboard shortcuts. We want all items for the navigation list to be reachable
      // through tab key as we do not intend to provide any special accessibility treatment. The
      // accessibility treatment depends on how the end-user will interact with it.
      _isNonInteractive = false;
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatNavList, deps: null, target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0", type: _MatNavList, isStandalone: true, selector: "mat-nav-list", host: { attributes: { "role": "navigation" }, classAttribute: "mat-mdc-nav-list mat-mdc-list-base mdc-list" }, providers: [{ provide: MatListBase, useExisting: _MatNavList }], exportAs: ["matNavList"], usesInheritance: true, ngImport: core_exports, template: "<ng-content></ng-content>", isInline: true, styles: ['.mdc-list{margin:0;padding:8px 0;list-style-type:none}.mdc-list:focus{outline:none}.mdc-list-item{display:flex;position:relative;justify-content:flex-start;overflow:hidden;padding:0;align-items:stretch;cursor:pointer;padding-left:16px;padding-right:16px;background-color:var(--mat-list-list-item-container-color, transparent);border-radius:var(--mat-list-list-item-container-shape, var(--mat-sys-corner-none))}.mdc-list-item.mdc-list-item--selected{background-color:var(--mat-list-list-item-selected-container-color)}.mdc-list-item:focus{outline:0}.mdc-list-item.mdc-list-item--disabled{cursor:auto}.mdc-list-item.mdc-list-item--with-one-line{height:var(--mat-list-list-item-one-line-container-height, 48px)}.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-two-lines{height:var(--mat-list-list-item-two-line-container-height, 64px)}.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-three-lines{height:var(--mat-list-list-item-three-line-container-height, 88px)}.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--selected::before,.mdc-list-item.mdc-list-item--selected:focus::before,.mdc-list-item:not(.mdc-list-item--selected):focus::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;content:"";pointer-events:none}a.mdc-list-item{color:inherit;text-decoration:none}.mdc-list-item__start{fill:currentColor;flex-shrink:0;pointer-events:none}.mdc-list-item--with-leading-icon .mdc-list-item__start{color:var(--mat-list-list-item-leading-icon-color, var(--mat-sys-on-surface-variant));width:var(--mat-list-list-item-leading-icon-size, 24px);height:var(--mat-list-list-item-leading-icon-size, 24px);margin-left:16px;margin-right:32px}[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start{margin-left:32px;margin-right:16px}.mdc-list-item--with-leading-icon:hover .mdc-list-item__start{color:var(--mat-list-list-item-hover-leading-icon-color)}.mdc-list-item--with-leading-avatar .mdc-list-item__start{width:var(--mat-list-list-item-leading-avatar-size, 40px);height:var(--mat-list-list-item-leading-avatar-size, 40px);margin-left:16px;margin-right:16px;border-radius:50%}.mdc-list-item--with-leading-avatar .mdc-list-item__start,[dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start{margin-left:16px;margin-right:16px;border-radius:50%}.mdc-list-item__end{flex-shrink:0;pointer-events:none}.mdc-list-item--with-trailing-meta .mdc-list-item__end{font-family:var(--mat-list-list-item-trailing-supporting-text-font, var(--mat-sys-label-small-font));line-height:var(--mat-list-list-item-trailing-supporting-text-line-height, var(--mat-sys-label-small-line-height));font-size:var(--mat-list-list-item-trailing-supporting-text-size, var(--mat-sys-label-small-size));font-weight:var(--mat-list-list-item-trailing-supporting-text-weight, var(--mat-sys-label-small-weight));letter-spacing:var(--mat-list-list-item-trailing-supporting-text-tracking, var(--mat-sys-label-small-tracking))}.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:var(--mat-list-list-item-trailing-icon-color, var(--mat-sys-on-surface-variant));width:var(--mat-list-list-item-trailing-icon-size, 24px);height:var(--mat-list-list-item-trailing-icon-size, 24px)}.mdc-list-item--with-trailing-icon:hover .mdc-list-item__end{color:var(--mat-list-list-item-hover-trailing-icon-color)}.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end{color:var(--mat-list-list-item-trailing-supporting-text-color, var(--mat-sys-on-surface-variant))}.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:var(--mat-list-list-item-selected-trailing-icon-color, var(--mat-sys-primary))}.mdc-list-item__content{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;align-self:center;flex:1;pointer-events:none}.mdc-list-item--with-two-lines .mdc-list-item__content,.mdc-list-item--with-three-lines .mdc-list-item__content{align-self:stretch}.mdc-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;color:var(--mat-list-list-item-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-list-list-item-label-text-font, var(--mat-sys-body-large-font));line-height:var(--mat-list-list-item-label-text-line-height, var(--mat-sys-body-large-line-height));font-size:var(--mat-list-list-item-label-text-size, var(--mat-sys-body-large-size));font-weight:var(--mat-list-list-item-label-text-weight, var(--mat-sys-body-large-weight));letter-spacing:var(--mat-list-list-item-label-text-tracking, var(--mat-sys-body-large-tracking))}.mdc-list-item:hover .mdc-list-item__primary-text{color:var(--mat-list-list-item-hover-label-text-color, var(--mat-sys-on-surface))}.mdc-list-item:focus .mdc-list-item__primary-text{color:var(--mat-list-list-item-focus-label-text-color, var(--mat-sys-on-surface))}.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-three-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-three-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-three-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item__secondary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;color:var(--mat-list-list-item-supporting-text-color, var(--mat-sys-on-surface-variant));font-family:var(--mat-list-list-item-supporting-text-font, var(--mat-sys-body-medium-font));line-height:var(--mat-list-list-item-supporting-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-list-list-item-supporting-text-size, var(--mat-sys-body-medium-size));font-weight:var(--mat-list-list-item-supporting-text-weight, var(--mat-sys-body-medium-weight));letter-spacing:var(--mat-list-list-item-supporting-text-tracking, var(--mat-sys-body-medium-tracking))}.mdc-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-list-item--with-three-lines .mdc-list-item__secondary-text{white-space:normal;line-height:20px}.mdc-list-item--with-overline .mdc-list-item__secondary-text{white-space:nowrap;line-height:auto}.mdc-list-item--with-leading-radio.mdc-list-item,.mdc-list-item--with-leading-checkbox.mdc-list-item,.mdc-list-item--with-leading-icon.mdc-list-item,.mdc-list-item--with-leading-avatar.mdc-list-item{padding-left:0;padding-right:16px}[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item{padding-left:16px;padding-right:0}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-trailing-icon.mdc-list-item,[dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item{padding-left:0;padding-right:0}.mdc-list-item--with-trailing-icon .mdc-list-item__end{margin-left:16px;margin-right:16px}.mdc-list-item--with-trailing-meta.mdc-list-item{padding-left:16px;padding-right:0}[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item{padding-left:0;padding-right:16px}.mdc-list-item--with-trailing-meta .mdc-list-item__end{-webkit-user-select:none;user-select:none;margin-left:28px;margin-right:16px}[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end{margin-left:16px;margin-right:28px}.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end,.mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end{display:block;line-height:normal;align-self:flex-start;margin-top:0}.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before,.mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-list-item--with-leading-radio .mdc-list-item__start,.mdc-list-item--with-leading-checkbox .mdc-list-item__start{margin-left:8px;margin-right:24px}[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start{margin-left:24px;margin-right:8px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start{align-self:flex-start;margin-top:8px}.mdc-list-item--with-trailing-radio.mdc-list-item,.mdc-list-item--with-trailing-checkbox.mdc-list-item{padding-left:16px;padding-right:0}[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item{padding-left:0;padding-right:16px}.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon,.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar{padding-left:0}[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon,[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar{padding-right:0}.mdc-list-item--with-trailing-radio .mdc-list-item__end,.mdc-list-item--with-trailing-checkbox .mdc-list-item__end{margin-left:24px;margin-right:8px}[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end{margin-left:8px;margin-right:24px}.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end{align-self:flex-start;margin-top:8px}.mdc-list-group__subheader{margin:.75rem 16px}.mdc-list-item--disabled .mdc-list-item__start,.mdc-list-item--disabled .mdc-list-item__content,.mdc-list-item--disabled .mdc-list-item__end{opacity:1}.mdc-list-item--disabled .mdc-list-item__primary-text,.mdc-list-item--disabled .mdc-list-item__secondary-text{opacity:var(--mat-list-list-item-disabled-label-text-opacity, 0.3)}.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start{color:var(--mat-list-list-item-disabled-leading-icon-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-disabled-leading-icon-opacity, 0.38)}.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:var(--mat-list-list-item-disabled-trailing-icon-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-disabled-trailing-icon-opacity, 0.38)}.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing,[dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing{padding-left:0;padding-right:0}.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text{color:var(--mat-list-list-item-disabled-label-text-color, var(--mat-sys-on-surface))}.mdc-list-item:hover::before{background-color:var(--mat-list-list-item-hover-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mdc-list-item.mdc-list-item--disabled::before{background-color:var(--mat-list-list-item-disabled-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-disabled-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-list-item:focus::before{background-color:var(--mat-list-list-item-focus-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-list-item--disabled .mdc-radio,.mdc-list-item--disabled .mdc-checkbox{opacity:var(--mat-list-list-item-disabled-label-text-opacity, 0.3)}.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar{border-radius:var(--mat-list-list-item-leading-avatar-shape, var(--mat-sys-corner-full));background-color:var(--mat-list-list-item-leading-avatar-color, var(--mat-sys-primary-container))}.mat-mdc-list-item-icon{font-size:var(--mat-list-list-item-leading-icon-size, 24px)}@media(forced-colors: active){a.mdc-list-item--activated::after{content:"";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}a.mdc-list-item--activated [dir=rtl]::after{right:auto;left:16px}}.mat-mdc-list-base{display:block}.mat-mdc-list-base .mdc-list-item__start,.mat-mdc-list-base .mdc-list-item__end,.mat-mdc-list-base .mdc-list-item__content{pointer-events:auto}.mat-mdc-list-item,.mat-mdc-list-option{width:100%;box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),.mat-mdc-list-option:not(.mat-mdc-list-item-interactive){cursor:default}.mat-mdc-list-item .mat-divider-inset,.mat-mdc-list-option .mat-divider-inset{position:absolute;left:0;right:0;bottom:0}.mat-mdc-list-item .mat-mdc-list-item-avatar~.mat-divider-inset,.mat-mdc-list-option .mat-mdc-list-item-avatar~.mat-divider-inset{margin-left:72px}[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar~.mat-divider-inset,[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar~.mat-divider-inset{margin-right:72px}.mat-mdc-list-item-interactive::before{top:0;left:0;right:0;bottom:0;position:absolute;content:"";opacity:0;pointer-events:none;border-radius:inherit}.mat-mdc-list-item>.mat-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-mdc-list-item:focus>.mat-focus-indicator::before{content:""}.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text{white-space:nowrap;line-height:normal}.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}mat-action-list button{background:none;color:inherit;border:none;font:inherit;outline:inherit;-webkit-tap-highlight-color:rgba(0,0,0,0);text-align:start}mat-action-list button::-moz-focus-inner{border:0}.mdc-list-item--with-leading-icon .mdc-list-item__start{margin-inline-start:var(--mat-list-list-item-leading-icon-start-space, 16px);margin-inline-end:var(--mat-list-list-item-leading-icon-end-space, 16px)}.mat-mdc-nav-list .mat-mdc-list-item{border-radius:var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));--mat-focus-indicator-border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full))}.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated{background-color:var(--mat-list-active-indicator-color, var(--mat-sys-secondary-container))}\n'], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatNavList, decorators: [{
      type: Component,
      args: [{ selector: "mat-nav-list", exportAs: "matNavList", template: "<ng-content></ng-content>", host: {
        "class": "mat-mdc-nav-list mat-mdc-list-base mdc-list",
        "role": "navigation"
      }, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, providers: [{ provide: MatListBase, useExisting: MatNavList }], styles: ['.mdc-list{margin:0;padding:8px 0;list-style-type:none}.mdc-list:focus{outline:none}.mdc-list-item{display:flex;position:relative;justify-content:flex-start;overflow:hidden;padding:0;align-items:stretch;cursor:pointer;padding-left:16px;padding-right:16px;background-color:var(--mat-list-list-item-container-color, transparent);border-radius:var(--mat-list-list-item-container-shape, var(--mat-sys-corner-none))}.mdc-list-item.mdc-list-item--selected{background-color:var(--mat-list-list-item-selected-container-color)}.mdc-list-item:focus{outline:0}.mdc-list-item.mdc-list-item--disabled{cursor:auto}.mdc-list-item.mdc-list-item--with-one-line{height:var(--mat-list-list-item-one-line-container-height, 48px)}.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-two-lines{height:var(--mat-list-list-item-two-line-container-height, 64px)}.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-three-lines{height:var(--mat-list-list-item-three-line-container-height, 88px)}.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--selected::before,.mdc-list-item.mdc-list-item--selected:focus::before,.mdc-list-item:not(.mdc-list-item--selected):focus::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;content:"";pointer-events:none}a.mdc-list-item{color:inherit;text-decoration:none}.mdc-list-item__start{fill:currentColor;flex-shrink:0;pointer-events:none}.mdc-list-item--with-leading-icon .mdc-list-item__start{color:var(--mat-list-list-item-leading-icon-color, var(--mat-sys-on-surface-variant));width:var(--mat-list-list-item-leading-icon-size, 24px);height:var(--mat-list-list-item-leading-icon-size, 24px);margin-left:16px;margin-right:32px}[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start{margin-left:32px;margin-right:16px}.mdc-list-item--with-leading-icon:hover .mdc-list-item__start{color:var(--mat-list-list-item-hover-leading-icon-color)}.mdc-list-item--with-leading-avatar .mdc-list-item__start{width:var(--mat-list-list-item-leading-avatar-size, 40px);height:var(--mat-list-list-item-leading-avatar-size, 40px);margin-left:16px;margin-right:16px;border-radius:50%}.mdc-list-item--with-leading-avatar .mdc-list-item__start,[dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start{margin-left:16px;margin-right:16px;border-radius:50%}.mdc-list-item__end{flex-shrink:0;pointer-events:none}.mdc-list-item--with-trailing-meta .mdc-list-item__end{font-family:var(--mat-list-list-item-trailing-supporting-text-font, var(--mat-sys-label-small-font));line-height:var(--mat-list-list-item-trailing-supporting-text-line-height, var(--mat-sys-label-small-line-height));font-size:var(--mat-list-list-item-trailing-supporting-text-size, var(--mat-sys-label-small-size));font-weight:var(--mat-list-list-item-trailing-supporting-text-weight, var(--mat-sys-label-small-weight));letter-spacing:var(--mat-list-list-item-trailing-supporting-text-tracking, var(--mat-sys-label-small-tracking))}.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:var(--mat-list-list-item-trailing-icon-color, var(--mat-sys-on-surface-variant));width:var(--mat-list-list-item-trailing-icon-size, 24px);height:var(--mat-list-list-item-trailing-icon-size, 24px)}.mdc-list-item--with-trailing-icon:hover .mdc-list-item__end{color:var(--mat-list-list-item-hover-trailing-icon-color)}.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end{color:var(--mat-list-list-item-trailing-supporting-text-color, var(--mat-sys-on-surface-variant))}.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:var(--mat-list-list-item-selected-trailing-icon-color, var(--mat-sys-primary))}.mdc-list-item__content{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;align-self:center;flex:1;pointer-events:none}.mdc-list-item--with-two-lines .mdc-list-item__content,.mdc-list-item--with-three-lines .mdc-list-item__content{align-self:stretch}.mdc-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;color:var(--mat-list-list-item-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-list-list-item-label-text-font, var(--mat-sys-body-large-font));line-height:var(--mat-list-list-item-label-text-line-height, var(--mat-sys-body-large-line-height));font-size:var(--mat-list-list-item-label-text-size, var(--mat-sys-body-large-size));font-weight:var(--mat-list-list-item-label-text-weight, var(--mat-sys-body-large-weight));letter-spacing:var(--mat-list-list-item-label-text-tracking, var(--mat-sys-body-large-tracking))}.mdc-list-item:hover .mdc-list-item__primary-text{color:var(--mat-list-list-item-hover-label-text-color, var(--mat-sys-on-surface))}.mdc-list-item:focus .mdc-list-item__primary-text{color:var(--mat-list-list-item-focus-label-text-color, var(--mat-sys-on-surface))}.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-three-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-three-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-three-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item__secondary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;color:var(--mat-list-list-item-supporting-text-color, var(--mat-sys-on-surface-variant));font-family:var(--mat-list-list-item-supporting-text-font, var(--mat-sys-body-medium-font));line-height:var(--mat-list-list-item-supporting-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-list-list-item-supporting-text-size, var(--mat-sys-body-medium-size));font-weight:var(--mat-list-list-item-supporting-text-weight, var(--mat-sys-body-medium-weight));letter-spacing:var(--mat-list-list-item-supporting-text-tracking, var(--mat-sys-body-medium-tracking))}.mdc-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-list-item--with-three-lines .mdc-list-item__secondary-text{white-space:normal;line-height:20px}.mdc-list-item--with-overline .mdc-list-item__secondary-text{white-space:nowrap;line-height:auto}.mdc-list-item--with-leading-radio.mdc-list-item,.mdc-list-item--with-leading-checkbox.mdc-list-item,.mdc-list-item--with-leading-icon.mdc-list-item,.mdc-list-item--with-leading-avatar.mdc-list-item{padding-left:0;padding-right:16px}[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item{padding-left:16px;padding-right:0}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-trailing-icon.mdc-list-item,[dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item{padding-left:0;padding-right:0}.mdc-list-item--with-trailing-icon .mdc-list-item__end{margin-left:16px;margin-right:16px}.mdc-list-item--with-trailing-meta.mdc-list-item{padding-left:16px;padding-right:0}[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item{padding-left:0;padding-right:16px}.mdc-list-item--with-trailing-meta .mdc-list-item__end{-webkit-user-select:none;user-select:none;margin-left:28px;margin-right:16px}[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end{margin-left:16px;margin-right:28px}.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end,.mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end{display:block;line-height:normal;align-self:flex-start;margin-top:0}.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before,.mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-list-item--with-leading-radio .mdc-list-item__start,.mdc-list-item--with-leading-checkbox .mdc-list-item__start{margin-left:8px;margin-right:24px}[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start{margin-left:24px;margin-right:8px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start{align-self:flex-start;margin-top:8px}.mdc-list-item--with-trailing-radio.mdc-list-item,.mdc-list-item--with-trailing-checkbox.mdc-list-item{padding-left:16px;padding-right:0}[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item{padding-left:0;padding-right:16px}.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon,.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar{padding-left:0}[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon,[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar{padding-right:0}.mdc-list-item--with-trailing-radio .mdc-list-item__end,.mdc-list-item--with-trailing-checkbox .mdc-list-item__end{margin-left:24px;margin-right:8px}[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end{margin-left:8px;margin-right:24px}.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end{align-self:flex-start;margin-top:8px}.mdc-list-group__subheader{margin:.75rem 16px}.mdc-list-item--disabled .mdc-list-item__start,.mdc-list-item--disabled .mdc-list-item__content,.mdc-list-item--disabled .mdc-list-item__end{opacity:1}.mdc-list-item--disabled .mdc-list-item__primary-text,.mdc-list-item--disabled .mdc-list-item__secondary-text{opacity:var(--mat-list-list-item-disabled-label-text-opacity, 0.3)}.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start{color:var(--mat-list-list-item-disabled-leading-icon-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-disabled-leading-icon-opacity, 0.38)}.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:var(--mat-list-list-item-disabled-trailing-icon-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-disabled-trailing-icon-opacity, 0.38)}.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing,[dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing{padding-left:0;padding-right:0}.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text{color:var(--mat-list-list-item-disabled-label-text-color, var(--mat-sys-on-surface))}.mdc-list-item:hover::before{background-color:var(--mat-list-list-item-hover-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mdc-list-item.mdc-list-item--disabled::before{background-color:var(--mat-list-list-item-disabled-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-disabled-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-list-item:focus::before{background-color:var(--mat-list-list-item-focus-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-list-item--disabled .mdc-radio,.mdc-list-item--disabled .mdc-checkbox{opacity:var(--mat-list-list-item-disabled-label-text-opacity, 0.3)}.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar{border-radius:var(--mat-list-list-item-leading-avatar-shape, var(--mat-sys-corner-full));background-color:var(--mat-list-list-item-leading-avatar-color, var(--mat-sys-primary-container))}.mat-mdc-list-item-icon{font-size:var(--mat-list-list-item-leading-icon-size, 24px)}@media(forced-colors: active){a.mdc-list-item--activated::after{content:"";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}a.mdc-list-item--activated [dir=rtl]::after{right:auto;left:16px}}.mat-mdc-list-base{display:block}.mat-mdc-list-base .mdc-list-item__start,.mat-mdc-list-base .mdc-list-item__end,.mat-mdc-list-base .mdc-list-item__content{pointer-events:auto}.mat-mdc-list-item,.mat-mdc-list-option{width:100%;box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),.mat-mdc-list-option:not(.mat-mdc-list-item-interactive){cursor:default}.mat-mdc-list-item .mat-divider-inset,.mat-mdc-list-option .mat-divider-inset{position:absolute;left:0;right:0;bottom:0}.mat-mdc-list-item .mat-mdc-list-item-avatar~.mat-divider-inset,.mat-mdc-list-option .mat-mdc-list-item-avatar~.mat-divider-inset{margin-left:72px}[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar~.mat-divider-inset,[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar~.mat-divider-inset{margin-right:72px}.mat-mdc-list-item-interactive::before{top:0;left:0;right:0;bottom:0;position:absolute;content:"";opacity:0;pointer-events:none;border-radius:inherit}.mat-mdc-list-item>.mat-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-mdc-list-item:focus>.mat-focus-indicator::before{content:""}.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text{white-space:nowrap;line-height:normal}.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}mat-action-list button{background:none;color:inherit;border:none;font:inherit;outline:inherit;-webkit-tap-highlight-color:rgba(0,0,0,0);text-align:start}mat-action-list button::-moz-focus-inner{border:0}.mdc-list-item--with-leading-icon .mdc-list-item__start{margin-inline-start:var(--mat-list-list-item-leading-icon-start-space, 16px);margin-inline-end:var(--mat-list-list-item-leading-icon-end-space, 16px)}.mat-mdc-nav-list .mat-mdc-list-item{border-radius:var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));--mat-focus-indicator-border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full))}.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated{background-color:var(--mat-list-active-indicator-color, var(--mat-sys-secondary-container))}\n'] }]
    }] });
    MAT_SELECTION_LIST_VALUE_ACCESSOR = {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MatSelectionList),
      multi: true
    };
    MatSelectionListChange = class {
      source;
      options;
      constructor(source, options) {
        this.source = source;
        this.options = options;
      }
    };
    MatSelectionList = class _MatSelectionList extends MatListBase {
      _element = inject(ElementRef);
      _ngZone = inject(NgZone);
      _renderer = inject(Renderer2);
      _initialized = false;
      _keyManager;
      _listenerCleanups;
      /** Emits when the list has been destroyed. */
      _destroyed = new Subject();
      /** Whether the list has been destroyed. */
      _isDestroyed;
      /** View to model callback that should be called whenever the selected options change. */
      _onChange = (_) => {
      };
      _items;
      /** Emits a change event whenever the selected state of an option changes. */
      selectionChange = new EventEmitter();
      /**
       * Theme color of the selection list. This sets the checkbox color for all
       * list options. This API is supported in M2 themes only, it has no effect in
       * M3 themes. For color customization in M3, see https://material.angular.dev/components/list/styling.
       *
       * For information on applying color variants in M3, see
       * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
       */
      color = "accent";
      /**
       * Function used for comparing an option against the selected value when determining which
       * options should appear as selected. The first argument is the value of an options. The second
       * one is a value from the selected value. A boolean must be returned.
       */
      compareWith = (a1, a2) => a1 === a2;
      /** Whether selection is limited to one or multiple items (default multiple). */
      get multiple() {
        return this._multiple;
      }
      set multiple(value) {
        const newValue = coerceBooleanProperty(value);
        if (newValue !== this._multiple) {
          if ((typeof ngDevMode === "undefined" || ngDevMode) && this._initialized) {
            throw new Error("Cannot change `multiple` mode of mat-selection-list after initialization.");
          }
          this._multiple = newValue;
          this.selectedOptions = new SelectionModel(this._multiple, this.selectedOptions.selected);
        }
      }
      _multiple = true;
      /** Whether radio indicator for all list items is hidden. */
      get hideSingleSelectionIndicator() {
        return this._hideSingleSelectionIndicator;
      }
      set hideSingleSelectionIndicator(value) {
        this._hideSingleSelectionIndicator = coerceBooleanProperty(value);
      }
      _hideSingleSelectionIndicator = this._defaultOptions?.hideSingleSelectionIndicator ?? false;
      /** The currently selected options. */
      selectedOptions = new SelectionModel(this._multiple);
      /** Keeps track of the currently-selected value. */
      _value;
      /** View to model callback that should be called if the list or its options lost focus. */
      _onTouched = () => {
      };
      _changeDetectorRef = inject(ChangeDetectorRef);
      constructor() {
        super();
        this._isNonInteractive = false;
      }
      ngAfterViewInit() {
        this._initialized = true;
        this._setupRovingTabindex();
        this._ngZone.runOutsideAngular(() => {
          this._listenerCleanups = [
            this._renderer.listen(this._element.nativeElement, "focusin", this._handleFocusin),
            this._renderer.listen(this._element.nativeElement, "focusout", this._handleFocusout)
          ];
        });
        if (this._value) {
          this._setOptionsFromValues(this._value);
        }
        this._watchForSelectionChange();
      }
      ngOnChanges(changes) {
        const disabledChanges = changes["disabled"];
        const disableRippleChanges = changes["disableRipple"];
        const hideSingleSelectionIndicatorChanges = changes["hideSingleSelectionIndicator"];
        if (disableRippleChanges && !disableRippleChanges.firstChange || disabledChanges && !disabledChanges.firstChange || hideSingleSelectionIndicatorChanges && !hideSingleSelectionIndicatorChanges.firstChange) {
          this._markOptionsForCheck();
        }
      }
      ngOnDestroy() {
        this._keyManager?.destroy();
        this._listenerCleanups?.forEach((current) => current());
        this._destroyed.next();
        this._destroyed.complete();
        this._isDestroyed = true;
      }
      /** Focuses the selection list. */
      focus(options) {
        this._element.nativeElement.focus(options);
      }
      /** Selects all of the options. Returns the options that changed as a result. */
      selectAll() {
        return this._setAllOptionsSelected(true);
      }
      /** Deselects all of the options. Returns the options that changed as a result. */
      deselectAll() {
        return this._setAllOptionsSelected(false);
      }
      /** Reports a value change to the ControlValueAccessor */
      _reportValueChange() {
        if (this.options && !this._isDestroyed) {
          const value = this._getSelectedOptionValues();
          this._onChange(value);
          this._value = value;
        }
      }
      /** Emits a change event if the selected state of an option changed. */
      _emitChangeEvent(options) {
        this.selectionChange.emit(new MatSelectionListChange(this, options));
      }
      /** Implemented as part of ControlValueAccessor. */
      writeValue(values) {
        this._value = values;
        if (this.options) {
          this._setOptionsFromValues(values || []);
        }
      }
      /** Implemented as a part of ControlValueAccessor. */
      setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this._changeDetectorRef.markForCheck();
        this._markOptionsForCheck();
      }
      /**
       * Whether the *entire* selection list is disabled. When true, each list item is also disabled
       * and each list item is removed from the tab order (has tabindex="-1").
       */
      get disabled() {
        return this._selectionListDisabled();
      }
      set disabled(value) {
        this._selectionListDisabled.set(coerceBooleanProperty(value));
        if (this._selectionListDisabled()) {
          this._keyManager?.setActiveItem(-1);
        }
      }
      _selectionListDisabled = signal(false);
      /** Implemented as part of ControlValueAccessor. */
      registerOnChange(fn) {
        this._onChange = fn;
      }
      /** Implemented as part of ControlValueAccessor. */
      registerOnTouched(fn) {
        this._onTouched = fn;
      }
      /** Watches for changes in the selected state of the options and updates the list accordingly. */
      _watchForSelectionChange() {
        this.selectedOptions.changed.pipe(takeUntil(this._destroyed)).subscribe((event) => {
          for (let item of event.added) {
            item.selected = true;
          }
          for (let item of event.removed) {
            item.selected = false;
          }
          if (!this._containsFocus()) {
            this._resetActiveOption();
          }
        });
      }
      /** Sets the selected options based on the specified values. */
      _setOptionsFromValues(values) {
        this.options.forEach((option) => option._setSelected(false));
        values.forEach((value) => {
          const correspondingOption = this.options.find((option) => {
            return option.selected ? false : this.compareWith(option.value, value);
          });
          if (correspondingOption) {
            correspondingOption._setSelected(true);
          }
        });
      }
      /** Returns the values of the selected options. */
      _getSelectedOptionValues() {
        return this.options.filter((option) => option.selected).map((option) => option.value);
      }
      /** Marks all the options to be checked in the next change detection run. */
      _markOptionsForCheck() {
        if (this.options) {
          this.options.forEach((option) => option._markForCheck());
        }
      }
      /**
       * Sets the selected state on all of the options
       * and emits an event if anything changed.
       */
      _setAllOptionsSelected(isSelected, skipDisabled) {
        const changedOptions = [];
        this.options.forEach((option) => {
          if ((!skipDisabled || !option.disabled) && option._setSelected(isSelected)) {
            changedOptions.push(option);
          }
        });
        if (changedOptions.length) {
          this._reportValueChange();
        }
        return changedOptions;
      }
      // Note: This getter exists for backwards compatibility. The `_items` query list
      // cannot be named `options` as it will be picked up by the interactive list base.
      /** The option components contained within this selection-list. */
      get options() {
        return this._items;
      }
      /** Handles keydown events within the list. */
      _handleKeydown(event) {
        const activeItem = this._keyManager.activeItem;
        if ((event.keyCode === ENTER || event.keyCode === SPACE) && !this._keyManager.isTyping() && activeItem && !activeItem.disabled) {
          event.preventDefault();
          activeItem._toggleOnInteraction();
        } else if (event.keyCode === A && this.multiple && !this._keyManager.isTyping() && hasModifierKey(event, "ctrlKey", "metaKey")) {
          const shouldSelect = this.options.some((option) => !option.disabled && !option.selected);
          event.preventDefault();
          this._emitChangeEvent(this._setAllOptionsSelected(shouldSelect, true));
        } else {
          this._keyManager.onKeydown(event);
        }
      }
      /** Handles focusout events within the list. */
      _handleFocusout = () => {
        setTimeout(() => {
          if (!this._containsFocus()) {
            this._resetActiveOption();
          }
        });
      };
      /** Handles focusin events within the list. */
      _handleFocusin = (event) => {
        if (this.disabled) {
          return;
        }
        const activeIndex = this._items.toArray().findIndex((item) => item._elementRef.nativeElement.contains(event.target));
        if (activeIndex > -1) {
          this._setActiveOption(activeIndex);
        } else {
          this._resetActiveOption();
        }
      };
      /**
       * Sets up the logic for maintaining the roving tabindex.
       *
       * `skipPredicate` determines if key manager should avoid putting a given list item in the tab
       * index. Allow disabled list items to receive focus to align with WAI ARIA recommendation.
       * Normally WAI ARIA's instructions are to exclude disabled items from the tab order, but it
       * makes a few exceptions for compound widgets.
       *
       * From [Developing a Keyboard Interface](
       * https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/):
       *   "For the following composite widget elements, keep them focusable when disabled: Options in a
       *   Listbox..."
       */
      _setupRovingTabindex() {
        this._keyManager = new FocusKeyManager(this._items).withHomeAndEnd().withTypeAhead().withWrap().skipPredicate(() => this.disabled);
        this._resetActiveOption();
        this._keyManager.change.subscribe((activeItemIndex) => this._setActiveOption(activeItemIndex));
        this._items.changes.pipe(takeUntil(this._destroyed)).subscribe(() => {
          const activeItem = this._keyManager.activeItem;
          if (!activeItem || this._items.toArray().indexOf(activeItem) === -1) {
            this._resetActiveOption();
          }
        });
      }
      /**
       * Sets an option as active.
       * @param index Index of the active option. If set to -1, no option will be active.
       */
      _setActiveOption(index) {
        this._items.forEach((item, itemIndex) => item._setTabindex(itemIndex === index ? 0 : -1));
        this._keyManager.updateActiveItem(index);
      }
      /**
       * Resets the active option. When the list is disabled, remove all options from to the tab order.
       * Otherwise, focus the first selected option.
       */
      _resetActiveOption() {
        if (this.disabled) {
          this._setActiveOption(-1);
          return;
        }
        const activeItem = this._items.find((item) => item.selected && !item.disabled) || this._items.first;
        this._setActiveOption(activeItem ? this._items.toArray().indexOf(activeItem) : -1);
      }
      /** Returns whether the focus is currently within the list. */
      _containsFocus() {
        const activeElement = _getFocusedElementPierceShadowDom();
        return activeElement && this._element.nativeElement.contains(activeElement);
      }
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatSelectionList, deps: [], target: FactoryTarget.Component });
      static \u0275cmp = \u0275\u0275ngDeclareComponent({ minVersion: "14.0.0", version: "20.0.0", type: _MatSelectionList, isStandalone: true, selector: "mat-selection-list", inputs: { color: "color", compareWith: "compareWith", multiple: "multiple", hideSingleSelectionIndicator: "hideSingleSelectionIndicator", disabled: "disabled" }, outputs: { selectionChange: "selectionChange" }, host: { attributes: { "role": "listbox" }, listeners: { "keydown": "_handleKeydown($event)" }, properties: { "attr.aria-multiselectable": "multiple" }, classAttribute: "mat-mdc-selection-list mat-mdc-list-base mdc-list" }, providers: [
        MAT_SELECTION_LIST_VALUE_ACCESSOR,
        { provide: MatListBase, useExisting: _MatSelectionList },
        { provide: SELECTION_LIST, useExisting: _MatSelectionList }
      ], queries: [{ propertyName: "_items", predicate: MatListOption, descendants: true }], exportAs: ["matSelectionList"], usesInheritance: true, usesOnChanges: true, ngImport: core_exports, template: "<ng-content></ng-content>", isInline: true, styles: ['.mdc-list{margin:0;padding:8px 0;list-style-type:none}.mdc-list:focus{outline:none}.mdc-list-item{display:flex;position:relative;justify-content:flex-start;overflow:hidden;padding:0;align-items:stretch;cursor:pointer;padding-left:16px;padding-right:16px;background-color:var(--mat-list-list-item-container-color, transparent);border-radius:var(--mat-list-list-item-container-shape, var(--mat-sys-corner-none))}.mdc-list-item.mdc-list-item--selected{background-color:var(--mat-list-list-item-selected-container-color)}.mdc-list-item:focus{outline:0}.mdc-list-item.mdc-list-item--disabled{cursor:auto}.mdc-list-item.mdc-list-item--with-one-line{height:var(--mat-list-list-item-one-line-container-height, 48px)}.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-two-lines{height:var(--mat-list-list-item-two-line-container-height, 64px)}.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-three-lines{height:var(--mat-list-list-item-three-line-container-height, 88px)}.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--selected::before,.mdc-list-item.mdc-list-item--selected:focus::before,.mdc-list-item:not(.mdc-list-item--selected):focus::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;content:"";pointer-events:none}a.mdc-list-item{color:inherit;text-decoration:none}.mdc-list-item__start{fill:currentColor;flex-shrink:0;pointer-events:none}.mdc-list-item--with-leading-icon .mdc-list-item__start{color:var(--mat-list-list-item-leading-icon-color, var(--mat-sys-on-surface-variant));width:var(--mat-list-list-item-leading-icon-size, 24px);height:var(--mat-list-list-item-leading-icon-size, 24px);margin-left:16px;margin-right:32px}[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start{margin-left:32px;margin-right:16px}.mdc-list-item--with-leading-icon:hover .mdc-list-item__start{color:var(--mat-list-list-item-hover-leading-icon-color)}.mdc-list-item--with-leading-avatar .mdc-list-item__start{width:var(--mat-list-list-item-leading-avatar-size, 40px);height:var(--mat-list-list-item-leading-avatar-size, 40px);margin-left:16px;margin-right:16px;border-radius:50%}.mdc-list-item--with-leading-avatar .mdc-list-item__start,[dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start{margin-left:16px;margin-right:16px;border-radius:50%}.mdc-list-item__end{flex-shrink:0;pointer-events:none}.mdc-list-item--with-trailing-meta .mdc-list-item__end{font-family:var(--mat-list-list-item-trailing-supporting-text-font, var(--mat-sys-label-small-font));line-height:var(--mat-list-list-item-trailing-supporting-text-line-height, var(--mat-sys-label-small-line-height));font-size:var(--mat-list-list-item-trailing-supporting-text-size, var(--mat-sys-label-small-size));font-weight:var(--mat-list-list-item-trailing-supporting-text-weight, var(--mat-sys-label-small-weight));letter-spacing:var(--mat-list-list-item-trailing-supporting-text-tracking, var(--mat-sys-label-small-tracking))}.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:var(--mat-list-list-item-trailing-icon-color, var(--mat-sys-on-surface-variant));width:var(--mat-list-list-item-trailing-icon-size, 24px);height:var(--mat-list-list-item-trailing-icon-size, 24px)}.mdc-list-item--with-trailing-icon:hover .mdc-list-item__end{color:var(--mat-list-list-item-hover-trailing-icon-color)}.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end{color:var(--mat-list-list-item-trailing-supporting-text-color, var(--mat-sys-on-surface-variant))}.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:var(--mat-list-list-item-selected-trailing-icon-color, var(--mat-sys-primary))}.mdc-list-item__content{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;align-self:center;flex:1;pointer-events:none}.mdc-list-item--with-two-lines .mdc-list-item__content,.mdc-list-item--with-three-lines .mdc-list-item__content{align-self:stretch}.mdc-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;color:var(--mat-list-list-item-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-list-list-item-label-text-font, var(--mat-sys-body-large-font));line-height:var(--mat-list-list-item-label-text-line-height, var(--mat-sys-body-large-line-height));font-size:var(--mat-list-list-item-label-text-size, var(--mat-sys-body-large-size));font-weight:var(--mat-list-list-item-label-text-weight, var(--mat-sys-body-large-weight));letter-spacing:var(--mat-list-list-item-label-text-tracking, var(--mat-sys-body-large-tracking))}.mdc-list-item:hover .mdc-list-item__primary-text{color:var(--mat-list-list-item-hover-label-text-color, var(--mat-sys-on-surface))}.mdc-list-item:focus .mdc-list-item__primary-text{color:var(--mat-list-list-item-focus-label-text-color, var(--mat-sys-on-surface))}.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-three-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-three-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-three-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item__secondary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;color:var(--mat-list-list-item-supporting-text-color, var(--mat-sys-on-surface-variant));font-family:var(--mat-list-list-item-supporting-text-font, var(--mat-sys-body-medium-font));line-height:var(--mat-list-list-item-supporting-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-list-list-item-supporting-text-size, var(--mat-sys-body-medium-size));font-weight:var(--mat-list-list-item-supporting-text-weight, var(--mat-sys-body-medium-weight));letter-spacing:var(--mat-list-list-item-supporting-text-tracking, var(--mat-sys-body-medium-tracking))}.mdc-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-list-item--with-three-lines .mdc-list-item__secondary-text{white-space:normal;line-height:20px}.mdc-list-item--with-overline .mdc-list-item__secondary-text{white-space:nowrap;line-height:auto}.mdc-list-item--with-leading-radio.mdc-list-item,.mdc-list-item--with-leading-checkbox.mdc-list-item,.mdc-list-item--with-leading-icon.mdc-list-item,.mdc-list-item--with-leading-avatar.mdc-list-item{padding-left:0;padding-right:16px}[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item{padding-left:16px;padding-right:0}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-trailing-icon.mdc-list-item,[dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item{padding-left:0;padding-right:0}.mdc-list-item--with-trailing-icon .mdc-list-item__end{margin-left:16px;margin-right:16px}.mdc-list-item--with-trailing-meta.mdc-list-item{padding-left:16px;padding-right:0}[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item{padding-left:0;padding-right:16px}.mdc-list-item--with-trailing-meta .mdc-list-item__end{-webkit-user-select:none;user-select:none;margin-left:28px;margin-right:16px}[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end{margin-left:16px;margin-right:28px}.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end,.mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end{display:block;line-height:normal;align-self:flex-start;margin-top:0}.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before,.mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-list-item--with-leading-radio .mdc-list-item__start,.mdc-list-item--with-leading-checkbox .mdc-list-item__start{margin-left:8px;margin-right:24px}[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start{margin-left:24px;margin-right:8px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start{align-self:flex-start;margin-top:8px}.mdc-list-item--with-trailing-radio.mdc-list-item,.mdc-list-item--with-trailing-checkbox.mdc-list-item{padding-left:16px;padding-right:0}[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item{padding-left:0;padding-right:16px}.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon,.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar{padding-left:0}[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon,[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar{padding-right:0}.mdc-list-item--with-trailing-radio .mdc-list-item__end,.mdc-list-item--with-trailing-checkbox .mdc-list-item__end{margin-left:24px;margin-right:8px}[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end{margin-left:8px;margin-right:24px}.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end{align-self:flex-start;margin-top:8px}.mdc-list-group__subheader{margin:.75rem 16px}.mdc-list-item--disabled .mdc-list-item__start,.mdc-list-item--disabled .mdc-list-item__content,.mdc-list-item--disabled .mdc-list-item__end{opacity:1}.mdc-list-item--disabled .mdc-list-item__primary-text,.mdc-list-item--disabled .mdc-list-item__secondary-text{opacity:var(--mat-list-list-item-disabled-label-text-opacity, 0.3)}.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start{color:var(--mat-list-list-item-disabled-leading-icon-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-disabled-leading-icon-opacity, 0.38)}.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:var(--mat-list-list-item-disabled-trailing-icon-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-disabled-trailing-icon-opacity, 0.38)}.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing,[dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing{padding-left:0;padding-right:0}.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text{color:var(--mat-list-list-item-disabled-label-text-color, var(--mat-sys-on-surface))}.mdc-list-item:hover::before{background-color:var(--mat-list-list-item-hover-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mdc-list-item.mdc-list-item--disabled::before{background-color:var(--mat-list-list-item-disabled-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-disabled-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-list-item:focus::before{background-color:var(--mat-list-list-item-focus-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-list-item--disabled .mdc-radio,.mdc-list-item--disabled .mdc-checkbox{opacity:var(--mat-list-list-item-disabled-label-text-opacity, 0.3)}.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar{border-radius:var(--mat-list-list-item-leading-avatar-shape, var(--mat-sys-corner-full));background-color:var(--mat-list-list-item-leading-avatar-color, var(--mat-sys-primary-container))}.mat-mdc-list-item-icon{font-size:var(--mat-list-list-item-leading-icon-size, 24px)}@media(forced-colors: active){a.mdc-list-item--activated::after{content:"";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}a.mdc-list-item--activated [dir=rtl]::after{right:auto;left:16px}}.mat-mdc-list-base{display:block}.mat-mdc-list-base .mdc-list-item__start,.mat-mdc-list-base .mdc-list-item__end,.mat-mdc-list-base .mdc-list-item__content{pointer-events:auto}.mat-mdc-list-item,.mat-mdc-list-option{width:100%;box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),.mat-mdc-list-option:not(.mat-mdc-list-item-interactive){cursor:default}.mat-mdc-list-item .mat-divider-inset,.mat-mdc-list-option .mat-divider-inset{position:absolute;left:0;right:0;bottom:0}.mat-mdc-list-item .mat-mdc-list-item-avatar~.mat-divider-inset,.mat-mdc-list-option .mat-mdc-list-item-avatar~.mat-divider-inset{margin-left:72px}[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar~.mat-divider-inset,[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar~.mat-divider-inset{margin-right:72px}.mat-mdc-list-item-interactive::before{top:0;left:0;right:0;bottom:0;position:absolute;content:"";opacity:0;pointer-events:none;border-radius:inherit}.mat-mdc-list-item>.mat-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-mdc-list-item:focus>.mat-focus-indicator::before{content:""}.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text{white-space:nowrap;line-height:normal}.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}mat-action-list button{background:none;color:inherit;border:none;font:inherit;outline:inherit;-webkit-tap-highlight-color:rgba(0,0,0,0);text-align:start}mat-action-list button::-moz-focus-inner{border:0}.mdc-list-item--with-leading-icon .mdc-list-item__start{margin-inline-start:var(--mat-list-list-item-leading-icon-start-space, 16px);margin-inline-end:var(--mat-list-list-item-leading-icon-end-space, 16px)}.mat-mdc-nav-list .mat-mdc-list-item{border-radius:var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));--mat-focus-indicator-border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full))}.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated{background-color:var(--mat-list-active-indicator-color, var(--mat-sys-secondary-container))}\n'], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatSelectionList, decorators: [{
      type: Component,
      args: [{ selector: "mat-selection-list", exportAs: "matSelectionList", host: {
        "class": "mat-mdc-selection-list mat-mdc-list-base mdc-list",
        "role": "listbox",
        "[attr.aria-multiselectable]": "multiple",
        "(keydown)": "_handleKeydown($event)"
      }, template: "<ng-content></ng-content>", encapsulation: ViewEncapsulation.None, providers: [
        MAT_SELECTION_LIST_VALUE_ACCESSOR,
        { provide: MatListBase, useExisting: MatSelectionList },
        { provide: SELECTION_LIST, useExisting: MatSelectionList }
      ], changeDetection: ChangeDetectionStrategy.OnPush, styles: ['.mdc-list{margin:0;padding:8px 0;list-style-type:none}.mdc-list:focus{outline:none}.mdc-list-item{display:flex;position:relative;justify-content:flex-start;overflow:hidden;padding:0;align-items:stretch;cursor:pointer;padding-left:16px;padding-right:16px;background-color:var(--mat-list-list-item-container-color, transparent);border-radius:var(--mat-list-list-item-container-shape, var(--mat-sys-corner-none))}.mdc-list-item.mdc-list-item--selected{background-color:var(--mat-list-list-item-selected-container-color)}.mdc-list-item:focus{outline:0}.mdc-list-item.mdc-list-item--disabled{cursor:auto}.mdc-list-item.mdc-list-item--with-one-line{height:var(--mat-list-list-item-one-line-container-height, 48px)}.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-two-lines{height:var(--mat-list-list-item-two-line-container-height, 64px)}.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-three-lines{height:var(--mat-list-list-item-three-line-container-height, 88px)}.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--selected::before,.mdc-list-item.mdc-list-item--selected:focus::before,.mdc-list-item:not(.mdc-list-item--selected):focus::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;content:"";pointer-events:none}a.mdc-list-item{color:inherit;text-decoration:none}.mdc-list-item__start{fill:currentColor;flex-shrink:0;pointer-events:none}.mdc-list-item--with-leading-icon .mdc-list-item__start{color:var(--mat-list-list-item-leading-icon-color, var(--mat-sys-on-surface-variant));width:var(--mat-list-list-item-leading-icon-size, 24px);height:var(--mat-list-list-item-leading-icon-size, 24px);margin-left:16px;margin-right:32px}[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start{margin-left:32px;margin-right:16px}.mdc-list-item--with-leading-icon:hover .mdc-list-item__start{color:var(--mat-list-list-item-hover-leading-icon-color)}.mdc-list-item--with-leading-avatar .mdc-list-item__start{width:var(--mat-list-list-item-leading-avatar-size, 40px);height:var(--mat-list-list-item-leading-avatar-size, 40px);margin-left:16px;margin-right:16px;border-radius:50%}.mdc-list-item--with-leading-avatar .mdc-list-item__start,[dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start{margin-left:16px;margin-right:16px;border-radius:50%}.mdc-list-item__end{flex-shrink:0;pointer-events:none}.mdc-list-item--with-trailing-meta .mdc-list-item__end{font-family:var(--mat-list-list-item-trailing-supporting-text-font, var(--mat-sys-label-small-font));line-height:var(--mat-list-list-item-trailing-supporting-text-line-height, var(--mat-sys-label-small-line-height));font-size:var(--mat-list-list-item-trailing-supporting-text-size, var(--mat-sys-label-small-size));font-weight:var(--mat-list-list-item-trailing-supporting-text-weight, var(--mat-sys-label-small-weight));letter-spacing:var(--mat-list-list-item-trailing-supporting-text-tracking, var(--mat-sys-label-small-tracking))}.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:var(--mat-list-list-item-trailing-icon-color, var(--mat-sys-on-surface-variant));width:var(--mat-list-list-item-trailing-icon-size, 24px);height:var(--mat-list-list-item-trailing-icon-size, 24px)}.mdc-list-item--with-trailing-icon:hover .mdc-list-item__end{color:var(--mat-list-list-item-hover-trailing-icon-color)}.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end{color:var(--mat-list-list-item-trailing-supporting-text-color, var(--mat-sys-on-surface-variant))}.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:var(--mat-list-list-item-selected-trailing-icon-color, var(--mat-sys-primary))}.mdc-list-item__content{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;align-self:center;flex:1;pointer-events:none}.mdc-list-item--with-two-lines .mdc-list-item__content,.mdc-list-item--with-three-lines .mdc-list-item__content{align-self:stretch}.mdc-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;color:var(--mat-list-list-item-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-list-list-item-label-text-font, var(--mat-sys-body-large-font));line-height:var(--mat-list-list-item-label-text-line-height, var(--mat-sys-body-large-line-height));font-size:var(--mat-list-list-item-label-text-size, var(--mat-sys-body-large-size));font-weight:var(--mat-list-list-item-label-text-weight, var(--mat-sys-body-large-weight));letter-spacing:var(--mat-list-list-item-label-text-tracking, var(--mat-sys-body-large-tracking))}.mdc-list-item:hover .mdc-list-item__primary-text{color:var(--mat-list-list-item-hover-label-text-color, var(--mat-sys-on-surface))}.mdc-list-item:focus .mdc-list-item__primary-text{color:var(--mat-list-list-item-focus-label-text-color, var(--mat-sys-on-surface))}.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-three-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-three-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-three-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item__secondary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;color:var(--mat-list-list-item-supporting-text-color, var(--mat-sys-on-surface-variant));font-family:var(--mat-list-list-item-supporting-text-font, var(--mat-sys-body-medium-font));line-height:var(--mat-list-list-item-supporting-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-list-list-item-supporting-text-size, var(--mat-sys-body-medium-size));font-weight:var(--mat-list-list-item-supporting-text-weight, var(--mat-sys-body-medium-weight));letter-spacing:var(--mat-list-list-item-supporting-text-tracking, var(--mat-sys-body-medium-tracking))}.mdc-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-list-item--with-three-lines .mdc-list-item__secondary-text{white-space:normal;line-height:20px}.mdc-list-item--with-overline .mdc-list-item__secondary-text{white-space:nowrap;line-height:auto}.mdc-list-item--with-leading-radio.mdc-list-item,.mdc-list-item--with-leading-checkbox.mdc-list-item,.mdc-list-item--with-leading-icon.mdc-list-item,.mdc-list-item--with-leading-avatar.mdc-list-item{padding-left:0;padding-right:16px}[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item{padding-left:16px;padding-right:0}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item--with-trailing-icon.mdc-list-item,[dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item{padding-left:0;padding-right:0}.mdc-list-item--with-trailing-icon .mdc-list-item__end{margin-left:16px;margin-right:16px}.mdc-list-item--with-trailing-meta.mdc-list-item{padding-left:16px;padding-right:0}[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item{padding-left:0;padding-right:16px}.mdc-list-item--with-trailing-meta .mdc-list-item__end{-webkit-user-select:none;user-select:none;margin-left:28px;margin-right:16px}[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end{margin-left:16px;margin-right:28px}.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end,.mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end{display:block;line-height:normal;align-self:flex-start;margin-top:0}.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before,.mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before{display:inline-block;width:0;height:28px;content:"";vertical-align:0}.mdc-list-item--with-leading-radio .mdc-list-item__start,.mdc-list-item--with-leading-checkbox .mdc-list-item__start{margin-left:8px;margin-right:24px}[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start{margin-left:24px;margin-right:8px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start{align-self:flex-start;margin-top:8px}.mdc-list-item--with-trailing-radio.mdc-list-item,.mdc-list-item--with-trailing-checkbox.mdc-list-item{padding-left:16px;padding-right:0}[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item{padding-left:0;padding-right:16px}.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon,.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar{padding-left:0}[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon,[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar{padding-right:0}.mdc-list-item--with-trailing-radio .mdc-list-item__end,.mdc-list-item--with-trailing-checkbox .mdc-list-item__end{margin-left:24px;margin-right:8px}[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end{margin-left:8px;margin-right:24px}.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end{align-self:flex-start;margin-top:8px}.mdc-list-group__subheader{margin:.75rem 16px}.mdc-list-item--disabled .mdc-list-item__start,.mdc-list-item--disabled .mdc-list-item__content,.mdc-list-item--disabled .mdc-list-item__end{opacity:1}.mdc-list-item--disabled .mdc-list-item__primary-text,.mdc-list-item--disabled .mdc-list-item__secondary-text{opacity:var(--mat-list-list-item-disabled-label-text-opacity, 0.3)}.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start{color:var(--mat-list-list-item-disabled-leading-icon-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-disabled-leading-icon-opacity, 0.38)}.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:var(--mat-list-list-item-disabled-trailing-icon-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-disabled-trailing-icon-opacity, 0.38)}.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing,[dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing{padding-left:0;padding-right:0}.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text{color:var(--mat-list-list-item-disabled-label-text-color, var(--mat-sys-on-surface))}.mdc-list-item:hover::before{background-color:var(--mat-list-list-item-hover-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mdc-list-item.mdc-list-item--disabled::before{background-color:var(--mat-list-list-item-disabled-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-disabled-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-list-item:focus::before{background-color:var(--mat-list-list-item-focus-state-layer-color, var(--mat-sys-on-surface));opacity:var(--mat-list-list-item-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}.mdc-list-item--disabled .mdc-radio,.mdc-list-item--disabled .mdc-checkbox{opacity:var(--mat-list-list-item-disabled-label-text-opacity, 0.3)}.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar{border-radius:var(--mat-list-list-item-leading-avatar-shape, var(--mat-sys-corner-full));background-color:var(--mat-list-list-item-leading-avatar-color, var(--mat-sys-primary-container))}.mat-mdc-list-item-icon{font-size:var(--mat-list-list-item-leading-icon-size, 24px)}@media(forced-colors: active){a.mdc-list-item--activated::after{content:"";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}a.mdc-list-item--activated [dir=rtl]::after{right:auto;left:16px}}.mat-mdc-list-base{display:block}.mat-mdc-list-base .mdc-list-item__start,.mat-mdc-list-base .mdc-list-item__end,.mat-mdc-list-base .mdc-list-item__content{pointer-events:auto}.mat-mdc-list-item,.mat-mdc-list-option{width:100%;box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),.mat-mdc-list-option:not(.mat-mdc-list-item-interactive){cursor:default}.mat-mdc-list-item .mat-divider-inset,.mat-mdc-list-option .mat-divider-inset{position:absolute;left:0;right:0;bottom:0}.mat-mdc-list-item .mat-mdc-list-item-avatar~.mat-divider-inset,.mat-mdc-list-option .mat-mdc-list-item-avatar~.mat-divider-inset{margin-left:72px}[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar~.mat-divider-inset,[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar~.mat-divider-inset{margin-right:72px}.mat-mdc-list-item-interactive::before{top:0;left:0;right:0;bottom:0;position:absolute;content:"";opacity:0;pointer-events:none;border-radius:inherit}.mat-mdc-list-item>.mat-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-mdc-list-item:focus>.mat-focus-indicator::before{content:""}.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text{white-space:nowrap;line-height:normal}.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}mat-action-list button{background:none;color:inherit;border:none;font:inherit;outline:inherit;-webkit-tap-highlight-color:rgba(0,0,0,0);text-align:start}mat-action-list button::-moz-focus-inner{border:0}.mdc-list-item--with-leading-icon .mdc-list-item__start{margin-inline-start:var(--mat-list-list-item-leading-icon-start-space, 16px);margin-inline-end:var(--mat-list-list-item-leading-icon-end-space, 16px)}.mat-mdc-nav-list .mat-mdc-list-item{border-radius:var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));--mat-focus-indicator-border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full))}.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated{background-color:var(--mat-list-active-indicator-color, var(--mat-sys-secondary-container))}\n'] }]
    }], ctorParameters: () => [], propDecorators: { _items: [{
      type: ContentChildren,
      args: [MatListOption, { descendants: true }]
    }], selectionChange: [{
      type: Output
    }], color: [{
      type: Input
    }], compareWith: [{
      type: Input
    }], multiple: [{
      type: Input
    }], hideSingleSelectionIndicator: [{
      type: Input
    }], disabled: [{
      type: Input
    }] } });
    MatListModule = class _MatListModule {
      static \u0275fac = \u0275\u0275ngDeclareFactory({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatListModule, deps: [], target: FactoryTarget.NgModule });
      static \u0275mod = \u0275\u0275ngDeclareNgModule({ minVersion: "14.0.0", version: "20.0.0", ngImport: core_exports, type: _MatListModule, imports: [
        ObserversModule,
        MatCommonModule,
        MatRippleModule,
        MatPseudoCheckboxModule,
        MatList,
        MatActionList,
        MatNavList,
        MatSelectionList,
        MatListItem,
        MatListOption,
        MatListSubheaderCssMatStyler,
        MatListItemAvatar,
        MatListItemIcon,
        MatListItemLine,
        MatListItemTitle,
        MatListItemMeta
      ], exports: [
        MatList,
        MatActionList,
        MatNavList,
        MatSelectionList,
        MatListItem,
        MatListOption,
        MatListItemAvatar,
        MatListItemIcon,
        MatListSubheaderCssMatStyler,
        MatDividerModule,
        MatListItemLine,
        MatListItemTitle,
        MatListItemMeta
      ] });
      static \u0275inj = \u0275\u0275ngDeclareInjector({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: _MatListModule, imports: [
        ObserversModule,
        MatCommonModule,
        MatRippleModule,
        MatPseudoCheckboxModule,
        MatDividerModule
      ] });
    };
    \u0275\u0275ngDeclareClassMetadata({ minVersion: "12.0.0", version: "20.0.0", ngImport: core_exports, type: MatListModule, decorators: [{
      type: NgModule,
      args: [{
        imports: [
          ObserversModule,
          MatCommonModule,
          MatRippleModule,
          MatPseudoCheckboxModule,
          MatList,
          MatActionList,
          MatNavList,
          MatSelectionList,
          MatListItem,
          MatListOption,
          MatListSubheaderCssMatStyler,
          MatListItemAvatar,
          MatListItemIcon,
          MatListItemLine,
          MatListItemTitle,
          MatListItemMeta
        ],
        exports: [
          MatList,
          MatActionList,
          MatNavList,
          MatSelectionList,
          MatListItem,
          MatListOption,
          MatListItemAvatar,
          MatListItemIcon,
          MatListSubheaderCssMatStyler,
          MatDividerModule,
          MatListItemLine,
          MatListItemTitle,
          MatListItemMeta
        ]
      }]
    }] });
  }
});

export {
  _getEventTarget,
  Platform,
  FocusMonitor,
  _CdkPrivateStyleLoader,
  init_private,
  init_a11y,
  init_platform,
  _animationsDisabled,
  init_animation_ChQ1vjiF,
  MatCommonModule,
  init_common_module_cKSwHniA,
  MatSidenavModule,
  init_sidenav,
  MatToolbarModule,
  init_toolbar,
  MatIconModule,
  init_icon,
  defaultRippleAnimationConfig,
  RippleRenderer,
  MAT_RIPPLE_GLOBAL_OPTIONS,
  init_ripple_BMyyyLz2,
  _StructuralStylesLoader,
  init_structural_styles_CObeNzjn,
  MatRippleModule,
  init_index_BRImSAOu,
  MatListModule,
  init_list
};
//# sourceMappingURL=chunk-FZJ2EGCV.js.map
