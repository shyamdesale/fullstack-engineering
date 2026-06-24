/**
 * PROFESSIONAL ONBOARDING MODAL SYSTEM
 * Production-grade vanilla JavaScript with clean architecture
 * 
 * Architecture Pattern: Component-based state management
 * Follows SOLID principles and modern vanilla JS best practices
 */

// ============================================================================
// VALIDATION MODULE - Reusable form validation logic
// ============================================================================
const ValidationModule = {
    /**
     * Validates email format
     * @param {string} email
     * @returns {boolean}
     */
    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email) && email.length <= 254;
    },

    /**
     * Validates password strength
     * Returns object with strength level and meets requirements
     * @param {string} password
     * @returns {object}
     */
    validatePassword(password) {
        const minLength = password.length >= 8;
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumbers = /\d/.test(password);
        const hasSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);

        const meetsRequirements = minLength && hasUpperCase && hasLowerCase && hasNumbers;
        
        let strength = 'weak';
        const strengthScore = [minLength, hasUpperCase, hasLowerCase, hasNumbers, hasSpecial].filter(Boolean).length;
        
        if (strengthScore >= 5) strength = 'strong';
        else if (strengthScore >= 4) strength = 'good';
        else if (strengthScore >= 3) strength = 'fair';
        
        return {
            meetsRequirements,
            strength,
            score: strengthScore,
            minLength,
            hasUpperCase,
            hasLowerCase,
            hasNumbers,
            hasSpecial
        };
    },

    /**
     * Validates name (at least 2 characters, no numbers)
     * @param {string} name
     * @returns {boolean}
     */
    isValidName(name) {
        return name.trim().length >= 2 && !/\d/.test(name);
    },

    /**
     * Validates company name
     * @param {string} name
     * @returns {boolean}
     */
    isValidCompanyName(name) {
        return name.trim().length >= 2;
    },

    /**
     * Validates that a select value is chosen
     * @param {string} value
     * @returns {boolean}
     */
    isValidSelect(value) {
        return value.length > 0;
    }
};

// ============================================================================
// STATE MANAGER - Central state management
// ============================================================================
const StateManager = {
    state: {
        currentStep: 1,
        totalSteps: 4,
        isSubmitting: false,
        formData: {
            email: '',
            fullName: '',
            password: '',
            companyName: '',
            role: '',
            companySize: '',
            terms: false
        },
        errors: {
            email: '',
            fullName: '',
            password: '',
            companyName: '',
            role: '',
            companySize: '',
            terms: ''
        },
        validationState: {
            email: false,
            fullName: false,
            password: false,
            companyName: false,
            role: false,
            companySize: false,
            terms: false
        }
    },

    /**
     * Update form data
     * @param {string} fieldName
     * @param {any} value
     */
    setFormData(fieldName, value) {
        this.state.formData[fieldName] = value;
    },

    /**
     * Update validation state
     * @param {string} fieldName
     * @param {boolean} isValid
     */
    setValidationState(fieldName, isValid) {
        this.state.validationState[fieldName] = isValid;
    },

    /**
     * Set error message
     * @param {string} fieldName
     * @param {string} message
     */
    setError(fieldName, message) {
        this.state.errors[fieldName] = message;
    },

    /**
     * Clear error
     * @param {string} fieldName
     */
    clearError(fieldName) {
        this.state.errors[fieldName] = '';
    },

    /**
     * Set current step
     * @param {number} step
     */
    setCurrentStep(step) {
        this.state.currentStep = Math.min(Math.max(step, 1), this.state.totalSteps);
    },

    /**
     * Get current form data
     * @returns {object}
     */
    getFormData() {
        return { ...this.state.formData };
    },

    /**
     * Get current state
     * @returns {object}
     */
    getState() {
        return { ...this.state };
    },

    /**
     * Reset all state
     */
    resetState() {
        this.state = {
            currentStep: 1,
            totalSteps: 4,
            isSubmitting: false,
            formData: {
                email: '',
                fullName: '',
                password: '',
                companyName: '',
                role: '',
                companySize: '',
                terms: false
            },
            errors: {
                email: '',
                fullName: '',
                password: '',
                companyName: '',
                role: '',
                companySize: '',
                terms: ''
            },
            validationState: {
                email: false,
                fullName: false,
                password: false,
                companyName: false,
                role: false,
                companySize: false,
                terms: false
            }
        };
    }
};

// ============================================================================
// FIELD VALIDATOR - Validates individual fields in real-time
// ============================================================================
const FieldValidator = {
    /**
     * Validate email field
     * @param {HTMLInputElement} element
     */
    validateEmail(element) {
        const value = element.value.trim();
        const errorElement = document.getElementById('email-error');
        let isValid = true;
        let errorMessage = '';

        if (!value) {
            errorMessage = 'Email is required';
            isValid = false;
        } else if (!ValidationModule.isValidEmail(value)) {
            errorMessage = 'Please enter a valid email address';
            isValid = false;
        }

        this.updateFieldUI(element, errorElement, isValid, errorMessage);
        StateManager.setFormData('email', value);
        StateManager.setValidationState('email', isValid);
        StateManager.setError('email', errorMessage);
    },

    /**
     * Validate full name field
     * @param {HTMLInputElement} element
     */
    validateFullName(element) {
        const value = element.value.trim();
        const errorElement = document.getElementById('fullName-error');
        let isValid = true;
        let errorMessage = '';

        if (!value) {
            errorMessage = 'Full name is required';
            isValid = false;
        } else if (!ValidationModule.isValidName(value)) {
            errorMessage = 'Full name must be at least 2 characters and contain no numbers';
            isValid = false;
        }

        this.updateFieldUI(element, errorElement, isValid, errorMessage);
        StateManager.setFormData('fullName', value);
        StateManager.setValidationState('fullName', isValid);
        StateManager.setError('fullName', errorMessage);
    },

    /**
     * Validate password field
     * @param {HTMLInputElement} element
     */
    validatePassword(element) {
        const value = element.value;
        const errorElement = document.getElementById('password-error');
        const strengthElement = document.getElementById('password-strength');
        
        let isValid = true;
        let errorMessage = '';

        if (!value) {
            errorMessage = 'Password is required';
            isValid = false;
        } else {
            const validation = ValidationModule.validatePassword(value);
            
            if (!validation.meetsRequirements) {
                const missing = [];
                if (!validation.minLength) missing.push('8+ characters');
                if (!validation.hasUpperCase) missing.push('uppercase letter');
                if (!validation.hasLowerCase) missing.push('lowercase letter');
                if (!validation.hasNumbers) missing.push('number');
                
                errorMessage = `Add ${missing.join(', ')}`;
                isValid = false;
            }

            // Update strength indicator
            strengthElement.className = `password-strength ${validation.strength}`;
        }

        this.updateFieldUI(element, errorElement, isValid, errorMessage);
        StateManager.setFormData('password', value);
        StateManager.setValidationState('password', isValid);
        StateManager.setError('password', errorMessage);
    },

    /**
     * Validate company name field
     * @param {HTMLInputElement} element
     */
    validateCompanyName(element) {
        const value = element.value.trim();
        const errorElement = document.getElementById('companyName-error');
        let isValid = true;
        let errorMessage = '';

        if (!value) {
            errorMessage = 'Company name is required';
            isValid = false;
        } else if (!ValidationModule.isValidCompanyName(value)) {
            errorMessage = 'Company name must be at least 2 characters';
            isValid = false;
        }

        this.updateFieldUI(element, errorElement, isValid, errorMessage);
        StateManager.setFormData('companyName', value);
        StateManager.setValidationState('companyName', isValid);
        StateManager.setError('companyName', errorMessage);
    },

    /**
     * Validate select field
     * @param {HTMLSelectElement} element
     * @param {string} fieldName
     */
    validateSelect(element, fieldName) {
        const value = element.value;
        const errorElement = document.getElementById(`${fieldName}-error`);
        let isValid = true;
        let errorMessage = '';

        if (!ValidationModule.isValidSelect(value)) {
            errorMessage = `Please select a ${fieldName}`;
            isValid = false;
        }

        this.updateFieldUI(element, errorElement, isValid, errorMessage);
        StateManager.setFormData(fieldName, value);
        StateManager.setValidationState(fieldName, isValid);
        StateManager.setError(fieldName, errorMessage);
    },

    /**
     * Validate terms checkbox
     * @param {HTMLInputElement} element
     */
    validateTerms(element) {
        const isValid = element.checked;
        StateManager.setFormData('terms', isValid);
        StateManager.setValidationState('terms', isValid);
    },

    /**
     * Update field UI based on validation state
     * @param {HTMLElement} fieldElement
     * @param {HTMLElement} errorElement
     * @param {boolean} isValid
     * @param {string} errorMessage
     */
    updateFieldUI(fieldElement, errorElement, isValid, errorMessage) {
        if (isValid) {
            fieldElement.classList.remove('error');
            fieldElement.classList.add('success');
            if (errorElement) errorElement.textContent = '';
        } else {
            fieldElement.classList.remove('success');
            fieldElement.classList.add('error');
            if (errorElement) errorElement.textContent = errorMessage;
        }
    }
};

// ============================================================================
// MODAL CONTROLLER - Manages modal behavior and navigation
// ============================================================================
const ModalController = {
    elements: {},

    /**
     * Initialize DOM element references
     */
    initElements() {
        this.elements = {
            modal: document.getElementById('onboardingModal'),
            form: document.getElementById('onboardingForm'),
            closeBtn: document.getElementById('closeBtn'),
            backBtn: document.getElementById('backBtn'),
            nextBtn: document.getElementById('nextBtn'),
            submitBtn: document.getElementById('submitBtn'),
            editBtn: document.getElementById('editBtn'),
            progressFill: document.getElementById('progressFill'),
            currentStepDisplay: document.getElementById('currentStep'),
            totalStepsDisplay: document.getElementById('totalSteps'),
            email: document.getElementById('email'),
            fullName: document.getElementById('fullName'),
            password: document.getElementById('password'),
            passwordToggle: document.getElementById('passwordToggle'),
            companyName: document.getElementById('companyName'),
            role: document.getElementById('role'),
            companySize: document.getElementById('companySize'),
            terms: document.getElementById('terms'),
            successState: document.getElementById('successState')
        };
    },

    /**
     * Get step element by number
     * @param {number} stepNumber
     * @returns {HTMLElement}
     */
    getStepElement(stepNumber) {
        return document.getElementById(`step${stepNumber}`);
    },

    /**
     * Show specific step
     * @param {number} stepNumber
     */
    showStep(stepNumber) {
        // Hide all steps
        for (let i = 1; i <= 4; i++) {
            const step = this.getStepElement(i);
            if (step) step.hidden = true;
        }

        // Show target step
        const targetStep = this.getStepElement(stepNumber);
        if (targetStep) targetStep.hidden = false;

        // Update progress
        this.updateProgress(stepNumber);
        this.updateButtonStates(stepNumber);
    },

    /**
     * Update progress bar and counter
     * @param {number} stepNumber
     */
    updateProgress(stepNumber) {
        const progress = (stepNumber / StateManager.state.totalSteps) * 100;
        this.elements.progressFill.style.width = `${progress}%`;
        this.elements.currentStepDisplay.textContent = stepNumber;
    },

    /**
     * Update button visibility and states
     * @param {number} stepNumber
     */
    updateButtonStates(stepNumber) {
        const isFirstStep = stepNumber === 1;
        const isLastStep = stepNumber === StateManager.state.totalSteps;

        // Back button
        this.elements.backBtn.style.display = isFirstStep ? 'none' : 'flex';

        // Next button
        this.elements.nextBtn.style.display = isLastStep ? 'none' : 'flex';

        // Submit button
        this.elements.submitBtn.style.display = isLastStep ? 'flex' : 'none';
    },

    /**
     * Validate current step
     * @returns {boolean}
     */
    validateCurrentStep() {
        const currentStep = StateManager.state.currentStep;

        switch (currentStep) {
            case 1:
                return this.validateStep1();
            case 2:
                return this.validateStep2();
            case 3:
                return this.validateStep3();
            case 4:
                return true; // Review step is read-only
            default:
                return false;
        }
    },

    /**
     * Validate step 1 fields
     * @returns {boolean}
     */
    validateStep1() {
        FieldValidator.validateEmail(this.elements.email);
        FieldValidator.validateTerms(this.elements.terms);

        const emailValid = StateManager.state.validationState.email;
        const termsValid = StateManager.state.validationState.terms;

        if (!termsValid) {
            const termsError = document.getElementById('terms-error');
            if (termsError) termsError.textContent = 'You must agree to continue';
        }

        return emailValid && termsValid;
    },

    /**
     * Validate step 2 fields
     * @returns {boolean}
     */
    validateStep2() {
        FieldValidator.validateFullName(this.elements.fullName);
        FieldValidator.validatePassword(this.elements.password);

        return StateManager.state.validationState.fullName && 
               StateManager.state.validationState.password;
    },

    /**
     * Validate step 3 fields
     * @returns {boolean}
     */
    validateStep3() {
        FieldValidator.validateCompanyName(this.elements.companyName);
        FieldValidator.validateSelect(this.elements.role, 'role');
        FieldValidator.validateSelect(this.elements.companySize, 'companySize');

        return StateManager.state.validationState.companyName && 
               StateManager.state.validationState.role && 
               StateManager.state.validationState.companySize;
    },

    /**
     * Move to next step
     */
    nextStep() {
        if (!this.validateCurrentStep()) return;

        const nextStepNum = StateManager.state.currentStep + 1;

        if (nextStepNum === 4) {
            this.populateReviewStep();
        }

        StateManager.setCurrentStep(nextStepNum);
        this.showStep(nextStepNum);
    },

    /**
     * Move to previous step
     */
    previousStep() {
        const prevStepNum = StateManager.state.currentStep - 1;
        StateManager.setCurrentStep(prevStepNum);
        this.showStep(prevStepNum);
    },

    /**
     * Populate review step with form data
     */
    populateReviewStep() {
        const data = StateManager.getFormData();
        const roleOptions = {
            'founder': 'Founder / CEO',
            'manager': 'Manager',
            'developer': 'Developer',
            'designer': 'Designer',
            'other': 'Other'
        };
        const sizeOptions = {
            '1-10': '1-10 people',
            '11-50': '11-50 people',
            '51-200': '51-200 people',
            '200+': '200+ people'
        };

        document.getElementById('review-email').textContent = data.email;
        document.getElementById('review-fullName').textContent = data.fullName;
        document.getElementById('review-companyName').textContent = data.companyName;
        document.getElementById('review-role').textContent = roleOptions[data.role] || data.role;
        document.getElementById('review-companySize').textContent = sizeOptions[data.companySize] || data.companySize;
    },

    /**
     * Handle form submission
     */
    async submitForm() {
        StateManager.state.isSubmitting = true;
        this.elements.submitBtn.disabled = true;

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Show success state
        this.showSuccessState();

        // Redirect after 2 seconds
        setTimeout(() => {
            this.resetModal();
        }, 2000);

        StateManager.state.isSubmitting = false;
    },

    /**
     * Show success state
     */
    showSuccessState() {
        for (let i = 1; i <= 4; i++) {
            const step = this.getStepElement(i);
            if (step) step.hidden = true;
        }
        this.elements.successState.hidden = false;
        this.elements.backBtn.style.display = 'none';
        this.elements.nextBtn.style.display = 'none';
        this.elements.submitBtn.style.display = 'none';
        this.elements.editBtn.style.display = 'none';
    },

    /**
     * Reset modal to initial state
     */
    resetModal() {
        StateManager.resetState();
        this.elements.form.reset();
        this.clearAllErrors();
        this.showStep(1);
        this.elements.successState.hidden = true;
        this.elements.submitBtn.disabled = false;
    },

    /**
     * Clear all error messages and validation states
     */
    clearAllErrors() {
        document.querySelectorAll('.form-error').forEach(el => el.textContent = '');
        document.querySelectorAll('input, select').forEach(el => {
            el.classList.remove('error', 'success');
        });
    },

    /**
     * Close modal
     */
    closeModal() {
        this.elements.modal.style.animation = 'modalOut 0.35s ease-out forwards';
        setTimeout(() => {
            this.resetModal();
            this.elements.modal.style.animation = 'modalIn 0.35s ease-out';
        }, 350);
    }
};

// ============================================================================
// EVENT LISTENERS - Setup event handling
// ============================================================================
const EventSetup = {
    /**
     * Initialize all event listeners
     */
    init() {
        this.setupFieldListeners();
        this.setupButtonListeners();
        this.setupFormListeners();
        this.setupKeyboardShortcuts();
    },

    /**
     * Setup real-time field validation
     */
    setupFieldListeners() {
        const { email, fullName, password, passwordToggle, companyName, role, companySize, terms } = ModalController.elements;

        // Email validation
        email.addEventListener('blur', () => FieldValidator.validateEmail(email));
        email.addEventListener('input', () => {
            if (StateManager.state.validationState.email) {
                FieldValidator.validateEmail(email);
            }
        });

        // Full name validation
        fullName.addEventListener('blur', () => FieldValidator.validateFullName(fullName));
        fullName.addEventListener('input', () => {
            if (StateManager.state.validationState.fullName) {
                FieldValidator.validateFullName(fullName);
            }
        });

        // Password validation
        password.addEventListener('blur', () => FieldValidator.validatePassword(password));
        password.addEventListener('input', () => FieldValidator.validatePassword(password));

        // Password toggle
        passwordToggle.addEventListener('click', (e) => {
            e.preventDefault();
            const type = password.type === 'password' ? 'text' : 'password';
            password.type = type;
            passwordToggle.setAttribute('aria-label', 
                type === 'password' ? 'Show password' : 'Hide password');
        });

        // Company name validation
        companyName.addEventListener('blur', () => FieldValidator.validateCompanyName(companyName));
        companyName.addEventListener('input', () => {
            if (StateManager.state.validationState.companyName) {
                FieldValidator.validateCompanyName(companyName);
            }
        });

        // Role validation
        role.addEventListener('change', () => FieldValidator.validateSelect(role, 'role'));

        // Company size validation
        companySize.addEventListener('change', () => FieldValidator.validateSelect(companySize, 'companySize'));

        // Terms checkbox
        terms.addEventListener('change', () => FieldValidator.validateTerms(terms));
    },

    /**
     * Setup button event listeners
     */
    setupButtonListeners() {
        const { backBtn, nextBtn, submitBtn, closeBtn, editBtn } = ModalController.elements;

        backBtn.addEventListener('click', () => ModalController.previousStep());
        nextBtn.addEventListener('click', () => ModalController.nextStep());
        submitBtn.addEventListener('click', (e) => {
            e.preventDefault();
            ModalController.submitForm();
        });
        closeBtn.addEventListener('click', () => ModalController.closeModal());
        editBtn.addEventListener('click', () => {
            StateManager.setCurrentStep(1);
            ModalController.showStep(1);
        });
    },

    /**
     * Setup form event listeners
     */
    setupFormListeners() {
        const { form } = ModalController.elements;
        
        form.addEventListener('submit', (e) => {
            e.preventDefault();
        });
    },

    /**
     * Setup keyboard shortcuts
     */
    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // ESC to close
            if (e.key === 'Escape') {
                ModalController.closeModal();
            }

            // Enter to proceed (when not in textarea)
            if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
                const currentStep = StateManager.state.currentStep;
                const isLastStep = currentStep === StateManager.state.totalSteps;

                // Prevent default form submission
                if (e.target.tagName === 'FORM') {
                    e.preventDefault();
                }

                if (!isLastStep && e.target.tagName !== 'SELECT') {
                    e.preventDefault();
                    ModalController.nextStep();
                }
            }
        });
    }
};

// ============================================================================
// INITIALIZATION - App startup
// ============================================================================
const AppInit = {
    /**
     * Initialize the entire application
     */
    init() {
        // Setup DOM elements
        ModalController.initElements();

        // Show initial step
        ModalController.showStep(1);

        // Setup event listeners
        EventSetup.init();

        // Log initialization (remove in production if desired)
        console.log('✓ Onboarding modal initialized successfully');
    }
};

// ============================================================================
// APP START - Initialize on DOM ready
// ============================================================================
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        AppInit.init();
    });
} else {
    AppInit.init();
}
