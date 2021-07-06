import { TextField } from '@material-ui/core'
import PropTypes from 'prop-types'
import { useController } from 'react-hook-form';

export default function FieldInput({
  name, control, type, variant, placeholder, defaultValue,
 }) {
    const {
        field: { ref, ...inputProps },
        fieldState: { error },
        // formState: { touchedFields, dirtyFields },
      } = useController({
        name,
        control,
        defaultValue,
      });
    return (
      <TextField
        {...inputProps}
        type={type}
        variant={variant}
        placeholder={placeholder}
        inputRef={ref}
        error={!!error}
        helperText={error ? error.message : null}
      />
)
}

FieldInput.defaultProps = {
    placeholder: null,
    variant: 'outlined',
}

FieldInput.propTypes = {
    name: PropTypes.string.isRequired,
    control: PropTypes.oneOfType([
        PropTypes.object,
    ]).isRequired,
    type: PropTypes.oneOf(['text', 'email', 'password']).isRequired,
    placeholder: PropTypes.string,
    variant: PropTypes.string,
    // value: PropTypes.oneOfType([
    //     PropTypes.string,
    //     PropTypes.number,
    // ]).isRequired,
    // onChange: PropTypes.func.isRequired,
}
